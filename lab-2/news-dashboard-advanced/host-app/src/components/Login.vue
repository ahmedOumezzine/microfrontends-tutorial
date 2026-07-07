<template>
  <main class="min-vh-100 bg-body-tertiary d-flex align-items-center py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <section class="col-lg-7">
          <p class="text-uppercase text-primary fw-semibold small mb-2">Lab 2 - Securite micro-frontends</p>
          <h1 class="display-5 fw-bold mb-3">Tableau de bord d'actualites protege.</h1>
          <p class="lead text-secondary mb-4">
            Le Host gere la connexion, stocke un token simule, puis les remotes
            verifient elles aussi ce token avant d'afficher leurs donnees.
          </p>

          <div class="row g-3">
            <div class="col-sm-4">
              <div class="bg-white border rounded-3 p-3 h-100">
                <div class="fs-3 fw-bold text-primary">1</div>
                <div class="small text-secondary">Host securise</div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="bg-white border rounded-3 p-3 h-100">
                <div class="fs-3 fw-bold text-success">2</div>
                <div class="small text-secondary">Remotes protegees</div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="bg-white border rounded-3 p-3 h-100">
                <div class="fs-3 fw-bold text-info">60</div>
                <div class="small text-secondary">minutes de session</div>
              </div>
            </div>
          </div>
        </section>

        <section class="col-lg-5">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-lg-5">
              <div class="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <p class="text-uppercase text-primary fw-semibold small mb-1">Host : 9020</p>
                  <h2 class="h4 fw-bold mb-0">Connexion</h2>
                </div>
                <span class="badge text-bg-light border">Token local</span>
              </div>

              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="username" class="form-label fw-semibold">Nom d'utilisateur</label>
                  <input
                    id="username"
                    v-model="username"
                    type="text"
                    class="form-control form-control-lg"
                    autocomplete="username"
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label fw-semibold">Mot de passe</label>
                  <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="form-control form-control-lg"
                    autocomplete="current-password"
                    required
                  >
                </div>

                <div v-if="error" class="alert alert-danger py-2">
                  {{ error }}
                </div>

                <button type="submit" class="btn btn-primary btn-lg w-100">
                  Se connecter
                </button>
              </form>

              <div class="alert alert-light border mt-4 mb-0">
                <div class="fw-semibold mb-1">Identifiants de demo</div>
                <div class="small text-secondary">Utilisateur : <code>user</code> / Mot de passe : <code>pass</code></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      username: 'user',
      password: 'pass',
      error: '',
    };
  },
  methods: {
    login() {
      if (this.username === 'user' && this.password === 'pass') {
        const payload = {
          user: this.username,
          role: 'analyst',
          scope: ['news:read', 'news:details'],
          exp: Math.floor(Date.now() / 1000) + 3600,
        };
        localStorage.setItem('token', btoa(JSON.stringify(payload)));
        this.router.push('/dashboard');
        return;
      }

      this.error = 'Nom d utilisateur ou mot de passe incorrect.';
    },
  },
};
</script>
