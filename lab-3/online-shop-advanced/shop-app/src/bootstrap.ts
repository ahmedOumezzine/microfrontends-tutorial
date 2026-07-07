import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app.component';
import { cartReducer } from './state/cart.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ cart: cartReducer })],
}).catch((err) => console.error(err));
