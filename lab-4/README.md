# Lab 4 - Optimisation des Performances dans les Micro-Frontends

Ce lab presente une application de gestion de taches construite avec React, Webpack 5, Module Federation et Bootstrap.

Il contient deux projets separes :

- `task-manager-debutant`
- `task-manager-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, son propre `package-lock.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-4/
|-- README.md
|-- images/
|-- task-manager-debutant/
|   |-- README.md
|   |-- package.json
|   |-- task-manager-app/
|   |-- task-list-app/
|   `-- task-detail-app/
`-- task-manager-advanced/
    |-- README.md
    |-- package.json
    |-- task-manager-app/
    |-- task-list-app/
    `-- task-detail-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `task-manager-app` : application hote qui orchestre l'interface.
- `task-list-app` : remote qui expose la liste des taches.
- `task-detail-app` : remote qui expose le detail de la tache selectionnee.

Le Host charge les remotes avec `React.lazy` et `Suspense`. Les composants utilisent `memo`, `useMemo` et `useCallback` pour reduire les rendus inutiles.

## Difference Entre Les Deux Projets

| Sujet | `task-manager-debutant` | `task-manager-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | Comprendre les optimisations React de base | Montrer une interface performance plus proche d'une vraie app |
| Interface | Navbar, alerte, liste et detail simples | Hero, statistiques, filtres, cards et checklist |
| Taches | 3 taches simples | 5 taches enrichies |
| Interactions | Selection d'une tache | Selection + filtres par domaine |
| Detail | Description et metrique | Impact, metrique et checklist |
| Performance React | `React.lazy`, `Suspense`, `memo` | Ajoute props stables, filtres memoises et placeholders |
| Webpack | Minification + split chunks | Meme base avec ports separes |
| Ports | `9000`, `9001`, `9002` | `9040`, `9041`, `9042` |

## Quand Utiliser Chaque Version

Utilisez `task-manager-debutant` pour :

- expliquer le lazy loading des remotes ;
- montrer `Suspense` et ses fallbacks ;
- introduire `React.memo`, `useMemo` et `useCallback` ;
- comprendre la configuration Webpack d'optimisation.

Utilisez `task-manager-advanced` pour :

- montrer une interface plus professionnelle ;
- ajouter des filtres et des metriques visibles ;
- expliquer les props stables entre Host et Remote ;
- presenter une version plus proche d'un dashboard de suivi performance.


## Parcours Conseille

1. Lancez d abord `task-manager-debutant` pour comprendre le flux principal.
2. Identifiez le Host `task-manager-app` et les deux remotes `task-list-app`, `task-detail-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `task-manager-advanced` et comparez les ports, le design et les interactions.
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
cd lab-4/task-manager-debutant
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
cd lab-4/task-manager-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9040
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

- [README debutant](./task-manager-debutant/README.md)
- [README advanced](./task-manager-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
