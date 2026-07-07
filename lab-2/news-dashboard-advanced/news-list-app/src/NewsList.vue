<template>
  <section class="bg-white border rounded-3 shadow-sm overflow-hidden">
    <div class="p-4 border-bottom">
      <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
        <div>
          <p class="text-uppercase text-primary fw-semibold small mb-1">Remote : 9021</p>
          <h2 class="h4 fw-bold mb-0">Flux securise</h2>
        </div>
        <span class="badge text-bg-light border">{{ filteredNews.length }} resultat(s)</span>
      </div>

      <div v-if="isAuthenticated">
        <label for="news-search" class="form-label small fw-semibold">Recherche</label>
        <input
          id="news-search"
          v-model="query"
          type="search"
          class="form-control"
          placeholder="Titre, categorie ou source..."
        >

        <div class="d-flex flex-wrap gap-2 mt-3">
          <button
            v-for="item in categories"
            :key="item"
            type="button"
            class="btn btn-sm"
            :class="category === item ? 'btn-primary' : 'btn-outline-secondary'"
            @click="category = item"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="isAuthenticated" class="list-group list-group-flush">
      <button
        v-for="news in filteredNews"
        :key="news.id"
        type="button"
        class="list-group-item list-group-item-action text-start p-4"
        :class="{ active: news.id === selectedId }"
        @click="$emit('select-news', news.id)"
      >
        <div class="d-flex justify-content-between gap-3 mb-2">
          <span class="badge" :class="news.id === selectedId ? 'text-bg-light' : 'text-bg-primary'">
            {{ news.category }}
          </span>
          <span class="small" :class="news.id === selectedId ? 'text-white-50' : 'text-secondary'">
            {{ news.source }}
          </span>
        </div>
        <h3 class="h6 fw-bold mb-2">{{ news.title }}</h3>
        <p class="small mb-0" :class="news.id === selectedId ? 'text-white-50' : 'text-secondary'">
          {{ news.summary }}
        </p>
      </button>

      <div v-if="filteredNews.length === 0" class="p-4 text-center text-secondary">
        Aucun resultat pour cette recherche.
      </div>
    </div>

    <div v-else class="alert alert-danger m-4">
      Acces non autorise. Veuillez vous connecter.
    </div>
  </section>
</template>

<script>
const mockNews = [
  {
    id: 1,
    title: 'Securite dans les Micro-Frontends',
    summary: 'Comprendre pourquoi le Host et les remotes doivent verifier le token.',
    category: 'Securite',
    source: 'Architecture Daily',
  },
  {
    id: 2,
    title: 'Token local et defense en profondeur',
    summary: 'Le token simule reste simple, mais le flux explique un vrai pattern.',
    category: 'Auth',
    source: 'Frontend Lab',
  },
  {
    id: 3,
    title: 'Module Federation et contrats de confiance',
    summary: 'Chaque remote garde sa logique d acces et son contrat public.',
    category: 'Federation',
    source: 'MF Weekly',
  },
];

export default {
  props: {
    selectedId: {
      type: Number,
      default: 1,
    },
  },
  emits: ['select-news'],
  data() {
    return {
      mockNews,
      isAuthenticated: false,
      query: '',
      category: 'Tous',
    };
  },
  computed: {
    categories() {
      return ['Tous', ...new Set(this.mockNews.map((news) => news.category))];
    },
    filteredNews() {
      const normalizedQuery = this.query.trim().toLowerCase();
      return this.mockNews.filter((news) => {
        const matchesCategory = this.category === 'Tous' || news.category === this.category;
        const matchesQuery =
          news.title.toLowerCase().includes(normalizedQuery) ||
          news.summary.toLowerCase().includes(normalizedQuery) ||
          news.source.toLowerCase().includes(normalizedQuery);

        return matchesCategory && matchesQuery;
      });
    },
  },
  mounted() {
    this.isAuthenticated = this.hasValidToken();
  },
  methods: {
    hasValidToken() {
      const token = localStorage.getItem('token');
      if (!token) return false;

      try {
        const payload = JSON.parse(atob(token));
        const now = Math.floor(Date.now() / 1000);
        return Boolean(payload.exp && payload.exp > now);
      } catch (error) {
        localStorage.removeItem('token');
        return false;
      }
    },
  },
};
</script>
