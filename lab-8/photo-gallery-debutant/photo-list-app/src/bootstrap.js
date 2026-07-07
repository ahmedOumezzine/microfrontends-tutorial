import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoList from './PhotoList.vue';

createApp(PhotoList, { selectedPhoto: '1' }).mount('#app');
