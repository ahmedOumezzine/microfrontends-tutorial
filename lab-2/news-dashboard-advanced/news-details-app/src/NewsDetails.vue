<template>
  <section class="bg-white border rounded-3 shadow-sm overflow-hidden">
    <div class="p-4 p-lg-5 bg-dark text-white">
      <div class="d-flex flex-wrap justify-content-between gap-3 mb-4">
        <span class="badge text-bg-info">Remote : 9022</span>
        <span class="text-white-50 small">Validation locale du token</span>
      </div>

      <template v-if="isAuthenticated">
        <p class="text-uppercase text-info fw-semibold small mb-2">{{ details.category }}</p>
        <h2 class="display-6 fw-bold mb-3">{{ details.title }}</h2>
        <p class="lead text-white-50 mb-0">{{ details.content }}</p>
      </template>

      <template v-else>
        <p class="text-uppercase text-info fw-semibold small mb-2">Acces bloque</p>
        <h2 class="display-6 fw-bold mb-3">Connexion requise</h2>
        <p class="lead text-white-50 mb-0">
          Cette remote refuse d'afficher le detail si le token est absent ou expire.
        </p>
      </template>
    </div>

    <div v-if="isAuthenticated" class="p-4 p-lg-5">
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="border rounded-3 p-3 h-100">
            <div class="text-secondary small">Source</div>
            <div class="fw-semibold">{{ details.source }}</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border rounded-3 p-3 h-100">
            <div class="text-secondary small">Sensibilite</div>
            <div class="fw-semibold">{{ details.sensitivity }}</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border rounded-3 p-3 h-100">
            <div class="text-secondary small">Lecture</div>
            <div class="fw-semibold">{{ details.readTime }}</div>
          </div>
        </div>
      </div>

      <h3 class="h5 fw-bold mb-3">Controles de securite</h3>
      <ul class="list-group mb-4">
        <li v-for="item in details.checks" :key="item" class="list-group-item d-flex align-items-center gap-2">
          <span class="badge text-bg-success rounded-pill">OK</span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <div class="alert alert-primary mb-0">
        Le Host protege la route, mais cette remote verifie aussi le token avant
        d'afficher ses propres donnees.
      </div>
    </div>
  </section>
</template>

<script>
const mockDetails = {
  1: {
    title: 'Securite dans les Micro-Frontends',
    content:
      'La securite ne doit pas dependre uniquement du Host. Chaque remote doit savoir gerer un acces refuse et valider les informations dont elle a besoin.',
    category: 'Securite',
    source: 'Architecture Daily',
    sensitivity: 'Interne',
    readTime: '5 min',
    checks: ['Route protegee par le Host', 'Token present dans localStorage', 'Expiration verifiee par la remote'],
  },
  2: {
    title: 'Token local et defense en profondeur',
    content:
      'Le token simule permet de visualiser le flux. Dans une vraie application, il serait emis par un fournisseur d identite et verifie cote API.',
    category: 'Auth',
    source: 'Frontend Lab',
    sensitivity: 'Pratique',
    readTime: '4 min',
    checks: ['Payload decode', 'Role utilisateur lu', 'Session nettoyee si invalide'],
  },
  3: {
    title: 'Module Federation et contrats de confiance',
    content:
      'Module Federation charge du code distant au runtime. Les contrats entre Host et remotes doivent rester clairs et controles.',
    category: 'Federation',
    source: 'MF Weekly',
    sensitivity: 'Architecture',
    readTime: '6 min',
    checks: ['Remote exposee explicitement', 'Props limitees', 'Erreur d acces visible'],
  },
};

export default {
  props: {
    newsId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  computed: {
    details() {
      return mockDetails[this.newsId] || mockDetails[1];
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
