import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonDetail from './LessonDetail.vue';

createApp(LessonDetail, { locale: 'fr', courseId: 'vue' }).mount('#app');
