# Lab 7 - Communication inter-modules

Ce lab presente une application meteo construite avec React, Webpack 5, Module Federation et Bootstrap.

Il contient deux projets separes :

- `weather-platform-debutant`
- `weather-platform-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-7/
|-- README.md
|-- weather-platform-debutant/
|   |-- README.md
|   |-- package.json
|   |-- weather-app/
|   |-- forecast-list-app/
|   `-- weather-detail-app/
`-- weather-platform-advanced/
    |-- README.md
    |-- package.json
    |-- weather-app/
    |-- forecast-list-app/
    `-- weather-detail-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `weather-app` : application principale qui orchestre les evenements meteo.
- `forecast-list-app` : remote qui expose la liste des villes.
- `weather-detail-app` : remote qui affiche les details de la ville selectionnee.

Le Host charge les deux remotes avec Module Federation. La version debutant garde une approche simple pour comprendre le concept. La version advanced ajoute une experience plus riche, plus proche d'un vrai mini-projet.

## Difference Entre Les Deux Projets

| Sujet | `weather-platform-debutant` | `weather-platform-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | evenement navigateur simple entre une liste et un detail | historique des consultations, donnees meteo detaillees, ville Vancouver ajoutee, libelles advanced et ports dedies |
| Interface | Bootstrap simple, lisible et directe | Bootstrap plus moderne avec donnees et interactions enrichies |
| Architecture | Host + 2 remotes | Host + 2 remotes avec configuration separee |
| Ports | `9000`, `9001`, `9002` | `9070`, `9071`, `9072` |

## Quand Utiliser Chaque Version

Utilisez `weather-platform-debutant` pour :

- apprendre le theme du lab sans complexite inutile ;
- comprendre le role du Host et des Remotes ;
- expliquer Module Federation avec une base simple ;
- faire une demonstration rapide.

Utilisez `weather-platform-advanced` pour :

- montrer une version plus complete ;
- presenter un design Bootstrap plus propre ;
- comparer les choix debutant et advanced ;
- travailler avec des ports separes sans conflit avec la version debutant.


## Parcours Conseille

1. Lancez d abord `weather-platform-debutant` pour comprendre le flux principal.
2. Identifiez le Host `weather-app` et les deux remotes `forecast-list-app`, `weather-detail-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `weather-platform-advanced` et comparez les ports, le design et les interactions.
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
cd lab-7/weather-platform-debutant
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
cd lab-7/weather-platform-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9070
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

- [README debutant](./weather-platform-debutant/README.md)
- [README advanced](./weather-platform-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
