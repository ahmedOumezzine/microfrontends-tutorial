<template>
  <div class="card">
    <div class="card-header"><h2 class="h4 mb-0">{{ t('title') }}</h2></div>
    <div class="list-group list-group-flush">
      <button
        v-for="course in courses"
        :key="course.id"
        class="list-group-item list-group-item-action"
        :class="{ active: selectedCourse === course.id }"
        @click="$emit('select-course', course.id)"
      >
        <strong>{{ course.name[locale] }}</strong>
        <span class="d-block small">{{ course.level[locale] }}</span>
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
    fr: { title: 'Cours' },
    en: { title: 'Courses' },
  },
});

const t = (key) => i18n.global.t(key, {}, { locale: props.locale });
const courses = [
  { id: 'vue', name: { fr: 'Architecture Vue', en: 'Vue Architecture' }, level: { fr: 'Intermediaire', en: 'Intermediate' } },
  { id: 'mf', name: { fr: 'Module Federation', en: 'Module Federation' }, level: { fr: 'Avance', en: 'Advanced' } },
  { id: 'i18n', name: { fr: 'Internationalisation', en: 'Internationalization' }, level: { fr: 'Pratique', en: 'Practical' } },
];
</script>
