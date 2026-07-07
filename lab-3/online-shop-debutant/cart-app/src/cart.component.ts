import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'cart-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h2 class="h4 mb-0">Panier</h2>
        <span class="badge text-bg-primary">{{ total() }} EUR</span>
      </div>
      <div class="card-body">
        <p class="text-muted" *ngIf="items().length === 0">Ajoutez un produit depuis la liste.</p>
        <ul class="list-group mb-3" *ngIf="items().length > 0">
          <li class="list-group-item d-flex justify-content-between" *ngFor="let item of items()">
            <span>{{ item.name }}</span>
            <strong>{{ item.price }} EUR</strong>
          </li>
        </ul>
        <button class="btn btn-outline-danger btn-sm" (click)="clear()" [disabled]="items().length === 0">Vider</button>
      </div>
    </div>
  `,
})
export class CartComponent {
  items = signal<CartItem[]>(this.readCart());
  total = signal(this.computeTotal(this.items()));

  @HostListener('window:cart:updated')
  refresh() {
    const items = this.readCart();
    this.items.set(items);
    this.total.set(this.computeTotal(items));
  }

  clear() {
    localStorage.removeItem('lab3-cart');
    this.refresh();
  }

  private readCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('lab3-cart') || '[]');
  }

  private computeTotal(items: CartItem[]) {
    return items.reduce((sum, item) => sum + item.price, 0);
  }
}
