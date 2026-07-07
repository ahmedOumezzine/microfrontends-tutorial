# Task Manager Debutant

Version debutant du Lab 4. Elle montre les optimisations de performance React dans une architecture micro-frontend simple.

## Objectif

Cette version sert a comprendre les bases :

- chargement des remotes avec `React.lazy` ;
- fallback de chargement avec `Suspense` ;
- selection d'une tache dans une remote ;
- affichage du detail dans une autre remote ;
- memoisation avec `memo`, `useMemo` et `useCallback` ;
- optimisation Webpack avec minification et split chunks.

## Architecture

| Application | Port | Role |
| --- | --- | --- |
| `task-manager-app` | `9000` | Host, layout principal et orchestration. |
| `task-list-app` | `9001` | Remote qui expose la liste de taches. |
| `task-detail-app` | `9002` | Remote qui expose le detail d'une tache. |

## Fonctionnalites

- trois taches de performance ;
- selection visuelle de la tache active ;
- detail calcule avec `useMemo` ;
- liste memoisee avec `React.memo` ;
- callback de selection stabilise avec `useCallback` ;
- bundles minifies avec `terser-webpack-plugin`.


## Guide De Lecture

Commencez par le Host `task-manager-app`, car c est lui qui compose l interface finale. Lisez ensuite `task-list-app` et `task-detail-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Performance ;
- competence travaillee : charger les remotes efficacement ;
- concepts importants : React.lazy, Suspense, memoisation, split chunks ;
- ports : `9000`, `9001`, `9002`.

## Installation

```bash
cd lab-4/task-manager-debutant
npm install
npm run install:all
```

## Execution

```bash
npm run start:all
```

Ouvrir :

```text
http://localhost:9000
```


## Contrat Entre Les Applications

| Element | Responsabilite |
| --- | --- |
| Host `task-manager-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `task-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `task-detail-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

## Validation

1. Ouvrir `http://localhost:9000`.
2. Selectionner plusieurs taches.
3. Verifier que le detail change.
4. Recharger la page.
5. Observer les fallbacks `Suspense`.
6. Lancer `npm run build:all`.

## Difference Avec Advanced

Cette version reste volontairement simple. La version advanced ajoute une UI plus moderne, des filtres, plus de taches, des statistiques et des ports separes.


## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9000`.
- Les deux remotes repondent sur `http://localhost:9001` et `http://localhost:9002`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
