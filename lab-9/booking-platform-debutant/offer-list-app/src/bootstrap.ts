import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { OfferListComponent } from './offer-list.component';

bootstrapApplication(OfferListComponent).catch((err) => console.error(err));
