# Mini-projet pour Lab 2 (Tableau de Bord d’Actualités, Vue.js)

## Lab 2 : Authentification et Intégration de Micro-Frontends
### Aperçu
Bienvenue dans **le deuxième Lab du tutoriel** sur les micro-frontends ! Ce Lab explore l’implémentation d’une application de tableau de bord d’actualités utilisant Vue.js, Webpack Module Federation, et Bootstrap. Il introduit l’authentification utilisateur avec un token stocké dans `localStorage` et l’intégration de micro-frontends pour afficher une liste d’actualités et leurs détails.

L’application inclut une page de connexion et un tableau de bord qui affiche dynamiquement des modules distants. Ce Lab met l’accent sur l’utilisation de Vue.js avec Module Federation pour une architecture modulaire.

### Objectifs d’apprentissage
En complétant ce Lab, vous allez :
- Comprendre comment configurer une authentification simple avec Vue.js et `localStorage`.
- Apprendre à utiliser Webpack Module Federation pour intégrer des micro-frontends dans une application Vue.js.
- Intégrer des composants distants (liste d’actualités et détails) dans une application hôte.
- Mettre en place un projet de micro-frontends avec Vue Router pour la navigation.

### Structure de la page
<img src="./images/structure-page.jpg" alt="Capture d’écran" style="max-width: 100%; height: auto;" />

Dans ce Lab, nous construisons une application avec trois micro-frontends :
- **host-app** : L’application principale avec une page de connexion et un tableau de bord, intégrant les composants distants.
- **news-list-app** : Un module distant affichant une liste d’actualités.
- **news-details-app** : Un module distant affichant les détails d’une actualité sélectionnée.

### Structure du projet
Le mini-projet de ce Lab est organisé comme suit :
lab-2/
├── news-dashboard/
│   ├── host-app/                   # Application hôte (port 9000)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Login.vue      # Page de connexion avec authentification
│   │   │   │   ├── Dashboard.vue  # Tableau de bord intégrant les micro-frontends
│   │   │   ├── router/
│   │   │   │   └── index.js       # Configuration de Vue Router
│   │   │   ├── App.vue            # Composant Vue racine
│   │   │   ├── main.js            # Point d’entrée Webpack
│   │   ├── public/
│   │   │   └── index.html         # Modèle HTML
│   │   ├── package.json           # Dépendances et scripts
│   │   └── webpack.config.js      # Configuration Webpack avec Module Federation
│   ├── news-list-app/             # Application distante pour la liste des actualités (port 9001)
│   │   ├── src/
│   │   │   ├── NewsList.vue       # Composant affichant la liste des actualités
│   │   │   ├── bootstrap.js       # Point d’entrée pour le chargement asynchrone
│   │   │   ├── index.js           # Point d’entrée Webpack
│   │   │   └── index.html         # Modèle HTML
│   │   ├── package.json
│   │   └── webpack.config.js
│   ├── news-details-app/          # Application distante pour les détails des actualités (port 9002)
│   │   ├── src/
│   │   │   ├── NewsDetails.vue    # Composant affichant les détails d’une actualité
│   │   │   ├── bootstrap.js
│   │   │   ├── index.js
│   │   │   └── index.html
│   │   ├── package.json
│   │   └── webpack.config.js
├── README.md                      # Ce fichier
text- **host-app** : S’exécute sur http://localhost:9000, gère la connexion et intègre les composants distants.
- **news-list-app** : S’exécute sur http://localhost:9001, expose le composant `NewsList`.
- **news-details-app** : S’exécute sur http://localhost:9002, expose le composant `NewsDetails`.

### Prérequis
- Node.js : Version 16 ou supérieure.
- Yarn : Version 1.22.22 ou supérieure (préféré à npm).
- Un navigateur web moderne (par exemple, Chrome, Firefox).

### Installation
Pour configurer et exécuter le mini-projet du Lab 2, suivez ces étapes :

1. **Naviguez vers le répertoire du Lab 2** :
cd microfrontends-tutorial/lab-2
text2. **Installez les dépendances** :
yarn install
yarn install:all
text- `yarn install` installe `concurrently` dans `lab-2`.
- `yarn install:all` installe les dépendances dans `host-app`, `news-list-app`, et `news-details-app`.

3. **Démarrez les serveurs de développement** :
yarn start:all
textCette commande utilise `concurrently` pour exécuter les trois applications simultanément :
- **host-app** sur http://localhost:9000
- **news-list-app** sur http://localhost:9001
- **news-details-app** sur http://localhost:9002

4. **Ouvrez l’application** :
- Accédez à http://localhost:9000 dans votre navigateur.
- Connectez-vous avec le nom d’utilisateur `user` et le mot de passe `pass`.
- Après connexion, vous serez redirigé vers le tableau de bord affichant la liste des actualités à gauche et les détails à droite lorsqu’une actualité est sélectionnée.

### Résultat
<img src="./images/dashboard-screenshot.jpg" alt="Capture d’écran du tableau de bord" style="max-width: 100%; height: auto;" />

### Fichiers clés et concepts
Voici les fichiers clés de ce Lab et les concepts qu’ils illustrent :

#### Login.vue (host-app/src/components/Login.vue) :
- Gère l’authentification avec un nom d’utilisateur et un mot de passe.
- Stocke un token dans `localStorage` et redirige vers `/dashboard` avec Vue Router.
- Utilise Bootstrap pour un style cohérent.

#### Dashboard.vue (host-app/src/components/Dashboard.vue) :
- Intègre les composants distants `NewsList` et `NewsDetails` via Module Federation.
- Affiche la liste des actualités et les détails dans une mise en page à deux colonnes.

#### router/index.js (host-app/src/router/index.js) :
- Configure Vue Router pour gérer les routes `/` (connexion) et `/dashboard`.
- Illustre la navigation dans une application Vue.js.

#### webpack.config.js (dans chaque application) :
- Configure Webpack Module Federation pour activer les micro-frontends.
- **host-app** définit les remotes pour charger les modules depuis `news-list-app` et `news-details-app`.
- **news-list-app** et **news-details-app** exposent leurs composants via `exposes`.
- Les dépendances partagées (`vue`) sont configurées comme singletons pour éviter les duplications.

### Concepts clés démontrés
- **Micro-Frontends** : Division d’une application front-end en modules indépendants pour une meilleure modularité.
- **Webpack Module Federation** : Chargement dynamique de modules distants et partage de dépendances.
- **Vue Router** : Gestion de la navigation entre la page de connexion et le tableau de bord.
- **Authentification** : Utilisation de `localStorage` pour stocker un token d’authentification.
- **Intégration de Bootstrap** : Application d’un style cohérent avec Bootstrap 5.3.3.