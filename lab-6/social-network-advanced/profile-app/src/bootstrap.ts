import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';

bootstrapApplication(ProfileComponent).catch((err) => console.error(err));
