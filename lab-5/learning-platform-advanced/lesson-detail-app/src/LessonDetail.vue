<template>
  <div class="card border-0 shadow-sm h-100">
    <div class="card-header bg-white border-0 pt-4 px-4">
      <p class="text-uppercase text-success fw-semibold small mb-1">Remote : lesson-detail-app</p>
      <div class="d-flex justify-content-between align-items-start gap-3">
        <div>
          <h2 class="h4 mb-1">{{ t('title') }}</h2>
          <p class="text-muted small mb-0">{{ t('subtitle') }}</p>
        </div>
        <span class="badge text-bg-success">{{ lesson.duration }}</span>
      </div>
    </div>

    <div class="card-body p-4">
      <h3 class="h4">{{ lesson.name[locale] }}</h3>
      <p class="lead">{{ lesson.description[locale] }}</p>

      <div class="alert alert-success">{{ lesson.outcome[locale] }}</div>

      <h4 class="h6 text-uppercase text-muted">{{ t('checklist') }}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item px-0 d-flex justify-content-between" v-for="item in lesson.checks[locale]" :key="item">
          <span>{{ item }}</span>
          <span class="badge text-bg-light border text-dark">i18n</span>
        </li>
      </ul>
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
    fr: { title: 'Detail de lecon', subtitle: 'Contenu traduit localement.', checklist: 'Checklist' },
    en: { title: 'Lesson detail', subtitle: 'Content translated locally.', checklist: 'Checklist' },
    es: { title: 'Detalle de leccion', subtitle: 'Contenido traducido localmente.', checklist: 'Lista' },
  },
});

const t = (key) => i18n.global.t(key, {}, { locale: props.locale });
const lessons = {
  vue: {
    name: { fr: 'Composants Vue', en: 'Vue Components', es: 'Componentes Vue' },
    description: { fr: 'Composer une interface modulaire avec des props explicites.', en: 'Compose a modular interface with explicit props.', es: 'Componer una interfaz modular con props explicitas.' },
    outcome: { fr: 'Vous savez isoler une remote Vue reutilisable.', en: 'You can isolate a reusable Vue remote.', es: 'Puedes aislar un remote Vue reutilizable.' },
    checks: { fr: ['Props documentees', 'Etat local clair', 'Fallback prevu'], en: ['Documented props', 'Clear local state', 'Fallback planned'], es: ['Props documentadas', 'Estado local claro', 'Fallback previsto'] },
    duration: '25 min',
  },
  mf: {
    name: { fr: 'Remotes Webpack', en: 'Webpack Remotes', es: 'Remotes Webpack' },
    description: { fr: 'Charger un composant distant avec Module Federation.', en: 'Load a remote component with Module Federation.', es: 'Cargar un componente remoto con Module Federation.' },
    outcome: { fr: 'Vous comprenez le contrat entre Host et remoteEntry.', en: 'You understand the contract between Host and remoteEntry.', es: 'Entiendes el contrato entre Host y remoteEntry.' },
    checks: { fr: ['Remote exposee', 'URL verifiee', 'Dependances partagees'], en: ['Remote exposed', 'URL verified', 'Shared dependencies'], es: ['Remote expuesto', 'URL verificada', 'Dependencias compartidas'] },
    duration: '35 min',
  },
  i18n: {
    name: { fr: 'Messages partages', en: 'Shared Messages', es: 'Mensajes compartidos' },
    description: { fr: 'Synchroniser la langue entre micro-frontends sans fusionner les catalogues.', en: 'Synchronize language across micro-frontends without merging catalogs.', es: 'Sincronizar idioma entre micro-frontends sin fusionar catalogos.' },
    outcome: { fr: 'Chaque remote reste autonome tout en suivant la langue globale.', en: 'Each remote stays autonomous while following the global language.', es: 'Cada remote sigue autonomo y respeta el idioma global.' },
    checks: { fr: ['Locale transmise', 'Messages locaux', 'Changement instantane'], en: ['Locale passed', 'Local messages', 'Instant switch'], es: ['Locale transmitida', 'Mensajes locales', 'Cambio instantaneo'] },
    duration: '30 min',
  },
  ux: {
    name: { fr: 'UX multilingue', en: 'Multilingual UX', es: 'UX multilingue' },
    description: { fr: 'Verifier que les libelles, badges et etats restent coherents dans chaque langue.', en: 'Verify labels, badges and states stay coherent in every language.', es: 'Verificar que etiquetas, badges y estados sean coherentes en cada idioma.' },
    outcome: { fr: 'La qualite produit reste visible dans toutes les langues.', en: 'Product quality remains visible in every language.', es: 'La calidad de producto sigue visible en cada idioma.' },
    checks: { fr: ['Libelles courts', 'Etats traduits', 'Aucune rupture UI'], en: ['Short labels', 'Translated states', 'No UI break'], es: ['Etiquetas cortas', 'Estados traducidos', 'Sin ruptura UI'] },
    duration: '20 min',
  },
};
const lesson = computed(() => lessons[props.courseId] || lessons.vue);
</script>
