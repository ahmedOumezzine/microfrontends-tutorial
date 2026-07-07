import { CommonModule } from '@angular/common';
import { Component, Type, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-dark bg-primary"><div class="container"><span class="navbar-brand">Booking App - Lab 9</span><span class="badge text-bg-light">Vercel ready</span></div></nav>
    <main class="container py-4">
      <div class="alert alert-info">Article: Deploiement des Micro-Frontends.</div>
      <div class="row g-4">
        <section class="col-md-4"><ng-container *ngIf="offerList()" [ngComponentOutlet]="offerList()"></ng-container></section>
        <section class="col-md-8"><ng-container *ngIf="offerDetail()" [ngComponentOutlet]="offerDetail()"></ng-container></section>
      </div>
    </main>
  `,
})
export class AppComponent {
  offerList = signal<Type<unknown> | null>(null);
  offerDetail = signal<Type<unknown> | null>(null);

  constructor() {
    import('offerListApp/OfferList').then((m) => this.offerList.set(m.OfferListComponent));
    import('offerDetailApp/OfferDetail').then((m) => this.offerDetail.set(m.OfferDetailComponent));
  }
}
