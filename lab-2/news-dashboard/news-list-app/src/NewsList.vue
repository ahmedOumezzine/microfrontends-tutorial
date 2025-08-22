<template>
  <div class="card">
    <div class="card-header"><h2>Flux d’Actualités</h2></div>
    <div v-if="isAuthenticated">
      <ul class="list-group">
        <li v-for="news in mockNews" :key="news.id" class="list-group-item" @click="$emit('select-news', news.id)">
          {{ news.title }}
        </li>
      </ul>
    </div>
    <div v-else class="alert alert-danger mt-3">
      Accès non autorisé. Veuillez vous connecter.
    </div>
  </div>
</template>

<script>
export default {
  emits: ['select-news'],
  data() {
    return {
      mockNews: [
        { id: 1, title: 'Actualité 1' },
        { id: 2, title: 'Actualité 2' },
      ],
      isAuthenticated: false,
    };
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token));
        const now = Math.floor(Date.now() / 1000);
        if (payload.exp && payload.exp > now) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
          localStorage.removeItem('token');
        }
      } catch (e) {
        this.isAuthenticated = false;
        localStorage.removeItem('token');
      }
    }
  },
};
</script>