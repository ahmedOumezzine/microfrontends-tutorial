<template>
  <div class="card">
    <div class="card-header"><h2>Détails</h2></div>
    <div class="card-body">
      <h5>{{ details.title }}</h5>
      <p>{{ details.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['newsId'],
  computed: {
    details() {
      const mock = { 1: { title: 'News 1', content: 'Details 1' }, 2: { title: 'News 2', content: 'Details 2' } };
      return mock[this.newsId] || { title: 'Sélectionnez une news', content: '' };
    }
  }
};
</script>