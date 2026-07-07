<template>
  <div class="card">
    <div class="card-header"><h2 class="h4 mb-0">{{ t('title') }}</h2></div>
    <div class="card-body">
      <h3 class="h5">{{ lesson.name[locale] }}</h3>
      <p>{{ lesson.description[locale] }}</p>
      <span class="badge text-bg-info">{{ lesson.duration }}</span>
    </div>
  </div>
</template>

<script setup>
import { createI18n } from 'vue-i18n';
import { computed } from 'vue';

const props = defineProps({ locale: String, courseId: String });
const i18n = createI18n({
  legacy: false,
  locale: props.locale || 'fr',
  messages: {
    fr: { title: 'Lecon' },
    en: { title: 'Lesson' },
  },
});

const t = (key) => i18n.global.t(key, {}, { locale: props.locale });
const lessons = {
  vue: { name: { fr: 'Composants Vue', en: 'Vue Components' }, description: { fr: 'Composer une interface modulaire.', en: 'Compose a modular interface.' }, duration: '25 min' },
  mf: { name: { fr: 'Remotes Webpack', en: 'Webpack Remotes' }, description: { fr: 'Charger un composant distant.', en: 'Load a remote component.' }, duration: '35 min' },
  i18n: { name: { fr: 'Messages partages', en: 'Shared Messages' }, description: { fr: 'Synchroniser la langue entre micro-frontends.', en: 'Synchronize language across micro-frontends.' }, duration: '30 min' },
};
const lesson = computed(() => lessons[props.courseId] || lessons.vue);
</script>
