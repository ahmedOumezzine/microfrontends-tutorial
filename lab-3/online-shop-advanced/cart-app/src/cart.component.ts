import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  category?: string;
  quantity?: number;
}

const CART_KEY = 'lab3-advanced-cart';

@Component({
  selector: 'cart-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-white border-0 pt-4 px-4">
        <p class="text-uppercase text-success fw-semibold small mb-1">Remote : cart-app</p>
        <div class="d-flex justify-content-between align-items-start gap-3">
          <div>
            <h2 class="h4 mb-0">Panier synchronise</h2>
            <p class="text-muted small mb-0">Lecture directe depuis localStorage.</p>
          </div>
          <span class="badge text-bg-success">{{ total() }} EUR</span>
        </div>
      </div>

      <div class="card-body p-4">
        <div class="text-center py-4" *ngIf="items().length === 0">
          <p class="text-muted mb-0">Ajoutez un produit depuis le catalogue.</p>
        </div>

        <ul class="list-group list-group-flush mb-3" *ngIf="items().length > 0">
          <li class="list-group-item px-0 d-flex justify-content-between gap-3" *ngFor="let item of items()">
            <div>
              <strong>{{ item.name }}</strong>
              <div class="small text-muted">{{ item.category }} x {{ item.quantity || 1 }}</div>
            </div>
            <strong>{{ item.price * (item.quantity || 1) }} EUR</strong>
          </li>
        </ul>

        <div class="border-top pt-3 mb-3">
          <div class="d-flex justify-content-between small">
            <span>Sous-total</span>
            <strong>{{ subtotal() }} EUR</strong>
          </div>
          <div class="d-flex justify-content-between small">
            <span>Livraison</span>
            <strong>{{ shipping() }} EUR</strong>
          </div>
          <div class="d-flex justify-content-between fs-5 mt-2">
            <span>Total</span>
            <strong>{{ total() }} EUR</strong>
          </div>
        </div>

        <button class="btn btn-outline-danger w-100" (click)="clear()" [disabled]="items().length === 0">Vider le panier</button>
      </div>
    </div>
  `,
})
export class CartComponent {
  items = signal<CartItem[]>(this.readCart());
  subtotal = signal(this.computeSubtotal(this.items()));
  shipping = signal(this.computeShipping(this.subtotal()));
  total = signal(this.subtotal() + this.shipping());

  @HostListener('window:cart:updated')
  refresh() {
    const items = this.readCart();
    this.items.set(items);
    this.syncTotals(items);
  }

  clear() {
    localStorage.removeItem(CART_KEY);
    this.refresh();
    window.dispatchEvent(new Event('cart:cleared'));
  }

  private readCart(): CartItem[] {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  }

  private syncTotals(items: CartItem[]) {
    const subtotal = this.computeSubtotal(items);
    const shipping = this.computeShipping(subtotal);
    this.subtotal.set(subtotal);
    this.shipping.set(shipping);
    this.total.set(subtotal + shipping);
  }

  private computeSubtotal(items: CartItem[]) {
    return items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  }

  private computeShipping(subtotal: number) {
    return subtotal === 0 || subtotal >= 250 ? 0 : 12;
  }
}
