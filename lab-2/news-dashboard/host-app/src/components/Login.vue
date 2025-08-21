<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Connexion</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label">Nom d'utilisateur</label>
                <input v-model="username" type="text" class="form-control" id="username" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input v-model="password" type="password" class="form-control" id="password" required>
              </div>
              <button type="submit" class="btn btn-primary">Se connecter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'user' && this.password === 'pass') {
        const token = 'yourtoken ici';
        console.log('Generated token:', token);
        localStorage.setItem('jwt', token);
        this.router.push('/dashboard').catch(err => {
          console.error('Router push error:', err);
        });
      } else {
        alert('Nom d’utilisateur ou mot de passe incorrect');
      }
    }
  }
};
</script>