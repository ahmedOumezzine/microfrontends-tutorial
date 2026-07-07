# Micro Blog Advanced

Version avancee du Lab 1. Elle reprend la meme architecture que `micro-blog-debutant`, mais ajoute une interface plus moderne, plus d'interactions et une configuration Module Federation plus robuste.

## Objectif

Cette version montre comment faire evoluer un exemple simple vers une interface plus realiste sans changer le principe de base :

- le Host orchestre l'application ;
- la liste des articles reste dans une remote ;
- le detail de l'article reste dans une autre remote ;
- React est partage correctement entre les applications.

## Architecture

```text
micro-blog-advanced/
|-- package.json
|-- host-app/
|-- articles-list-app/
`-- article-details-app/
```

| Application | Port | Role |
| --- | --- | --- |
| `host-app` | `9010` | Charge les remotes, garde la selection et affiche le layout principal. |
| `articles-list-app` | `9011` | Expose une liste enrichie avec recherche et filtres. |
| `article-details-app` | `9012` | Expose un panneau de detail enrichi. |

## Fonctionnalites Ajoutees

Par rapport a la version debutant, cette version ajoute :

- une navbar ;
- une section d'introduction type hero ;
- des indicateurs sur l'architecture ;
- trois articles enrichis ;
- une recherche par titre, resume ou auteur ;
- des filtres par categorie ;
- un etat actif sur l'article selectionne ;
- un detail article plus complet ;
- des tags ;
- des meta donnees ;
- une checklist pedagogique ;
- un design Bootstrap plus moderne et responsive.

## Difference Technique Importante

Cette version utilise des hooks React dans la remote `articles-list-app` :

```js
useState
useMemo
```

Avec Module Federation, si chaque application charge sa propre copie de React, les hooks peuvent provoquer l'erreur :

```text
Invalid hook call
```

Pour eviter cela, `react` et `react-dom` sont partages en singleton dans les fichiers `webpack.config.js` :

```js
shared: {
  react: {
    singleton: true,
    requiredVersion: deps.react,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: deps["react-dom"],
  },
}
```

## Bootstrap Asynchrone

Quand React est partage avec Module Federation, il ne faut pas le consommer trop tot dans `index.js`.

Cette version utilise donc :

```js
// src/index.js
import("./bootstrap");
```

Puis le rendu React est fait dans :

```text
src/bootstrap.js
```

Cela evite l'erreur :

```text
Shared module is not available for eager consumption
```


## Guide De Lecture

Commencez par le Host `host-app`, car c est lui qui compose l interface finale. Lisez ensuite `articles-list-app` et `article-details-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Introduction aux micro-frontends ;
- competence travaillee : decouper une interface en Host et Remotes ;
- concepts importants : Module Federation, remoteEntry.js, dependances partagees ;
- ports : `9010`, `9011`, `9012`.

## Installation

Depuis le dossier `lab-1` :

```bash
cd micro-blog-advanced
npm install
npm run install:all
```

`npm install` installe les dependances du dossier courant, notamment `concurrently`.

`npm run install:all` installe les dependances des trois applications :

- `host-app`
- `articles-list-app`
- `article-details-app`

## Execution

```bash
npm run start:all
```

Cette commande lance les trois applications en meme temps.

| Application | URL |
| --- | --- |
| Host App | http://localhost:9010 |
| Articles List App | http://localhost:9011 |
| Article Details App | http://localhost:9012 |

Ouvrez le Host :

```text
http://localhost:9010
```


## Contrat Entre Les Applications

| Element | Responsabilite |
| --- | --- |
| Host `host-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `articles-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `article-details-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

Cette commande genere le build de production des trois applications.

## Scripts Disponibles

| Script | Description |
| --- | --- |
| `npm run install:all` | Installe les dependances des trois apps. |
| `npm run start:all` | Lance les trois apps. |
| `npm run build:all` | Build les trois apps. |
| `npm run start:host` | Lance seulement `host-app`. |
| `npm run start:articles` | Lance seulement `articles-list-app`. |
| `npm run start:details` | Lance seulement `article-details-app`. |

## Fichiers Importants

| Fichier | Description |
| --- | --- |
| `host-app/src/App.js` | Layout principal, selection d'article et chargement des remotes. |
| `host-app/src/index.js` | Entree asynchrone avec `import("./bootstrap")`. |
| `host-app/src/bootstrap.js` | Rendu React du Host. |
| `articles-list-app/src/ArticlesList.js` | Recherche, filtres et selection visuelle. |
| `article-details-app/src/ArticleDetails.js` | Panneau de detail enrichi. |
| `*/webpack.config.js` | Module Federation avec `shared` pour React. |

## Validation

Apres lancement :

- ouvrez `http://localhost:9010` ;
- verifiez que la page moderne s'affiche ;
- cliquez sur plusieurs articles ;
- testez la recherche ;
- testez les filtres par categorie ;
- verifiez que le detail change ;
- verifiez que la console navigateur ne contient pas d'erreur.

## Depannage

### `Invalid hook call`

Redemarrez les trois applications et faites un hard refresh.

Verifiez aussi que `react` et `react-dom` sont bien dans `shared` avec `singleton: true`.

### `Shared module is not available for eager consumption`

Verifiez que `src/index.js` contient uniquement :

```js
import("./bootstrap");
```

Le rendu React doit rester dans `src/bootstrap.js`.

### Remote Non Chargee

Verifiez que les trois ports sont actifs :

- `9010`
- `9011`
- `9012`

Si vous avez lance la version debutant en meme temps, ce n'est pas un probleme : elle utilise les ports `9000`, `9001`, `9002`.

## Pourquoi Cette Version Est Plus Avancee

Cette version ne change pas seulement le design. Elle montre aussi des points importants pour de vrais projets micro-frontends :

- partager React pour eviter plusieurs instances ;
- separer le bootstrap React pour laisser Module Federation initialiser les dependances ;
- enrichir une remote sans changer le contrat principal ;
- garder le Host responsable de l'orchestration ;
- garder chaque remote autonome et testable seule.



## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9010`.
- Les deux remotes repondent sur `http://localhost:9011` et `http://localhost:9012`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
