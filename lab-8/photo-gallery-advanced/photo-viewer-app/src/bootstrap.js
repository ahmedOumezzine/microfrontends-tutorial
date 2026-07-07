import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoViewer from './PhotoViewer.vue';

createApp(PhotoViewer, { photoId: '1' }).mount('#app');
