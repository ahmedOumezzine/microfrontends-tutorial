# Lab 10 - CI/CD

Ce lab presente un tableau de bord analytique construite avec React, Chart.js, GitHub Actions, Webpack 5 et Module Federation.

Il contient deux projets separes :

- `analytics-dashboard-debutant`
- `analytics-dashboard-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-10/
|-- README.md
|-- analytics-dashboard-debutant/
|   |-- README.md
|   |-- package.json
|   |-- analytics-app/
|   |-- chart-list-app/
|   `-- report-detail-app/
`-- analytics-dashboard-advanced/
    |-- README.md
    |-- package.json
    |-- analytics-app/
    |-- chart-list-app/
    `-- report-detail-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `analytics-app` : application principale qui orchestre les graphiques et les rapports.
- `chart-list-app` : remote qui expose un graphique Chart.js et la selection de rapport.
- `report-detail-app` : remote qui affiche le rapport selectionne.

Le Host charge les deux remotes avec Module Federation. La version debutant garde une approche simple pour comprendre le concept. La version advanced ajoute une experience plus riche, plus proche d'un vrai mini-projet.

## Difference Entre Les Deux Projets

| Sujet | `analytics-dashboard-debutant` | `analytics-dashboard-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | workflow CI simple par application | workflow GitHub Actions mis a jour pour les deux versions, rapport qualite, graphique enrichi et ports dedies |
| Interface | Bootstrap simple, lisible et directe | Bootstrap plus moderne avec donnees et interactions enrichies |
| Architecture | Host + 2 remotes | Host + 2 remotes avec configuration separee |
| Ports | `9000`, `9001`, `9002` | `9100`, `9101`, `9102` |

## Quand Utiliser Chaque Version

Utilisez `analytics-dashboard-debutant` pour :

- apprendre le theme du lab sans complexite inutile ;
- comprendre le role du Host et des Remotes ;
- expliquer Module Federation avec une base simple ;
- faire une demonstration rapide.

Utilisez `analytics-dashboard-advanced` pour :

- montrer une version plus complete ;
- presenter un design Bootstrap plus propre ;
- comparer les choix debutant et advanced ;
- travailler avec des ports separes sans conflit avec la version debutant.


## Parcours Conseille

1. Lancez d abord `analytics-dashboard-debutant` pour comprendre le flux principal.
2. Identifiez le Host `analytics-app` et les deux remotes `chart-list-app`, `report-detail-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `analytics-dashboard-advanced` et comparez les ports, le design et les interactions.
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
cd lab-10/analytics-dashboard-debutant
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
cd lab-10/analytics-dashboard-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9100
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

- [README debutant](./analytics-dashboard-debutant/README.md)
- [README advanced](./analytics-dashboard-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
