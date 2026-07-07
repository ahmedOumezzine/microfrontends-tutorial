import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
