# Learning Platform Debutant

Version debutant du Lab 5. Elle montre comment synchroniser une langue entre un Host Vue.js et deux remotes.

## Objectif

Cette version sert a comprendre les bases de l'internationalisation distribuee :

- le Host garde la langue active ;
- le Host transmet `locale` aux remotes ;
- chaque remote garde ses propres messages ;
- `course-list-app` traduit la liste des cours ;
- `lesson-detail-app` traduit le detail de la lecon.

## Architecture

| Application | Port | Role |
| --- | --- | --- |
| `learning-app` | `9000` | Host, selecteur de langue et orchestration. |
| `course-list-app` | `9001` | Remote qui expose la liste des cours. |
| `lesson-detail-app` | `9002` | Remote qui expose le detail d'une lecon. |

## Fonctionnalites

- selecteur Francais / English ;
- trois cours traduits ;
- detail traduit selon la selection ;
- messages locaux avec `vue-i18n` ;
- chargement des remotes avec `defineAsyncComponent`.


## Guide De Lecture

Commencez par le Host `learning-app`, car c est lui qui compose l interface finale. Lisez ensuite `course-list-app` et `lesson-detail-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Internationalisation ;
- competence travaillee : propager une langue globale ;
- concepts importants : vue-i18n, props, preference globale ;
- ports : `9000`, `9001`, `9002`.

## Installation

```bash
cd lab-5/learning-platform-debutant
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
| Host `learning-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `course-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `lesson-detail-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

## Validation

1. Ouvrir `http://localhost:9000`.
2. Changer la langue.
3. Selectionner plusieurs cours.
4. Verifier que la liste et le detail changent ensemble.
5. Recharger la page et verifier que les remotes se chargent.

## Difference Avec Advanced

Cette version reste volontairement simple. La version advanced ajoute une troisieme langue, un design plus moderne, plus de contenu et des indicateurs visibles sur le contrat Host/Remote.


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
