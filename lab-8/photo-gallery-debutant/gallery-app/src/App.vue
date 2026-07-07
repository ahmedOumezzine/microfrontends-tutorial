<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Gallery App - Lab 8</span>
      <button class="btn btn-outline-light btn-sm" @click="runAudit">Audit axe</button>
    </div>
  </nav>
  <main class="container py-4" aria-live="polite">
    <div class="alert alert-info">Article: Accessibilite dans les Micro-Frontends.</div>
    <div v-if="auditMessage" class="alert alert-success">{{ auditMessage }}</div>
    <div class="row g-4">
      <section class="col-md-4" aria-label="Liste des photos">
        <photo-list :selected-photo="selectedPhoto" @select-photo="selectPhoto" />
      </section>
      <section class="col-md-8" aria-label="Photo selectionnee">
        <photo-viewer :photo-id="selectedPhoto" />
      </section>
    </div>
    <section v-if="viewHistory.length > 0" class="mt-4" aria-label="Historique des consultations">
      <h2 class="h4">Historique des consultations</h2>
      <div class="table-responsive">
        <table class="table table-striped table-bordered align-middle mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Photo</th>
              <th scope="col">Badge</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in viewHistory" :key="entry.key">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ entry.title }}</td>
              <td>{{ entry.badge }}</td>
              <td>{{ entry.alt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import axe from 'axe-core';

const PhotoList = defineAsyncComponent(() => import('photoListApp/PhotoList'));
const PhotoViewer = defineAsyncComponent(() => import('photoViewerApp/PhotoViewer'));
const selectedPhoto = ref('1');
const auditMessage = ref('');
const viewHistory = ref([]);

const photos = {
  1: { id: '1', title: 'Architecture modulaire', badge: 'MFE', alt: 'Schema visuel representant trois modules frontend connectes.' },
  2: { id: '2', title: 'Composants accessibles', badge: 'ARIA', alt: 'Interface avec libelles et roles accessibles.' },
  3: { id: '3', title: 'Navigation clavier', badge: 'TAB', alt: 'Parcours clavier entre plusieurs boutons de galerie.' },
};

const selectPhoto = (photoId) => {
  selectedPhoto.value = photoId;
  const photo = photos[photoId] || photos[1];
  viewHistory.value = [
    ...viewHistory.value,
    { ...photo, key: `${photo.id}-${viewHistory.value.length + 1}` },
  ];
};

const runAudit = async () => {
  const result = await axe.run(document);
  auditMessage.value = `${result.violations.length} violation(s) detectee(s)`;
};
</script>
