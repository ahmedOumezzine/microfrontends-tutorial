<template>
  <article class="card" tabindex="0" :aria-labelledby="`photo-title-${photo.id}`">
    <div class="card-header"><h2 class="h4 mb-0" :id="`photo-title-${photo.id}`">{{ photo.title }}</h2></div>
    <div class="card-body">
      <div class="ratio ratio-16x9 bg-light border d-flex align-items-center justify-content-center" role="img" :aria-label="photo.alt">
        <span class="display-6 text-secondary">{{ photo.badge }}</span>
      </div>
      <p class="mt-3 mb-0">{{ photo.alt }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({ photoId: String });
const photos = {
  1: { id: '1', title: 'Architecture modulaire', badge: 'MFE', alt: 'Schema visuel representant trois modules frontend connectes.' },
  2: { id: '2', title: 'Composants accessibles', badge: 'ARIA', alt: 'Interface avec libelles et roles accessibles.' },
  3: { id: '3', title: 'Navigation clavier', badge: 'TAB', alt: 'Parcours clavier entre plusieurs boutons de galerie.' },
};
const photo = computed(() => photos[props.photoId] || photos[1]);
</script>
