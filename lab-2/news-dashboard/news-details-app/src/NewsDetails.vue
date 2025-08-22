<template>
  <div class="card">
    <div class="card-header"><h2>Détails de l’Actualité</h2></div>
    <div v-if="isAuthenticated" class="card-body">
      <h5>{{ details.title }}</h5>
      <p>{{ details.content }}</p>
    </div>
    <div v-else class="alert alert-danger mt-3">
      Accès non autorisé. Veuillez vous connecter.
    </div>
  </div>
</template>

<script>
export default {
  props: ['newsId'],
  data() {
    return {
      isAuthenticated: false,
    };
  },
  computed: {
    details() {
      const mock = {
        1: { title: 'Actualité 1', content: 'Contenu détaillé de l’actualité 1.' },
        2: { title: 'Actualité 2', content: 'Contenu détaillé de l’actualité 2.' },
      };
      return mock[this.newsId] || { title: 'Sélectionnez une actualité', content: '' };
    },
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