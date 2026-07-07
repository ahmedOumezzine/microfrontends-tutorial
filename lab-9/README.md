# Lab 9 - Deploiement

Ce lab presente une plateforme de reservation de services construite avec Angular, Vercel, Webpack 5 et Module Federation.

Il contient deux projets separes :

- `booking-platform-debutant`
- `booking-platform-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-9/
|-- README.md
|-- booking-platform-debutant/
|   |-- README.md
|   |-- package.json
|   |-- booking-app/
|   |-- offer-list-app/
|   `-- offer-detail-app/
`-- booking-platform-advanced/
    |-- README.md
    |-- package.json
    |-- booking-app/
    |-- offer-list-app/
    `-- offer-detail-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `booking-app` : application principale qui charge les offres et le formulaire de reservation.
- `offer-list-app` : remote qui expose les offres de service.
- `offer-detail-app` : remote qui gere le detail et la confirmation de reservation.

Le Host charge les deux remotes avec Module Federation. La version debutant garde une approche simple pour comprendre le concept. La version advanced ajoute une experience plus riche, plus proche d'un vrai mini-projet.

## Difference Entre Les Deux Projets

| Sujet | `booking-platform-debutant` | `booking-platform-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | configuration Vercel simple pour chaque application | offre cloud supplementaire, reset apres reservation, fichiers Vercel en npm et ports dedies |
| Interface | Bootstrap simple, lisible et directe | Bootstrap plus moderne avec donnees et interactions enrichies |
| Architecture | Host + 2 remotes | Host + 2 remotes avec configuration separee |
| Ports | `9000`, `9001`, `9002` | `9090`, `9091`, `9092` |

## Quand Utiliser Chaque Version

Utilisez `booking-platform-debutant` pour :

- apprendre le theme du lab sans complexite inutile ;
- comprendre le role du Host et des Remotes ;
- expliquer Module Federation avec une base simple ;
- faire une demonstration rapide.

Utilisez `booking-platform-advanced` pour :

- montrer une version plus complete ;
- presenter un design Bootstrap plus propre ;
- comparer les choix debutant et advanced ;
- travailler avec des ports separes sans conflit avec la version debutant.


## Parcours Conseille

1. Lancez d abord `booking-platform-debutant` pour comprendre le flux principal.
2. Identifiez le Host `booking-app` et les deux remotes `offer-list-app`, `offer-detail-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `booking-platform-advanced` et comparez les ports, le design et les interactions.
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
cd lab-9/booking-platform-debutant
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
cd lab-9/booking-platform-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9090
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

- [README debutant](./booking-platform-debutant/README.md)
- [README advanced](./booking-platform-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
