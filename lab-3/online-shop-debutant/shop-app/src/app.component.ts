import { CommonModule } from '@angular/common';
import { Component, Type, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct, CartItem } from './state/cart.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <span class="navbar-brand">Online Shop - Lab 3</span>
        <span class="badge text-bg-light">Panier {{ itemCount() }}</span>
      </div>
    </nav>

    <main class="container py-4">
      <div class="alert alert-info">
        Article: Gestion d'etat dans les Micro-Frontends.
      </div>
      <div class="row g-4">
        <section class="col-md-8">
          <ng-container *ngIf="productListComponent(); else loadingProducts"
            [ngComponentOutlet]="productListComponent()"></ng-container>
          <ng-template #loadingProducts>
            <div class="spinner-border text-primary" role="status"></div>
          </ng-template>
        </section>
        <section class="col-md-4">
          <ng-container *ngIf="cartComponent(); else loadingCart"
            [ngComponentOutlet]="cartComponent()"></ng-container>
          <ng-template #loadingCart>
            <div class="spinner-border text-primary" role="status"></div>
          </ng-template>
        </section>
      </div>
    </main>
  `,
})
export class AppComponent {
  private store = inject(Store<{ cart: CartItem[] }>);
  productListComponent = signal<Type<unknown> | null>(null);
  cartComponent = signal<Type<unknown> | null>(null);
  itemCount = signal(0);

  constructor() {
    import('productListApp/ProductList').then((m) => this.productListComponent.set(m.ProductListComponent));
    import('cartApp/Cart').then((m) => this.cartComponent.set(m.CartComponent));

    window.addEventListener('cart:add', ((event: CustomEvent<CartItem>) => {
      this.store.dispatch(addProduct({ item: event.detail }));
      this.itemCount.update((count) => count + 1);
      const current = JSON.parse(localStorage.getItem('lab3-cart') || '[]');
      localStorage.setItem('lab3-cart', JSON.stringify([...current, event.detail]));
      window.dispatchEvent(new Event('cart:updated'));
    }) as EventListener);
  }
}
