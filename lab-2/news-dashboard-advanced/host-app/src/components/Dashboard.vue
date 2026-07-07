<template>
  <main class="bg-body-tertiary min-vh-100">
    <nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div class="container py-2">
        <span class="navbar-brand fw-bold text-primary">Secure News</span>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <span class="badge text-bg-light border">Host : 9020</span>
          <span class="badge text-bg-success">Session active</span>
          <button class="btn btn-outline-danger btn-sm" type="button" @click="logout">
            Deconnexion
          </button>
        </div>
      </div>
    </nav>

    <section class="container py-4 py-lg-5">
      <div class="row align-items-center g-4 mb-4">
        <div class="col-lg-8">
          <p class="text-uppercase text-primary fw-semibold small mb-2">Dashboard securise</p>
          <h1 class="display-6 fw-bold mb-3">Actualites chargees depuis deux remotes protegees.</h1>
          <p class="lead text-secondary mb-0">
            Le Host protege la route, puis chaque remote relit le token local avant
            d'afficher son contenu. C'est une defense en profondeur simple.
          </p>
        </div>
        <div class="col-lg-4">
          <div class="bg-dark text-white rounded-3 p-4">
            <div class="d-flex justify-content-between mb-2">
              <span class="text-white-50">Utilisateur</span>
              <span class="fw-semibold">{{ session.user }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-white-50">Role</span>
              <span class="fw-semibold">{{ session.role }}</span>
            </div>
            <div class="d-flex justify-content-between">
              <span class="text-white-50">Expire dans</span>
              <span class="fw-semibold">{{ minutesLeft }} min</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4 align-items-start">
        <div class="col-lg-4">
          <news-list :selected-id="selectedNews" @select-news="selectNews" />
        </div>
        <div class="col-lg-8">
          <news-details :news-id="selectedNews" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

const NewsList = defineAsyncComponent(() => import('newsListApp/NewsList'));
const NewsDetails = defineAsyncComponent(() => import('newsDetailsApp/NewsDetails'));

const router = useRouter();
const selectedNews = ref(1);

const readSession = () => {
  try {
    return JSON.parse(atob(localStorage.getItem('token') || ''));
  } catch (error) {
    return {};
  }
};

const session = ref(readSession());
const minutesLeft = computed(() => {
  if (!session.value.exp) return 0;
  return Math.max(0, Math.ceil((session.value.exp - Math.floor(Date.now() / 1000)) / 60));
});

const selectNews = (id) => {
  selectedNews.value = id;
};

const logout = () => {
  localStorage.removeItem('token');
  router.push('/');
};
</script>
