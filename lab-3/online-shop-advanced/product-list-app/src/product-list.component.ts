import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  rating: number;
}

@Component({
  selector: 'product-list-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-white border-0 pt-4 px-4">
        <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
          <div>
            <p class="text-uppercase text-primary fw-semibold small mb-1">Remote : product-list-app</p>
            <h2 class="h4 mb-0">Catalogue equipe frontend</h2>
          </div>
          <div class="btn-group align-self-start">
            <button class="btn btn-sm" [class.btn-primary]="selectedCategory() === 'Tous'" [class.btn-outline-primary]="selectedCategory() !== 'Tous'" (click)="selectCategory('Tous')">Tous</button>
            <button class="btn btn-sm" [class.btn-primary]="selectedCategory() === category" [class.btn-outline-primary]="selectedCategory() !== category" *ngFor="let category of categories" (click)="selectCategory(category)">{{ category }}</button>
          </div>
        </div>
      </div>

      <div class="card-body p-4">
        <div class="row g-3">
          <article class="col-md-6" *ngFor="let product of filteredProducts()">
            <div class="border rounded h-100 p-3 bg-white">
              <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
                <div>
                  <span class="badge text-bg-light border mb-2">{{ product.category }}</span>
                  <h3 class="h5 mb-1">{{ product.name }}</h3>
                  <p class="text-muted small mb-0">{{ product.description }}</p>
                </div>
                <strong class="text-primary">{{ product.price }} EUR</strong>
              </div>

              <div class="d-flex justify-content-between align-items-center small text-muted mb-3">
                <span>Stock: {{ product.stock }}</span>
                <span>Note: {{ product.rating }}/5</span>
              </div>

              <button class="btn btn-dark w-100" (click)="addToCart(product)" [disabled]="product.stock === 0">
                Ajouter au panier
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  `,
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Clavier mecanique', price: 89, description: 'Switchs tactiles et chassis compact.', category: 'Setup', stock: 8, rating: 4.7 },
    { id: 2, name: 'Ecran portable', price: 229, description: 'Second ecran USB-C pour travailler partout.', category: 'Setup', stock: 4, rating: 4.8 },
    { id: 3, name: 'Station USB-C', price: 119, description: 'Hub compact pour poste modulaire.', category: 'Accessoires', stock: 11, rating: 4.5 },
    { id: 4, name: 'Casque focus', price: 149, description: 'Reduction de bruit pour sessions profondes.', category: 'Audio', stock: 5, rating: 4.6 },
    { id: 5, name: 'Lampe bureau', price: 59, description: 'Eclairage reglable pour longues journees.', category: 'Accessoires', stock: 9, rating: 4.4 },
  ];
  categories = Array.from(new Set(this.products.map((product) => product.category)));
  selectedCategory = signal('Tous');

  filteredProducts() {
    const category = this.selectedCategory();
    return category === 'Tous' ? this.products : this.products.filter((product) => product.category === category);
  }

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  addToCart(product: Product) {
    window.dispatchEvent(new CustomEvent('cart:add', { detail: product }));
  }
}
