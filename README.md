<img src="./images/intro.jpg" alt="Tutoriel Micro-Frontends" style="max-width: 100%; height: auto;" />

# Tutoriel sur les Micro-Frontends

Ce depot est un parcours pratique pour apprendre les micro-frontends avec **React**, **Vue.js**, **Angular**, **Webpack Module Federation**, **Bootstrap**, des tests, du deploiement et de la CI/CD.

Chaque lab contient deux projets independants : une version **debutant** pour comprendre le concept sans bruit, puis une version **advanced** pour voir la meme idee dans une interface plus complete et plus proche d un mini-projet reel.

## Comment Utiliser Ce Guide

1. Lisez le README racine pour choisir le lab.
2. Ouvrez le README du lab, par exemple `lab-4/README.md`, pour comprendre le sujet et les differences.
3. Lancez d abord la version `*-debutant`.
4. Lancez ensuite la version `*-advanced` pour comparer le design, les ports, les donnees et la configuration.
5. Terminez par `npm run build:all` pour verifier que les trois applications compilent.

## Parcours Des Labs

| Lab | Theme | Stack | Mini-projet | Ce que le lab apprend | Notions cles |
| --- | --- | --- | --- | --- | --- |
| [Lab 1](./lab-1) | Introduction aux micro-frontends | React | Blog collaboratif | decouper une interface en Host et Remotes. | Module Federation, remoteEntry.js, dependances partagees. |
| [Lab 2](./lab-2) | Securite | Vue.js | Tableau de bord d actualites | proteger l acces aux remotes. | authentification simulee, token, acces refuse. |
| [Lab 3](./lab-3) | Gestion d etat | Angular | Boutique en ligne | synchroniser un panier entre modules. | NgRx, evenements navigateur, localStorage. |
| [Lab 4](./lab-4) | Performance | React | Gestion de taches | charger les remotes efficacement. | React.lazy, Suspense, memoisation, split chunks. |
| [Lab 5](./lab-5) | Internationalisation | Vue.js | Plateforme de cours | propager une langue globale. | vue-i18n, props, preference globale. |
| [Lab 6](./lab-6) | Tests | Angular | Reseau social | tester chaque remote separement. | Jest, tests unitaires, contrats de composants. |
| [Lab 7](./lab-7) | Communication inter-modules | React | Application meteo | faire communiquer des remotes sans dependance directe. | CustomEvent, orchestration par le Host, historique. |
| [Lab 8](./lab-8) | Accessibilite | Vue.js | Galerie de photos | rendre chaque remote accessible. | ARIA, navigation clavier, axe-core. |
| [Lab 9](./lab-9) | Deploiement | Angular | Reservation de services | preparer des remotes deployables separement. | Vercel, remoteEntry.js de production, URLs par environnement. |
| [Lab 10](./lab-10) | CI/CD | React | Tableau de bord analytique | automatiser la validation de chaque app. | GitHub Actions, matrice CI, build par remote. |

## Debutant Ou Advanced ?

| Version | Quand l utiliser | Ce que vous gagnez |
| --- | --- | --- |
| Debutant | Premiere lecture, demo en classe, comprehension du flux principal. | Architecture claire, moins de code, moins de decisions UI. |
| Advanced | Apres avoir compris le flux debutant, ou pour presenter une version plus professionnelle. | Design Bootstrap plus riche, ports dedies, interactions supplementaires, configuration plus robuste. |

Les deux versions sont separees : chacune possede son propre `package.json`, ses scripts, ses dependances et son README. Vous pouvez donc installer ou supprimer une version sans casser l autre.

## Prerequis

- Node.js 18 ou plus recommande.
- npm.
- Un navigateur moderne.
- Des ports locaux libres. Les versions debutant utilisent souvent `9000`, `9001`, `9002`; les versions advanced utilisent des ports dedies par lab.

## Structure Du Depot

```text
microfrontends-tutorial/
|-- README.md
|-- LICENSE
|-- images/
|-- .github/workflows/
|   `-- lab-10-ci.yml
|-- lab-1/
|   |-- micro-blog-debutant/
|   `-- micro-blog-advanced/
|-- lab-2/
|   |-- news-dashboard-debutant/
|   `-- news-dashboard-advanced/
|-- lab-3/
|   |-- online-shop-debutant/
|   `-- online-shop-advanced/
|-- lab-4/
|   |-- task-manager-debutant/
|   `-- task-manager-advanced/
|-- lab-5/
|   |-- learning-platform-debutant/
|   `-- learning-platform-advanced/
|-- lab-6/
|   |-- social-network-debutant/
|   `-- social-network-advanced/
|-- lab-7/
|   |-- weather-platform-debutant/
|   `-- weather-platform-advanced/
|-- lab-8/
|   |-- photo-gallery-debutant/
|   `-- photo-gallery-advanced/
|-- lab-9/
|   |-- booking-platform-debutant/
|   `-- booking-platform-advanced/
`-- lab-10/
    |-- analytics-dashboard-debutant/
    `-- analytics-dashboard-advanced/
```

## Commandes Standard

Depuis un dossier de projet, par exemple `lab-1/micro-blog-debutant` :

```bash
npm install
npm run install:all
npm run start:all
```

Puis ouvrez le Host indique dans le README du projet. Pour valider une version :

```bash
npm run build:all
```

Pour le Lab 6, qui contient des tests :

```bash
npm run test:all
```

## Ordre De Lecture Conseille

- **Labs 1 a 3** : comprendre l architecture, la securite et l etat partage.
- **Labs 4 a 5** : ameliorer l experience utilisateur avec performance et internationalisation.
- **Labs 6 a 8** : rendre le systeme plus fiable avec tests, communication et accessibilite.
- **Labs 9 a 10** : preparer la production avec deploiement et CI/CD.

## Labs En Detail

### Lab 1 - Introduction aux Micro-Frontends

Blog collaboratif en React. Ce lab sert a decouper une interface en Host et Remotes.

- **Debutant** : configuration minimale pour comprendre la composition.
- **Advanced** : recherche, filtres, detail enrichi et partage React robuste.
- **A observer** : le Host `host-app`, les remotes `articles-list-app` et `article-details-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 2 - Securite

Tableau de bord d actualites en Vue.js. Ce lab sert a proteger l acces aux remotes.

- **Debutant** : login simple et protection basique.
- **Advanced** : experience plus complete, etat utilisateur et controle CSP/ports separes.
- **A observer** : le Host `host-app`, les remotes `news-list-app` et `news-details-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 3 - Gestion d Etat

Boutique en ligne en Angular. Ce lab sert a synchroniser un panier entre modules.

- **Debutant** : ajout panier minimal.
- **Advanced** : quantites, statistiques, filtres et persistance enrichie.
- **A observer** : le Host `shop-app`, les remotes `product-list-app` et `cart-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 4 - Performance

Gestion de taches en React. Ce lab sert a charger les remotes efficacement.

- **Debutant** : lazy loading simple.
- **Advanced** : interface plus riche, memoisation et suivi de performance.
- **A observer** : le Host `task-manager-app`, les remotes `task-list-app` et `task-detail-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 5 - Internationalisation

Plateforme de cours en Vue.js. Ce lab sert a propager une langue globale.

- **Debutant** : changement fr/en simple.
- **Advanced** : plusieurs langues, contenu enrichi et interface plus complete.
- **A observer** : le Host `learning-app`, les remotes `course-list-app` et `lesson-detail-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 6 - Tests

Reseau social en Angular. Ce lab sert a tester chaque remote separement.

- **Debutant** : tests unitaires et contrats simples.
- **Advanced** : historique, donnees enrichies et tests gardant le contrat stable.
- **A observer** : le Host `social-app`, les remotes `post-list-app` et `profile-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 7 - Communication inter-modules

Application meteo en React. Ce lab sert a faire communiquer des remotes sans dependance directe.

- **Debutant** : selection de ville simple.
- **Advanced** : historique meteo, ville supplementaire et details enrichis.
- **A observer** : le Host `weather-app`, les remotes `forecast-list-app` et `weather-detail-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 8 - Accessibilite

Galerie de photos en Vue.js. Ce lab sert a rendre chaque remote accessible.

- **Debutant** : roles et navigation de base.
- **Advanced** : audit axe, historique et contenu contraste.
- **A observer** : le Host `gallery-app`, les remotes `photo-list-app` et `photo-viewer-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 9 - Deploiement

Reservation de services en Angular. Ce lab sert a preparer des remotes deployables separement.

- **Debutant** : configuration Vercel simple.
- **Advanced** : reservation enrichie, reset apres confirmation et ports dedies.
- **A observer** : le Host `booking-app`, les remotes `offer-list-app` et `offer-detail-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

### Lab 10 - CI/CD

Tableau de bord analytique en React. Ce lab sert a automatiser la validation de chaque app.

- **Debutant** : workflow CI simple.
- **Advanced** : matrice debutant/advanced, rapport qualite et graphique enrichi.
- **A observer** : le Host `analytics-app`, les remotes `chart-list-app` et `report-detail-app`, et les URLs `remoteEntry.js`.
- **Resultat attendu** : lancer le Host, utiliser l interaction principale, puis construire les trois apps avec `npm run build:all`.

## Checklist De Validation

Avant de considerer un lab termine :

- les trois applications demarrent avec `npm run start:all` ;
- le Host charge les deux remotes sans erreur console ;
- l interaction principale fonctionne ;
- `npm run build:all` passe ;
- les ports dans `webpack.config.js` correspondent au README ;
- la version advanced ne reutilise pas les memes ports que la version debutant.

## Depannage

- **Une remote ne charge pas** : verifiez que son serveur est demarre et que l URL `remoteEntry.js` dans le `webpack.config.js` du Host pointe vers le bon port.
- **Un port est deja utilise** : arretez l ancien processus ou changez le port dans le script `start` de l application concernee.
- **Erreur React `Invalid hook call`** : assurez-vous que `react` et `react-dom` sont partages en singleton dans les apps React du meme lab.
- **Erreur `Shared module is not available for eager consumption`** : utilisez un bootstrap asynchrone avec `import("./bootstrap")`.
- **Donnees incoherentes** : videz `localStorage`, rechargez la page et relancez le parcours.
- **Apres nettoyage** : relancez `npm install` puis `npm run install:all`, car `node_modules` et `dist` sont volontairement recreables.

## Ressources

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [React](https://react.dev/)
- [Vue.js](https://vuejs.org/)
- [Angular](https://angular.dev/)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Micro Frontends - Martin Fowler](https://martinfowler.com/articles/micro-frontends.html)

## Licence

Ce projet est distribue sous licence MIT. Consultez [LICENSE](./LICENSE) pour plus de details.
