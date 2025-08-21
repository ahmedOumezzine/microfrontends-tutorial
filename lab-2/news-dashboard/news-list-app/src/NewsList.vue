<template>
  <div class="card">
    <div class="card-header"><h2>Actualités</h2></div>
    <ul class="list-group">
      <li v-for="news in mockNews" :key="news.id" class="list-group-item" @click="$emit('select-news', news.id)">
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['select-news'],
  data() {
    return {
      mockNews: [
        { id: 1, title: 'News 1' },
        { id: 2, title: 'News 2' }
      ]
    };
  }
};
</script>