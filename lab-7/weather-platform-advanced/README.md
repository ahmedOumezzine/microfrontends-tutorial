# Lab 7 - Communication inter-modules (Advanced)

Ce projet est la version **Advanced** du Lab 7. Il implemente une application meteo avec React, Webpack 5, Module Federation et Bootstrap.

## Objectif

- Comprendre le theme : Communication inter-modules.
- Manipuler une architecture Host + Remotes avec Module Federation.
- Travailler dans un projet autonome, sans dependance avec l'autre version du lab.
- Point fort de cette version : historique des consultations, donnees meteo detaillees, ville Vancouver ajoutee, libelles advanced et ports dedies.

## Applications

| Application | Role | Port |
| --- | --- | --- |
| `weather-app` | application principale qui orchestre les evenements meteo | 9070 |
| `forecast-list-app` | remote qui expose la liste des villes | 9071 |
| `weather-detail-app` | remote qui affiche les details de la ville selectionnee | 9072 |


## Guide De Lecture

Commencez par le Host `weather-app`, car c est lui qui compose l interface finale. Lisez ensuite `forecast-list-app` et `weather-detail-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Communication inter-modules ;
- competence travaillee : faire communiquer des remotes sans dependance directe ;
- concepts importants : CustomEvent, orchestration par le Host, historique ;
- ports : `9070`, `9071`, `9072`.

## Installation

```bash
cd lab-7/weather-platform-advanced
npm install
npm run install:all
```

## Lancement

```bash
npm run start:all
```

Ouvrir :

```text
http://localhost:9070
```


## Contrat Entre Les Applications

| Element | Responsabilite |
| --- | --- |
| Host `weather-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `forecast-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `weather-detail-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

## Structure

```text
weather-platform-advanced/
|-- README.md
|-- package.json
|-- weather-app/
|-- forecast-list-app/
`-- weather-detail-app/
```

## Ce Que Cette Version Montre

- Le Host charge les remotes via `remoteEntry.js`.
- Chaque application garde son propre `package.json`.
- Les remotes peuvent etre lancees, construites et modifiees separement.
- Les ports utilises sont : `9070`, `9071`, `9072`.
- Sujet de l'article du lab : Communication dans les Micro-Frontends.

## Difference Avec L'Autre Version

- Version debutant : plus simple, ideale pour comprendre le concept rapidement.
- Version advanced : plus riche, meilleure presentation Bootstrap, donnees plus completes et ports dedies.

## Commandes Utiles

```bash
npm run install:all
npm run start:all
npm run build:all
```


## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9070`.
- Les deux remotes repondent sur `http://localhost:9071` et `http://localhost:9072`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
