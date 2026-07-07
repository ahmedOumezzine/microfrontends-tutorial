import { CommonModule } from '@angular/common';
import { Component, Type, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProduct, CartItem } from './state/cart.reducer';

const CART_KEY = 'lab3-advanced-cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-info">
      <div class="container">
        <span class="navbar-brand fw-semibold">Online Shop Advanced</span>
        <div class="d-flex align-items-center gap-2">
          <span class="badge text-bg-info">Articles {{ itemCount() }}</span>
          <span class="badge text-bg-light">Total {{ total() }} EUR</span>
        </div>
      </div>
    </nav>

    <main class="bg-body-tertiary min-vh-100">
      <section class="bg-dark text-white py-5">
        <div class="container">
          <div class="row align-items-end g-4">
            <div class="col-lg-8">
              <p class="text-uppercase text-info fw-semibold small mb-2">Lab 3 advanced</p>
              <h1 class="display-6 fw-bold mb-3">Gestion d'etat dans les Micro-Frontends Angular</h1>
              <p class="lead text-white-50 mb-0">
                Le Host coordonne NgRx, localStorage et les evenements navigateur pendant que les remotes restent autonomes.
              </p>
            </div>
            <div class="col-lg-4">
              <div class="row g-2 text-center">
                <div class="col-4">
                  <div class="border border-secondary rounded p-3">
                    <div class="h4 mb-0">{{ itemCount() }}</div>
                    <small class="text-white-50">Articles</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="border border-secondary rounded p-3">
                    <div class="h4 mb-0">{{ uniqueCount() }}</div>
                    <small class="text-white-50">Lignes</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="border border-secondary rounded p-3">
                    <div class="h4 mb-0">{{ total() }}</div>
                    <small class="text-white-50">EUR</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container py-4">
        <div class="alert alert-info d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>Etat partage : events navigateur + NgRx dans le Host + persistance localStorage.</span>
          <strong>Cle: {{ cartKey }}</strong>
        </div>

        <div class="row g-4">
          <section class="col-lg-8">
            <ng-container *ngIf="productListComponent(); else loadingProducts"
              [ngComponentOutlet]="productListComponent()"></ng-container>
            <ng-template #loadingProducts>
              <div class="placeholder-glow">
                <span class="placeholder col-12 rounded" style="height: 220px;"></span>
              </div>
            </ng-template>
          </section>
          <section class="col-lg-4">
            <ng-container *ngIf="cartComponent(); else loadingCart"
              [ngComponentOutlet]="cartComponent()"></ng-container>
            <ng-template #loadingCart>
              <div class="placeholder-glow">
                <span class="placeholder col-12 rounded" style="height: 220px;"></span>
              </div>
            </ng-template>
          </section>
        </div>
      </div>
    </main>
  `,
})
export class AppComponent {
  private store = inject(Store<{ cart: CartItem[] }>);
  productListComponent = signal<Type<unknown> | null>(null);
  cartComponent = signal<Type<unknown> | null>(null);
  itemCount = signal(0);
  uniqueCount = signal(0);
  total = signal(0);
  cartKey = CART_KEY;

  constructor() {
    import('productListApp/ProductList').then((m) => this.productListComponent.set(m.ProductListComponent));
    import('cartApp/Cart').then((m) => this.cartComponent.set(m.CartComponent));
    this.syncStats(this.readCart());

    window.addEventListener('cart:add', ((event: CustomEvent<CartItem>) => {
      this.store.dispatch(addProduct({ item: event.detail }));
      const nextCart = this.upsertItem(this.readCart(), event.detail);
      localStorage.setItem(CART_KEY, JSON.stringify(nextCart));
      this.syncStats(nextCart);
      window.dispatchEvent(new Event('cart:updated'));
    }) as EventListener);

    window.addEventListener('cart:cleared', () => {
      this.syncStats([]);
    });
  }

  private readCart(): CartItem[] {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  }

  private upsertItem(items: CartItem[], item: CartItem) {
    const existing = items.find((line) => line.id === item.id);
    if (!existing) {
      return [...items, { ...item, quantity: 1 }];
    }

    return items.map((line) =>
      line.id === item.id ? { ...line, quantity: (line.quantity || 1) + 1 } : line
    );
  }

  private syncStats(items: CartItem[]) {
    this.uniqueCount.set(items.length);
    this.itemCount.set(items.reduce((sum, item) => sum + (item.quantity || 1), 0));
    this.total.set(items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0));
  }
}
