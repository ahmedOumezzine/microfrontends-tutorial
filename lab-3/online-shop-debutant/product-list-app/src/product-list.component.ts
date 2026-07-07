import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'product-list-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header"><h2 class="h4 mb-0">Produits</h2></div>
      <div class="list-group list-group-flush">
        <button class="list-group-item list-group-item-action" *ngFor="let product of products" (click)="addToCart(product)">
          <div class="d-flex justify-content-between">
            <strong>{{ product.name }}</strong>
            <span>{{ product.price }} EUR</span>
          </div>
          <p class="mb-0 text-muted">{{ product.description }}</p>
        </button>
      </div>
    </div>
  `,
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Clavier mecanique', price: 89, description: 'Accessoire pour developpeurs frontend.' },
    { id: 2, name: 'Ecran portable', price: 229, description: 'Second ecran pour travailler partout.' },
    { id: 3, name: 'Station USB-C', price: 119, description: 'Hub compact pour poste modulaire.' },
  ];

  addToCart(product: Product) {
    window.dispatchEvent(new CustomEvent('cart:add', { detail: product }));
  }
}
