<template>
  <main class="bg-body-tertiary min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-info">
      <div class="container">
        <span class="navbar-brand fw-semibold">Learning Platform Advanced</span>
        <div class="d-flex align-items-center gap-2">
          <span class="badge text-bg-info">{{ currentLanguage.label }}</span>
          <select v-model="locale" class="form-select form-select-sm w-auto" aria-label="Language">
            <option v-for="language in languages" :key="language.code" :value="language.code">
              {{ language.label }}
            </option>
          </select>
        </div>
      </div>
    </nav>

    <section class="bg-dark text-white py-5">
      <div class="container">
        <div class="row align-items-end g-4">
          <div class="col-lg-8">
            <p class="text-uppercase text-info fw-semibold small mb-2">Lab 5 advanced</p>
            <h1 class="display-6 fw-bold mb-3">{{ copy.title }}</h1>
            <p class="lead text-white-50 mb-0">{{ copy.subtitle }}</p>
          </div>
          <div class="col-lg-4">
            <div class="row g-2 text-center">
              <div class="col-4">
                <div class="border border-secondary rounded p-3">
                  <div class="h4 mb-0">3</div>
                  <small class="text-white-50">{{ copy.languages }}</small>
                </div>
              </div>
              <div class="col-4">
                <div class="border border-secondary rounded p-3">
                  <div class="h4 mb-0">2</div>
                  <small class="text-white-50">Remotes</small>
                </div>
              </div>
              <div class="col-4">
                <div class="border border-secondary rounded p-3">
                  <div class="h4 mb-0">{{ selectedCourse.toUpperCase() }}</div>
                  <small class="text-white-50">{{ copy.active }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-4">
      <div class="alert alert-info d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>{{ copy.intro }}</span>
        <strong>{{ copy.contract }}: locale={{ locale }}</strong>
      </div>

      <div class="row g-4">
        <section class="col-lg-5">
          <course-list :locale="locale" :selected-course="selectedCourse" @select-course="selectedCourse = $event" />
        </section>
        <section class="col-lg-7">
          <lesson-detail :locale="locale" :course-id="selectedCourse" />
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';

const CourseList = defineAsyncComponent(() => import('courseListApp/CourseList'));
const LessonDetail = defineAsyncComponent(() => import('lessonDetailApp/LessonDetail'));

const languages = [
  { code: 'fr', label: 'Francais' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Espanol' },
];

const locale = ref('fr');
const selectedCourse = ref('vue');

const messages = {
  fr: {
    title: 'Internationalisation distribuee',
    subtitle: 'Le Host controle la langue, les remotes gardent leurs propres messages.',
    intro: 'Article: Internationalisation dans les Micro-Frontends.',
    languages: 'Langues',
    active: 'Cours actif',
    contract: 'Contrat',
  },
  en: {
    title: 'Distributed internationalization',
    subtitle: 'The Host controls the language while remotes keep their own messages.',
    intro: 'Article: Internationalization in Micro-Frontends.',
    languages: 'Languages',
    active: 'Active course',
    contract: 'Contract',
  },
  es: {
    title: 'Internacionalizacion distribuida',
    subtitle: 'El Host controla el idioma y los remotes conservan sus mensajes.',
    intro: 'Articulo: Internacionalizacion en Micro-Frontends.',
    languages: 'Idiomas',
    active: 'Curso activo',
    contract: 'Contrato',
  },
};

const copy = computed(() => messages[locale.value]);
const currentLanguage = computed(() => languages.find((language) => language.code === locale.value) || languages[0]);
</script>
