# Task Manager Advanced

Version avancee du Lab 4. Elle garde le meme objectif performance que la version debutant, mais ajoute une interface plus riche et plus proche d'un vrai dashboard.

## Objectif

Cette version montre comment enrichir une architecture micro-frontend React optimisee :

- lazy loading des remotes ;
- placeholders pendant le chargement ;
- filtres transmis du Host vers la remote liste ;
- callbacks stabilises ;
- composants memoises ;
- detail enrichi avec impact et checklist.

## Architecture

| Application | Port | Role |
| --- | --- | --- |
| `task-manager-app` | `9040` | Host, hero, statistiques, filtres et orchestration. |
| `task-list-app` | `9041` | Remote liste avec filtres par domaine. |
| `task-detail-app` | `9042` | Remote detail avec impact et checklist. |

## Fonctionnalites Advanced

- design Bootstrap moderne ;
- hero sombre avec metriques performance ;
- cinq taches enrichies ;
- filtres par domaine : audit, build, mesure, rendu ;
- selection visuelle de la tache active ;
- detail avec metrique, impact et checklist ;
- fallbacks `Suspense` sous forme de placeholders ;
- ports separes pour lancer debutant et advanced sans conflit.


## Guide De Lecture

Commencez par le Host `task-manager-app`, car c est lui qui compose l interface finale. Lisez ensuite `task-list-app` et `task-detail-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Performance ;
- competence travaillee : charger les remotes efficacement ;
- concepts importants : React.lazy, Suspense, memoisation, split chunks ;
- ports : `9040`, `9041`, `9042`.

## Installation

```bash
cd lab-4/task-manager-advanced
npm install
npm run install:all
```

## Execution

```bash
npm run start:all
```

Ouvrir :

```text
http://localhost:9040
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

1. Ouvrir `http://localhost:9040`.
2. Filtrer les taches par domaine.
3. Selectionner plusieurs taches.
4. Verifier que le detail change.
5. Recharger la page et observer les placeholders.
6. Lancer `npm run build:all`.

## Performance Montree

- `React.lazy` charge les remotes seulement quand le Host les rend.
- `Suspense` evite un ecran vide pendant l'import distant.
- `useCallback` garde les callbacks stables.
- `memo` limite les rerendus des remotes.
- Webpack minifie et separe les chunks communs.

## Difference Avec Debutant

La version advanced ajoute :

- plus d'informations visibles ;
- une experience utilisateur plus soignee ;
- une remote liste filtrable ;
- un detail plus riche ;
- des ports separes ;
- un meilleur support pour une demo professionnelle.


## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9040`.
- Les deux remotes repondent sur `http://localhost:9041` et `http://localhost:9042`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
