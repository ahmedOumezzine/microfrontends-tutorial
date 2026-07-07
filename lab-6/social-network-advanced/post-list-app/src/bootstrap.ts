import 'zone.js';
import '@angular/compiler';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { PostListComponent } from './post-list.component';

bootstrapApplication(PostListComponent).catch((err) => console.error(err));
