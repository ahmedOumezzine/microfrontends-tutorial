<template>
  <nav class="navbar navbar-dark bg-info">
    <div class="container">
      <span class="navbar-brand">Learning App - Lab 5</span>
      <select v-model="locale" class="form-select w-auto" aria-label="Language">
        <option value="fr">Francais</option>
        <option value="en">English</option>
      </select>
    </div>
  </nav>
  <main class="container py-4">
    <div class="alert alert-info">{{ intro }}</div>
    <div class="row g-4">
      <section class="col-md-4">
        <course-list :locale="locale" :selected-course="selectedCourse" @select-course="selectedCourse = $event" />
      </section>
      <section class="col-md-8">
        <lesson-detail :locale="locale" :course-id="selectedCourse" />
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';

const CourseList = defineAsyncComponent(() => import('courseListApp/CourseList'));
const LessonDetail = defineAsyncComponent(() => import('lessonDetailApp/LessonDetail'));

const locale = ref('fr');
const selectedCourse = ref('vue');
const intro = computed(() =>
  locale.value === 'fr'
    ? 'Article: Internationalisation dans les Micro-Frontends.'
    : 'Article: Internationalization in Micro-Frontends.'
);
</script>
