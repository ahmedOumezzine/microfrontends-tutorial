<template>
  <div class="card border-0 shadow-sm">
    <div class="card-header bg-white border-0 pt-4 px-4">
      <p class="text-uppercase text-primary fw-semibold small mb-1">Remote : course-list-app</p>
      <h2 class="h4 mb-0">{{ t('title') }}</h2>
      <p class="text-muted small mb-0">{{ t('subtitle') }}</p>
    </div>

    <div class="list-group list-group-flush">
      <button
        v-for="course in courses"
        :key="course.id"
        class="list-group-item list-group-item-action p-3"
        :class="{ active: selectedCourse === course.id }"
        @click="$emit('select-course', course.id)"
      >
        <div class="d-flex justify-content-between gap-3">
          <strong>{{ course.name[locale] }}</strong>
          <span class="badge text-bg-light border text-dark">{{ course.duration }}</span>
        </div>
        <span class="d-block small">{{ course.level[locale] }}</span>
        <span class="d-block small opacity-75">{{ course.track[locale] }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { createI18n } from 'vue-i18n';

const props = defineProps({ locale: String, selectedCourse: String });
defineEmits(['select-course']);

const i18n = createI18n({
  legacy: false,
  locale: props.locale || 'fr',
  messages: {
    fr: { title: 'Catalogue de cours', subtitle: 'Messages locaux dans la remote.' },
    en: { title: 'Course catalog', subtitle: 'Local messages inside the remote.' },
    es: { title: 'Catalogo de cursos', subtitle: 'Mensajes locales dentro del remote.' },
  },
});

const t = (key) => i18n.global.t(key, {}, { locale: props.locale });
const courses = [
  {
    id: 'vue',
    duration: '25 min',
    name: { fr: 'Architecture Vue', en: 'Vue Architecture', es: 'Arquitectura Vue' },
    level: { fr: 'Intermediaire', en: 'Intermediate', es: 'Intermedio' },
    track: { fr: 'Composants et props', en: 'Components and props', es: 'Componentes y props' },
  },
  {
    id: 'mf',
    duration: '35 min',
    name: { fr: 'Module Federation', en: 'Module Federation', es: 'Module Federation' },
    level: { fr: 'Avance', en: 'Advanced', es: 'Avanzado' },
    track: { fr: 'Host, remotes et remoteEntry', en: 'Host, remotes and remoteEntry', es: 'Host, remotes y remoteEntry' },
  },
  {
    id: 'i18n',
    duration: '30 min',
    name: { fr: 'Internationalisation', en: 'Internationalization', es: 'Internacionalizacion' },
    level: { fr: 'Pratique', en: 'Practical', es: 'Practico' },
    track: { fr: 'Messages et synchronisation', en: 'Messages and synchronization', es: 'Mensajes y sincronizacion' },
  },
  {
    id: 'ux',
    duration: '20 min',
    name: { fr: 'UX multilingue', en: 'Multilingual UX', es: 'UX multilingue' },
    level: { fr: 'Produit', en: 'Product', es: 'Producto' },
    track: { fr: 'Libelles, etats et contexte', en: 'Labels, states and context', es: 'Etiquetas, estados y contexto' },
  },
];
</script>
