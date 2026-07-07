import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { OfferDetailComponent } from './offer-detail.component';

bootstrapApplication(OfferDetailComponent).catch((err) => console.error(err));
