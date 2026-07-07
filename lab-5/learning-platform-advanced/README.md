# Learning Platform Advanced

Version avancee du Lab 5. Elle garde le meme objectif i18n que la version debutant, mais ajoute une experience plus proche d'une vraie plateforme de formation.

## Objectif

Cette version montre comment enrichir l'internationalisation dans une architecture micro-frontend Vue :

- Host responsable de la langue active ;
- remotes autonomes avec leurs propres messages ;
- trois langues synchronisees ;
- contenu de cours enrichi ;
- interface Bootstrap moderne.

## Architecture

| Application | Port | Role |
| --- | --- | --- |
| `learning-app` | `9050` | Host, hero, selecteur de langue et orchestration. |
| `course-list-app` | `9051` | Remote catalogue de cours multilingue. |
| `lesson-detail-app` | `9052` | Remote detail avec resultat attendu et checklist. |

## Fonctionnalites Advanced

- design Bootstrap moderne avec hero sombre ;
- langues : francais, anglais, espagnol ;
- quatre cours enrichis ;
- badges de duree et informations de niveau ;
- detail de lecon avec resultat attendu ;
- checklist traduite ;
- indicateur du contrat `locale` ;
- ports separes pour lancer debutant et advanced sans conflit.


## Guide De Lecture

Commencez par le Host `learning-app`, car c est lui qui compose l interface finale. Lisez ensuite `course-list-app` et `lesson-detail-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Internationalisation ;
- competence travaillee : propager une langue globale ;
- concepts importants : vue-i18n, props, preference globale ;
- ports : `9050`, `9051`, `9052`.

## Installation

```bash
cd lab-5/learning-platform-advanced
npm install
npm run install:all
```

## Execution

```bash
npm run start:all
```

Ouvrir :

```text
http://localhost:9050
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

1. Ouvrir `http://localhost:9050`.
2. Changer entre Francais, English et Espanol.
3. Selectionner plusieurs cours.
4. Verifier que la liste et le detail restent synchronises.
5. Verifier que les checklists changent de langue.
6. Lancer `npm run build:all`.

## Internationalisation Montree

Le Host ne possede pas tous les textes. Il controle seulement `locale`. Les remotes restent responsables de leurs messages locaux, ce qui permet a chaque equipe de faire evoluer ses traductions sans modifier toute la plateforme.

## Difference Avec Debutant

La version advanced ajoute :

- plus de langues ;
- plus de contenu ;
- une UI plus professionnelle ;
- un contrat Host/Remote plus visible ;
- des ports separes ;
- une meilleure demo de l'autonomie des remotes.


## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9050`.
- Les deux remotes repondent sur `http://localhost:9051` et `http://localhost:9052`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
