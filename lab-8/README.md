# Lab 8 - Accessibilite

Ce lab presente une galerie de photos construite avec Vue.js, axe-core, Webpack 5 et Module Federation.

Il contient deux projets separes :

- `photo-gallery-debutant`
- `photo-gallery-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-8/
|-- README.md
|-- photo-gallery-debutant/
|   |-- README.md
|   |-- package.json
|   |-- gallery-app/
|   |-- photo-list-app/
|   `-- photo-viewer-app/
`-- photo-gallery-advanced/
    |-- README.md
    |-- package.json
    |-- gallery-app/
    |-- photo-list-app/
    `-- photo-viewer-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `gallery-app` : application principale qui charge les remotes et lance les audits axe.
- `photo-list-app` : remote qui expose une liste accessible de photos.
- `photo-viewer-app` : remote qui affiche la photo selectionnee avec libelles ARIA.

Le Host charge les deux remotes avec Module Federation. La version debutant garde une approche simple pour comprendre le concept. La version advanced ajoute une experience plus riche, plus proche d'un vrai mini-projet.

## Difference Entre Les Deux Projets

| Sujet | `photo-gallery-debutant` | `photo-gallery-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | roles ARIA et navigation clavier de base | audit axe depuis le host, historique des selections, photo supplementaire sur le contraste, roles ARIA et ports dedies |
| Interface | Bootstrap simple, lisible et directe | Bootstrap plus moderne avec donnees et interactions enrichies |
| Architecture | Host + 2 remotes | Host + 2 remotes avec configuration separee |
| Ports | `9000`, `9001`, `9002` | `9080`, `9081`, `9082` |

## Quand Utiliser Chaque Version

Utilisez `photo-gallery-debutant` pour :

- apprendre le theme du lab sans complexite inutile ;
- comprendre le role du Host et des Remotes ;
- expliquer Module Federation avec une base simple ;
- faire une demonstration rapide.

Utilisez `photo-gallery-advanced` pour :

- montrer une version plus complete ;
- presenter un design Bootstrap plus propre ;
- comparer les choix debutant et advanced ;
- travailler avec des ports separes sans conflit avec la version debutant.


## Parcours Conseille

1. Lancez d abord `photo-gallery-debutant` pour comprendre le flux principal.
2. Identifiez le Host `gallery-app` et les deux remotes `photo-list-app`, `photo-viewer-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `photo-gallery-advanced` et comparez les ports, le design et les interactions.
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
cd lab-8/photo-gallery-debutant
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
cd lab-8/photo-gallery-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9080
```

## Validation

```bash
npm run build:all
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

- [README debutant](./photo-gallery-debutant/README.md)
- [README advanced](./photo-gallery-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
