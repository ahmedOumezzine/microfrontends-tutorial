import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { CartComponent } from './cart.component';

bootstrapApplication(CartComponent).catch((err) => console.error(err));
