<template>
  <div class="container mt-5">
    <h1>Tableau de Bord d’Actualités</h1>
    <div class="row">
      <div class="col-md-4">
        <news-list @select-news="selectNews" />
      </div>
      <div class="col-md-8">
        <news-details :news-id="selectedNews" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';

const NewsList = defineAsyncComponent(() => import('newsListApp/NewsList'));
const NewsDetails = defineAsyncComponent(() => import('newsDetailsApp/NewsDetails'));

const selectedNews = ref(null);
const selectNews = (id) => {
  selectedNews.value = id;
};
</script>