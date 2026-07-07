# Lab 5 - Internationalisation dans les Micro-Frontends

Ce lab presente une plateforme de cours construite avec Vue.js, Webpack 5, Module Federation, `vue-i18n` et Bootstrap.

Il contient deux projets separes :

- `learning-platform-debutant`
- `learning-platform-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, son propre `package-lock.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-5/
|-- README.md
|-- images/
|-- learning-platform-debutant/
|   |-- README.md
|   |-- package.json
|   |-- learning-app/
|   |-- course-list-app/
|   `-- lesson-detail-app/
`-- learning-platform-advanced/
    |-- README.md
    |-- package.json
    |-- learning-app/
    |-- course-list-app/
    `-- lesson-detail-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `learning-app` : application hote qui controle la langue et la selection.
- `course-list-app` : remote qui expose la liste des cours.
- `lesson-detail-app` : remote qui expose le detail de la lecon selectionnee.

Le Host garde la langue active et la transmet aux remotes avec une prop `locale`. Chaque remote garde ses propres messages `vue-i18n`, ce qui permet une experience synchronisee sans centraliser tous les textes.

## Difference Entre Les Deux Projets

| Sujet | `learning-platform-debutant` | `learning-platform-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | Comprendre la propagation d'une langue | Montrer une experience i18n plus proche d'une vraie plateforme |
| Interface | Navbar, selecteur, liste et detail simples | Hero, statistiques, cards, badges et checklist |
| Langues | Francais, anglais | Francais, anglais, espagnol |
| Cours | 3 cours simples | 4 cours enrichis |
| Detail | Nom, description, duree | Description, resultat attendu et checklist |
| Contrat Host/Remote | Prop `locale` | Prop `locale` + indicateurs visibles |
| Ports | `9000`, `9001`, `9002` | `9050`, `9051`, `9052` |

## Quand Utiliser Chaque Version

Utilisez `learning-platform-debutant` pour :

- expliquer la propagation d'une langue depuis le Host ;
- montrer `vue-i18n` dans chaque remote ;
- comprendre les props partagees entre Host et Remotes ;
- commencer avec une interface simple.

Utilisez `learning-platform-advanced` pour :

- montrer une interface multilingue plus professionnelle ;
- ajouter une troisieme langue ;
- expliquer l'autonomie des catalogues de traduction ;
- verifier que la langue reste coherente dans plusieurs remotes.


## Parcours Conseille

1. Lancez d abord `learning-platform-debutant` pour comprendre le flux principal.
2. Identifiez le Host `learning-app` et les deux remotes `course-list-app`, `lesson-detail-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `learning-platform-advanced` et comparez les ports, le design et les interactions.
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
cd lab-5/learning-platform-debutant
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
cd lab-5/learning-platform-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9050
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

- [README debutant](./learning-platform-debutant/README.md)
- [README advanced](./learning-platform-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
