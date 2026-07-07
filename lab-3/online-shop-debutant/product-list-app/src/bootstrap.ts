import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductListComponent } from './product-list.component';

bootstrapApplication(ProductListComponent).catch((err) => console.error(err));
