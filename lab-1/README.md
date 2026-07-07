# Lab 1 - Introduction aux Micro-Frontends

Ce lab presente une application de blog construite avec React, Webpack 5 et Module Federation.

Il contient deux projets separes :

- `micro-blog-debutant`
- `micro-blog-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, son propre `package-lock.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-1/
|-- README.md
|-- images/
|-- micro-blog-debutant/
|   |-- README.md
|   |-- package.json
|   |-- host-app/
|   |-- articles-list-app/
|   `-- article-details-app/
`-- micro-blog-advanced/
    |-- README.md
    |-- package.json
    |-- host-app/
    |-- articles-list-app/
    `-- article-details-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `host-app` : application principale qui orchestre l'interface.
- `articles-list-app` : remote qui expose la liste des articles.
- `article-details-app` : remote qui expose le detail de l'article selectionne.

Le Host charge les deux remotes avec Module Federation. Quand l'utilisateur selectionne un article, le Host garde l'identifiant selectionne et l'envoie au composant de detail.

## Difference Entre Les Deux Projets

| Sujet | `micro-blog-debutant` | `micro-blog-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | Comprendre les bases de Module Federation | Montrer une version plus proche d'une vraie application |
| Interface | Simple, cartes Bootstrap basiques | Design moderne, navbar, hero, badges, cards, alertes |
| Articles | 2 articles simples | 3 articles enrichis |
| Interactions | Clic sur un article | Recherche, filtres, selection visuelle |
| Detail article | Titre, contenu, date | Hero detail, tags, meta donnees, checklist |
| React partage | Non configure en singleton | `react` et `react-dom` partages en singleton |
| Bootstrap React | Rendu direct dans `index.js` | Rendu via `import("./bootstrap")` |
| Ports | `9000`, `9001`, `9002` | `9010`, `9011`, `9012` |

## Quand Utiliser Chaque Version

Utilisez `micro-blog-debutant` pour :

- expliquer les concepts de base ;
- montrer une configuration minimale ;
- comprendre le role du Host et des Remotes ;
- commencer sans complexite UI.

Utilisez `micro-blog-advanced` pour :

- montrer une interface plus riche ;
- introduire la recherche et les filtres ;
- expliquer le partage de React avec `shared`;
- corriger les erreurs classiques comme `Invalid hook call` et `Shared module is not available for eager consumption`.


## Parcours Conseille

1. Lancez d abord `micro-blog-debutant` pour comprendre le flux principal.
2. Identifiez le Host `host-app` et les deux remotes `articles-list-app`, `article-details-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `micro-blog-advanced` et comparez les ports, le design et les interactions.
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
cd lab-1/micro-blog-debutant
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
cd lab-1/micro-blog-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9010
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

- [README debutant](./micro-blog-debutant/README.md)
- [README advanced](./micro-blog-advanced/README.md)

Commencez par le README de la version que vous voulez executer.

