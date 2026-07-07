<template>
  <div class="card">
    <div class="card-header"><h2 class="h4 mb-0">Photos</h2></div>
    <div class="list-group list-group-flush" role="listbox" aria-label="Photos disponibles">
      <button
        v-for="photo in photos"
        :key="photo.id"
        class="list-group-item list-group-item-action"
        :class="{ active: selectedPhoto === photo.id }"
        role="option"
        :aria-selected="selectedPhoto === photo.id"
        @click="$emit('select-photo', photo.id)"
        @keydown.enter="$emit('select-photo', photo.id)"
      >
        {{ photo.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({ selectedPhoto: String });
defineEmits(['select-photo']);
const photos = [
  { id: '1', title: 'Architecture modulaire' },
  { id: '2', title: 'Composants accessibles' },
  { id: '3', title: 'Navigation clavier' },
];
</script>
