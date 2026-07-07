# Lab 2 - Securite dans les Micro-Frontends

Ce lab montre comment securiser une architecture micro-frontend avec Vue.js, Webpack 5 et Module Federation.

Il contient deux projets separes :

- `news-dashboard-debutant`
- `news-dashboard-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, son propre `package-lock.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-2/
|-- README.md
|-- images/
|-- news-dashboard-debutant/
|   |-- README.md
|   |-- package.json
|   |-- host-app/
|   |-- news-list-app/
|   `-- news-details-app/
`-- news-dashboard-advanced/
    |-- README.md
    |-- package.json
    |-- host-app/
    |-- news-list-app/
    `-- news-details-app/
```

## Idee Principale

Les deux projets montrent la meme architecture securisee :

- `host-app` : application principale qui gere le login, la session et la navigation.
- `news-list-app` : remote qui expose la liste des actualites.
- `news-details-app` : remote qui expose le detail de l'actualite selectionnee.

Le Host protege l'acces au dashboard. Les remotes relisent ensuite le token stocke dans `localStorage` et refusent d'afficher leurs donnees si la session est absente, invalide ou expiree.

Cette logique illustre une defense en profondeur simple :

- le Host protege la navigation ;
- les Remotes protegent leur propre contenu ;
- le token represente une session utilisateur simulee.

## Difference Entre Les Deux Projets

| Sujet | `news-dashboard-debutant` | `news-dashboard-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | Comprendre la securite minimale | Montrer une experience securisee plus proche d'une vraie app |
| UI | Formulaire et cards simples | Design Bootstrap moderne, hero, navbar, badges, cards |
| Login | `user` / `pass`, token simple | `user` / `pass`, token enrichi avec role et scopes |
| Route guard | Verifie seulement la presence du token | Verifie aussi l'expiration du token |
| Remotes | Verifient le token avant affichage | Verifient le token et affichent des etats securises plus clairs |
| Liste | 2 actualites simples | Recherche, filtres et selection visuelle |
| Detail | Titre et contenu | Meta donnees, sensibilite, source, controles de securite |
| Module Federation | Configuration minimale | `vue` partage en singleton |
| Bootstrap Vue | Rendu direct dans `main.js` | Rendu via `import('./bootstrap')` |
| CSP | Regles simples pour les ports debutant | Regles adaptees aux ports advanced et aux remotes |
| Ports | `9000`, `9001`, `9002` | `9020`, `9021`, `9022` |

## Quand Utiliser Chaque Version

Utilisez `news-dashboard-debutant` pour :

- expliquer le principe d'une route protegee ;
- montrer une authentification simulee simple ;
- comprendre comment le Host partage une session avec les Remotes ;
- commencer avec une configuration Module Federation minimale.

Utilisez `news-dashboard-advanced` pour :

- montrer une interface plus professionnelle ;
- introduire un token enrichi avec role, scopes et expiration ;
- expliquer la verification locale dans chaque Remote ;
- presenter une CSP adaptee aux micro-frontends ;
- corriger les erreurs classiques comme `Shared module is not available for eager consumption`.


## Parcours Conseille

1. Lancez d abord `news-dashboard-debutant` pour comprendre le flux principal.
2. Identifiez le Host `host-app` et les deux remotes `news-list-app`, `news-details-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `news-dashboard-advanced` et comparez les ports, le design et les interactions.
5. Terminez avec `npm run build:all` dans chaque version.

## Ce Qu Il Faut Retenir

- Le Host compose l experience finale, mais chaque remote reste autonome.
- Le contrat entre applications passe par les imports Module Federation, les props ou les evenements.
- La version debutant explique le minimum viable.
- La version advanced montre comment enrichir sans casser le contrat principal.
- Les ports advanced sont differents pour pouvoir comparer les deux versions sans conflit.

## Execution Rapide

### Version Debutant

```bash
cd lab-2/news-dashboard-debutant
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9000
```

### Version Advanced

```bash
cd lab-2/news-dashboard-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9020
```


## Checklist Rapide

- Installer le projet choisi avec `npm install`.
- Installer les apps internes avec `npm run install:all`.
- Demarrer les trois apps avec `npm run start:all`.
- Ouvrir le Host et tester l interaction principale.
- Verifier la console navigateur.
- Lancer `npm run build:all`.

## Documentation Detaillee

Chaque projet a son propre README :

- [README debutant](./news-dashboard-debutant/README.md)
- [README advanced](./news-dashboard-advanced/README.md)

Commencez par le README de la version que vous voulez executer.

