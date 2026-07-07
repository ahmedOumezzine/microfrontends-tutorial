# Lab 6 - Tests

Ce lab presente un reseau social construite avec Angular, Jest, Webpack 5 et Module Federation.

Il contient deux projets separes :

- `social-network-debutant`
- `social-network-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-6/
|-- README.md
|-- social-network-debutant/
|   |-- README.md
|   |-- package.json
|   |-- social-app/
|   |-- post-list-app/
|   `-- profile-app/
`-- social-network-advanced/
    |-- README.md
    |-- package.json
    |-- social-app/
    |-- post-list-app/
    `-- profile-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `social-app` : application principale qui charge les remotes et suit les publications consultees.
- `post-list-app` : remote qui expose la liste des publications.
- `profile-app` : remote qui expose le profil de l auteur selectionne.

Le Host charge les deux remotes avec Module Federation. La version debutant garde une approche simple pour comprendre le concept. La version advanced ajoute une experience plus riche, plus proche d'un vrai mini-projet.

## Difference Entre Les Deux Projets

| Sujet | `social-network-debutant` | `social-network-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | configuration simple pour comprendre les tests unitaires et les contrats | historique complet des publications consultees, donnees enrichies, UI Bootstrap plus lisible, ports dedies pour eviter les conflits avec la version debutant |
| Interface | Bootstrap simple, lisible et directe | Bootstrap plus moderne avec donnees et interactions enrichies |
| Architecture | Host + 2 remotes | Host + 2 remotes avec configuration separee |
| Ports | `9000`, `9001`, `9002` | `9060`, `9061`, `9062` |

## Quand Utiliser Chaque Version

Utilisez `social-network-debutant` pour :

- apprendre le theme du lab sans complexite inutile ;
- comprendre le role du Host et des Remotes ;
- expliquer Module Federation avec une base simple ;
- faire une demonstration rapide.

Utilisez `social-network-advanced` pour :

- montrer une version plus complete ;
- presenter un design Bootstrap plus propre ;
- comparer les choix debutant et advanced ;
- travailler avec des ports separes sans conflit avec la version debutant.


## Parcours Conseille

1. Lancez d abord `social-network-debutant` pour comprendre le flux principal.
2. Identifiez le Host `social-app` et les deux remotes `post-list-app`, `profile-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `social-network-advanced` et comparez les ports, le design et les interactions.
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
cd lab-6/social-network-debutant
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
cd lab-6/social-network-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9060
```

## Validation

```bash
npm run build:all
npm run test:all
```


## Checklist Rapide

- Installer le projet choisi avec `npm install`.
- Installer les apps internes avec `npm run install:all`.
- Demarrer les trois apps avec `npm run start:all`.
- Ouvrir le Host et tester l interaction principale.
- Verifier la console navigateur.
- Lancer `npm run build:all` et `npm run test:all`.

## Documentation Detaillee

Chaque projet a son propre README :

- [README debutant](./social-network-debutant/README.md)
- [README advanced](./social-network-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
