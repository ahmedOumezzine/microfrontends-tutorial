import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'offer-list-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header"><h2 class="h4 mb-0">Offres</h2></div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-0" *ngFor="let offer of offers">
          <button
            type="button"
            class="btn w-100 text-start rounded-0"
            [class.btn-primary]="selectedOffer?.name === offer.name"
            [class.btn-light]="selectedOffer?.name !== offer.name"
            (click)="selectOffer(offer)"
          >
            <strong>{{ offer.name }}</strong>
            <span class="d-block" [class.text-muted]="selectedOffer?.name !== offer.name">{{ offer.price }} EUR</span>
          </button>
        </li>
      </ul>
    </div>
  `,
})
export class OfferListComponent implements OnInit, OnDestroy {
  selectedOffer: { name: string; price: number } | null = null;

  offers = [
    { name: 'Coaching frontend', price: 120 },
    { name: 'Audit performance', price: 250 },
    { name: 'Atelier Module Federation', price: 400 },
    { name: 'Preparation deploiement cloud', price: 320 },
  ];

  selectOffer(offer: { name: string; price: number }) {
    this.selectedOffer = offer;
    window.dispatchEvent(new CustomEvent('offer-selected', { detail: offer }));
  }

  private readonly onReservationCompleted = () => {
    this.selectedOffer = null;
  };

  ngOnInit() {
    window.addEventListener('reservation-completed', this.onReservationCompleted);
  }

  ngOnDestroy() {
    window.removeEventListener('reservation-completed', this.onReservationCompleted);
  }
}
