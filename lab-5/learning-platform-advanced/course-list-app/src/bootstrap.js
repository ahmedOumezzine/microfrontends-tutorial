import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from './CourseList.vue';

createApp(CourseList, { locale: 'fr', selectedCourse: 'vue' }).mount('#app');
