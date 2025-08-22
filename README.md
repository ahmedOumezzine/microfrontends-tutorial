
<img src="./images/intro.jpg" alt="Capture d’écran" style="max-width: 100%; height: auto;" />

# Tutoriel sur les Micro-Frontends

Bienvenue dans le **Tutoriel sur les Micro-Frontends**, un guide pratique pour apprendre à construire des applications front-end modulaires en utilisant **React**, **Vue.js**, **Angular**, **Webpack Module Federation**, et **Bootstrap**. Ce tutoriel est conçu pour les développeurs souhaitant comprendre comment diviser une application front-end en modules indépendants, développés et déployés séparément, tout en maintenant une expérience utilisateur cohérente.

Chaque Lab est un mini-projet autonome qui explore un aspect clé des micro-frontends à travers des exemples pratiques.

## Labs
- **Lab 1** ([Voir le code](./lab-1)) : 
Blog collaboratif (React) pour apprendre la navigation, avec un article intitulé "Navigation dans les Micro-Frontends". [Accéder directement au Lab 1](https://github.com/ahmedOumezzine/microfrontends-tutorial/tree/main/lab-1)
- **Lab 2** ([Voir le code](./lab-2)) : 
Tableau de bord d’actualités (Vue.js) pour apprendre la sécurité, avec un article intitulé "Sécurité dans les Micro-Frontends".  [Accéder directement au Lab 2](https://github.com/ahmedOumezzine/microfrontends-tutorial/tree/main/lab-2)
- **Lab 3** ([Voir le code](./lab-3)) : 
Boutique en ligne (Angular) pour apprendre la gestion d’état, avec un article intitulé "Gestion d’état dans les Micro-Frontends".
- **Lab 4** ([Voir le code](./lab-4)) :
 Gestion de tâches (React) pour apprendre l’optimisation des performances, avec un article intitulé "Optimisation des performances dans les Micro-Frontends".
- **Lab 5** ([Voir le code](./lab-5)) :
 Cours en ligne (Vue.js) pour apprendre l’internationalisation, avec un article intitulé "Internationalisation dans les Micro-Frontends".
- **Lab 6** ([Voir le code](./lab-6)) :
Réseau social (Angular) pour apprendre les tests, avec un article intitulé "Tests dans les Micro-Frontends".
- **Lab 7** ([Voir le code](./lab-7)) :
Application météo (React) pour apprendre la communication inter-modules, avec un article intitulé "Communication dans les Micro-Frontends".
- **Lab 8** ([Voir le code](./lab-8)) :
Galerie de photos (Vue.js) pour apprendre l’accessibilité, avec un article intitulé "Accessibilité dans les Micro-Frontends".
- **Lab 9** ([Voir le code](./lab-9)) :
Réservation de services (Angular) pour apprendre le déploiement, avec un article intitulé "Déploiement des Micro-Frontends".
- **Lab 10** ([Voir le code](./lab-10)) :
Tableau de bord analytique (React) pour apprendre le CI/CD, avec un article intitulé "CI/CD pour les Micro-Frontends".
### Labs

Chaque Lab est un **mini-projet autonome** avec un contexte unique, conçu pour enseigner un aspect spécifique des micro-frontends (navigation, sécurité, etc.). Les technologies sont réparties pour inclure **React**, **Vue.js**, et **Angular**.

#### Lab 1 : Blog collaboratif (Navigation avec React)
- **Objectif** : Apprendre à gérer la **navigation** dans une architecture micro-frontend.
- **Contexte** : Une plateforme de blog où les utilisateurs naviguent entre des articles.
- **Contenu** :
  - Trois micro-frontends en **React 18** : `host-app` (interface principale), `articles-list-app` (liste des articles), `article-details-app` (détails d’un article).
  - Utilisation de **Webpack Module Federation** pour charger les modules distants.
  - Intégration de `react-router-dom` pour la navigation entre la liste et les détails.
  - Style avec **Bootstrap 5.3** pour un menu de navigation responsive.
  - Article intitulé "Navigation dans les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Configuration de la navigation distribuée avec des routes partagées.
  - Synchronisation des URLs entre micro-frontends.
  - Gestion des transitions fluides entre modules.
- **Technologies** : React 18.2.0, Webpack 5.95.0, Bootstrap 5.3.3, react-router-dom 6.26.2, Yarn 1.22.22.

#### Lab 2 : Tableau de Bord d’Actualités (Sécurité avec Vue.js)

- **Objectif** : Implémenter des mécanismes de `sécurité (authentification)` dans les micro-frontends.
- **Contexte** : Un tableau de bord où les utilisateurs authentifiés consultent des actualités. Seuls les utilisateurs connectés peuvent voir la liste des actualités et leurs détails, avec un message "Accès non autorisé" affiché dans le navigateur en cas de non-authentification.
- **Contenu :**
* Trois micro-frontends en Vue.js 3 :
  -`host-app` (hôte) : Gère la navigation et l’authentification via un formulaire de connexion.
  -`news-list-app` (flux d’actualités) : Affiche une liste d’actualités uniquement si un token valide est présent.
  -`news-details-app` (détails des actualités) : Affiche les détails d’une actualité sélectionnée si le token est valide.


* Utilisation de Webpack Module Federation pour charger dynamiquement les modules.
* Intégration de vue-router pour protéger la route /dashboard et rediriger vers la page de connexion avec un message d’alerte en cas d’accès non autorisé.
* Génération d’un token JWT simulé (encodé en base64 avec un payload { user, exp }) dans `host-app`, avec décodage et vérification de l’expiration dans `news-list-app` et `news-details-app`.
* Formulaire de connexion stylisé avec Bootstrap 5.3. 


- **Ce qu’on apprend des micro-frontends :**
Gestion de l’authentification partagée : Un token JWT simulé est stocké dans localStorage et partagé entre les micro-frontends, avec validation de l’expiration.
Protection des routes : Utilisation de guards Vue Router pour restreindre l’accès à /dashboard et afficher une alerte claire lors d’une tentative d’accès non autorisé.
Communication sécurisée des tokens : Les micro-frontends décodent le token et vérifient sa validité avant d’afficher du contenu, masquant les actualités en cas d’échec.


- **Technologies** : Vue.js 3.4.0, Webpack 5.95.0, Bootstrap 5.3.3, vue-router 4.4.5, Yarn 1.22.22.


#### Lab 3 : Boutique en ligne (Gestion d’état avec Angular)
- **Objectif** : Apprendre à gérer l’**état partagé** entre micro-frontends.
- **Contexte** : Une plateforme e-commerce où les utilisateurs ajoutent des produits au panier.
- **Contenu** :
  - Trois micro-frontends en **Angular 19** : `shop-app` (hôte), `product-list-app` (liste des produits), `cart-app` (panier).
  - Utilisation de **Webpack Module Federation** pour charger les modules.
  - Intégration de **NgRx** pour gérer l’état du panier (produits ajoutés).
  - Affichage du panier avec une icône **Bootstrap 5.3**.
  - Article intitulé "Gestion d’état dans les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Partage d’un store d’état entre micro-frontends.
  - Synchronisation des mises à jour d’état en temps réel.
  - Modularisation des services Angular dans un contexte distribué.
- **Technologies** : Angular 19.2.9, Webpack 5.95.0, Bootstrap 5.3.3, @ngrx/store 19.0.0, Yarn 1.22.22.

#### Lab 4 : Gestion de tâches (Performance avec React)
- **Objectif** : Optimiser les **performances** des micro-frontends pour un chargement rapide.
- **Contexte** : Une application de productivité pour gérer des tâches.
- **Contenu** :
  - Trois micro-frontends en **React 18** : `task-manager-app` (hôte), `task-list-app` (liste des tâches), `task-detail-app` (détails d’une tâche).
  - Utilisation de **Webpack Module Federation** avec minification (`terser-webpack-plugin`) et mise en cache (`cacheGroups`).
  - Ajout d’un spinner **Bootstrap 5.3** pour indiquer le chargement.
  - Article intitulé "Optimisation des performances dans les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Réduction de la taille des bundles avec Webpack.
  - Mise en cache des modules partagés pour minimiser les requêtes.
  - Gestion des temps de chargement dans une architecture distribuée.
- **Technologies** : React 18.2.0, Webpack 5.95.0, Bootstrap 5.3.3, terser-webpack-plugin 5.3.10, Yarn 1.22.22.

#### Lab 5 : Cours en ligne (Internationalisation avec Vue.js)
- **Objectif** : Ajouter l’**internationalisation (i18n)** pour supporter plusieurs langues.
- **Contexte** : Une plateforme éducative où les utilisateurs consultent des cours.
- **Contenu** :
  - Trois micro-frontends en **Vue.js 3** : `learning-app` (hôte), `course-list-app` (liste des cours), `lesson-detail-app` (détails d’une leçon).
  - Utilisation de **Webpack Module Federation**.
  - Intégration de `vue-i18n` pour les traductions en français et anglais.
  - Sélecteur de langue avec un menu déroulant **Bootstrap 5.3**.
  - Article intitulé "Internationalisation dans les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Partage des ressources de traduction entre micro-frontends.
  - Gestion des changements de langue en temps réel.
  - Modularisation des fichiers de traduction.
- **Technologies** : Vue.js 3.4.0, Webpack 5.95.0, Bootstrap 5.3.3, vue-i18n 9.14.0, Yarn 1.22.22.

#### Lab 6 : Réseau social (Tests avec Angular)
- **Objectif** : Apprendre à écrire des **tests unitaires et d’intégration** pour les micro-frontends.
- **Contexte** : Une plateforme sociale où les utilisateurs partagent des publications.
- **Contenu** :
  - Trois micro-frontends en **Angular 19** : `social-app` (hôte), `post-list-app` (liste des publications), `profile-app` (profil utilisateur).
  - Utilisation de **Webpack Module Federation**.
  - Configuration de **Jest** pour tester les composants Angular.
  - Tests d’intégration pour vérifier le chargement des modules distants.
  - Article intitulé "Tests dans les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Configuration des tests dans une architecture distribuée.
  - Tests des interactions entre micro-frontends.
  - Validation des modules distants avec Jest.
- **Technologies** : Angular 19.2.9, Webpack 5.95.0, Bootstrap 5.3.3, Jest 29.7.0, @angular-builders/jest 19.0.0, Yarn 1.22.22.

#### Lab 7 : Application météo (Communication avec React)
- **Objectif** : Maîtriser la **communication inter-modules** dans les micro-frontends.
- **Contexte** : Une application météo où les utilisateurs consultent des prévisions.
- **Contenu** :
  - Trois micro-frontends en **React 18** : `weather-app` (hôte), `forecast-list-app` (prévisions), `weather-detail-app` (détails d’une ville).
  - Utilisation de **Webpack Module Federation**.
  - Implémentation d’un système d’événements personnalisés pour partager des données (par exemple, sélection d’une ville).
  - Affichage des prévisions avec des cartes **Bootstrap 5.3**.
  - Article intitulé "Communication dans les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Communication événementielle entre micro-frontends.
  - Partage de données sans dépendance directe.
  - Gestion des événements asynchrones.
- **Technologies** : React 18.2.0, Webpack 5.95.0, Bootstrap 5.3.3, Yarn 1.22.22.

#### Lab 8 : Galerie de photos (Accessibilité avec Vue.js)
- **Objectif** : Améliorer l’**accessibilité (a11y)** des micro-frontends pour les utilisateurs handicapés.
- **Contexte** : Une galerie où les utilisateurs parcourent des photos.
- **Contenu** :
  - Trois micro-frontends en **Vue.js 3** : `gallery-app` (hôte), `photo-list-app` (liste des photos), `photo-viewer-app` (visualisation).
  - Utilisation de **Webpack Module Federation**.
  - Ajout d’attributs ARIA et de navigation clavier avec **Bootstrap 5.3**.
  - Test d’accessibilité avec `axe-core`.
  - Article intitulé "Accessibilité dans les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Application des standards d’accessibilité dans une architecture distribuée.
  - Gestion des attributs ARIA entre modules.
  - Tests d’accessibilité automatisés.
- **Technologies** : Vue.js 3.4.0, Webpack 5.95.0, Bootstrap 5.3.3, axe-core 4.10.0, Yarn 1.22.22.

#### Lab 9 : Réservation de services (Déploiement avec Angular)
- **Objectif** : Apprendre à **déployer** des micro-frontends sur une plateforme moderne.
- **Contexte** : Une plateforme où les utilisateurs réservent des services.
- **Contenu** :
  - Trois micro-frontends en **Angular 19** : `booking-app` (hôte), `offer-list-app` (liste des offres), `offer-detail-app` (détails).
  - Utilisation de **Webpack Module Federation**.
  - Déploiement sur **Vercel** avec configuration des URLs distantes.
  - Formulaire de réservation avec **Bootstrap 5.3**.
  - Article intitulé "Déploiement des Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Configuration des déploiements indépendants pour chaque module.
  - Gestion des URLs dynamiques en production.
  - Tests post-déploiement pour vérifier l’intégration.
- **Technologies** : Angular 19.2.9, Webpack 5.95.0, Bootstrap 5.3.3, Vercel CLI 34.4.0, Yarn 1.22.22.

#### Lab 10 : Tableau de bord analytique (CI/CD avec React)
- **Objectif** : Configurer un pipeline **CI/CD** pour automatiser les builds et déploiements.
- **Contexte** : Un tableau de bord pour visualiser des données analytiques.
- **Contenu** :
  - Trois micro-frontends en **React 18** : `analytics-app` (hôte), `chart-list-app` (graphiques), `report-detail-app` (rapports).
  - Utilisation de **Webpack Module Federation**.
  - Configuration d’un workflow **GitHub Actions** pour les tests et le déploiement.
  - Affichage des graphiques avec `Chart.js` et **Bootstrap 5.3**.
  - Article intitulé "CI/CD pour les Micro-Frontends".
- **Ce qu’on apprend des micro-frontends** :
  - Automatisation des builds pour chaque micro-frontend.
  - Gestion des déploiements indépendants via CI/CD.
  - Intégration des tests dans un pipeline distribué.
- **Technologies** : React 18.2.0, Webpack 5.95.0, Bootstrap 5.3.3, Chart.js 4.4.4, GitHub Actions, Yarn 1.22.22.

## Commencer
Chaque Lab est un projet autonome.

## Structure du dépôt
```
microfrontends-tutorial/
├── lab-1/                    # Mini-projet pour Lab 1 (Blog collaboratif, React)
│   ├── micro-blog/
│   │   ├── host-app/         # Application hôte
│   │   ├── articles-list-app/ # Application distante (liste)
│   │   ├── article-details-app/ # Application distante (détails)
│   ├── README.md             # Documentation spécifique au Lab 1
├── lab-2/                    # Mini-projet pour Lab 2 (Actualités, Vue.js)
├── lab-3/                    # Mini-projet pour Lab 3 (E-Commerce, Angular)
├── lab-4/                    # Mini-projet pour Lab 4 (Tâches, React)
├── lab-5/                    # Mini-projet pour Lab 5 (Cours, Vue.js)
├── lab-6/                    # Mini-projet pour Lab 6 (Réseau social, Angular)
├── lab-7/                    # Mini-projet pour Lab 7 (Météo, React)
├── lab-8/                    # Mini-projet pour Lab 8 (Galerie, Vue.js)
├── lab-9/                    # Mini-projet pour Lab 9 (Réservation, Angular)
├── lab-10/                   # Mini-projet pour Lab 10 (Analyse, React)
├── .gitignore                # Fichiers à ignorer par Git
├── README.md                 # Ce fichier (vue d’ensemble du tutoriel)
├── LICENSE                   # Licence MIT
└── package.json              # Scripts et configuration du dépôt
```

## Déploiement
Chaque Lab peut être déployé sur une plateforme comme **Vercel**. Consultez le `README.md` de chaque Lab pour des instructions détaillées sur le déploiement, y compris la configuration des URLs des remotes pour Webpack Module Federation.

## Contribuer
Si vous souhaitez contribuer à ce tutoriel (par exemple, ajouter un Lab, corriger des erreurs, ou améliorer la documentation), veuillez :
1. Forker le dépôt.
2. Créer une branche pour vos modifications (`git checkout -b feature/nouveau-lab`).
3. Soumettre une pull request avec une description claire de vos changements.

## Dépannage
- **Problèmes de démarrage** : Assurez-vous que tous les ports (9000, 9001, 9002) sont libres et que `yarn start:all` exécute les trois applications.
- **Erreurs CORS** : Vérifiez les URLs des remotes dans `host-app/webpack.config.js` et assurez-vous que les applications distantes sont en cours d’exécution.
- **Erreurs de build** : Confirmez que les versions des dépendances (par exemple, `react@18.2.0`, `vue@3.4.0`, `@angular/core@19.2.9`) sont cohérentes dans tous les `package.json`.

## Ressources
- [Documentation officielle de Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [React Documentation](https://react.dev/)
- [Vue.js Documentation](https://vuejs.org/)
- [Angular Documentation](https://angular.dev/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Article : [Micro-Frontends by Martin Fowler](https://martinfowler.com/articles/micro-frontends.html)

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

## Contact
Pour toute question ou suggestion, ouvrez une issue sur le dépôt GitHub ou contactez l’auteur via GitHub.

Bon apprentissage des micro-frontends !