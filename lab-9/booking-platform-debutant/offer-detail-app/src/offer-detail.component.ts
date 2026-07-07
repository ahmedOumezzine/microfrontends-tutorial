import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'offer-detail-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header"><h2 class="h4 mb-0">Reservation</h2></div>
      <div class="card-body">
        <div class="alert mb-3" [class.alert-secondary]="!selectedOffer" [class.alert-primary]="selectedOffer">
          <ng-container *ngIf="selectedOffer; else noOffer">
            Offre choisie : <strong>{{ selectedOffer.name }}</strong> - {{ selectedOffer.price }} EUR
          </ng-container>
          <ng-template #noOffer>Choisissez une offre avant de reserver.</ng-template>
        </div>
        <div class="text-danger small mb-3" *ngIf="submitted && errors.offer">{{ errors.offer }}</div>

        <label class="form-label" for="name">Nom</label>
        <input
          #nameInput
          id="name"
          class="form-control"
          [class.is-invalid]="submitted && errors.name"
          placeholder="Votre nom"
        >
        <div class="invalid-feedback mb-3" *ngIf="submitted && errors.name">{{ errors.name }}</div>

        <label class="form-label" for="date">Date</label>
        <input
          #dateInput
          id="date"
          class="form-control"
          [class.is-invalid]="submitted && errors.date"
          type="date"
        >
        <div class="invalid-feedback mb-3" *ngIf="submitted && errors.date">{{ errors.date }}</div>

        <button class="btn btn-primary mt-3" (click)="reserve(nameInput, dateInput)">Reserver</button>

        <div class="alert alert-success mt-3 mb-0" *ngIf="confirmationMessage">
          {{ confirmationMessage }}
        </div>

        <div class="mt-4" *ngIf="reservations.length > 0">
          <h3 class="h5">Historique des reservations</h3>
          <div class="table-responsive">
            <table class="table table-striped table-bordered align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Date</th>
                  <th scope="col">Offre</th>
                  <th scope="col">Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let reservation of reservations; let index = index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ reservation.name }}</td>
                  <td>{{ reservation.date }}</td>
                  <td>{{ reservation.offerName }}</td>
                  <td>{{ reservation.price }} EUR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class OfferDetailComponent implements OnInit, OnDestroy {
  selectedOffer: { name: string; price: number } | null = null;
  reservations: { name: string; date: string; offerName: string; price: number }[] = [];
  submitted = false;
  confirmationMessage = '';
  errors: { offer?: string; name?: string; date?: string } = {};

  private readonly onOfferSelected = (event: Event) => {
    this.selectedOffer = (event as CustomEvent<{ name: string; price: number }>).detail;
    this.errors.offer = undefined;
    this.confirmationMessage = '';
  };

  ngOnInit() {
    window.addEventListener('offer-selected', this.onOfferSelected);
  }

  ngOnDestroy() {
    window.removeEventListener('offer-selected', this.onOfferSelected);
  }

  reserve(nameInput: HTMLInputElement, dateInput: HTMLInputElement) {
    const name = nameInput.value.trim();
    const date = dateInput.value;

    this.submitted = true;
    this.confirmationMessage = '';
    this.errors = {};

    if (!this.selectedOffer) {
      this.errors.offer = 'Veuillez choisir une offre.';
    }

    if (!name) {
      this.errors.name = 'Le nom est obligatoire.';
    }

    if (!date) {
      this.errors.date = 'La date est obligatoire.';
    }

    if (Object.keys(this.errors).length > 0) {
      return;
    }

    const selectedOffer = this.selectedOffer;
    if (!selectedOffer) {
      return;
    }

    this.reservations = [
      ...this.reservations,
      { name, date, offerName: selectedOffer.name, price: selectedOffer.price },
    ];
    this.confirmationMessage = `Reservation confirmee pour ${name} le ${date} : ${selectedOffer.name} (${selectedOffer.price} EUR).`;
    nameInput.value = '';
    dateInput.value = '';
    this.selectedOffer = null;
    this.submitted = false;
    window.dispatchEvent(new CustomEvent('reservation-completed'));
  }
}
