# Lab 9 - Deploiement (Debutant)

Ce projet est la version **Debutant** du Lab 9. Il implemente une plateforme de reservation de services avec Angular, Vercel, Webpack 5 et Module Federation.

## Objectif

- Comprendre le theme : Deploiement.
- Manipuler une architecture Host + Remotes avec Module Federation.
- Travailler dans un projet autonome, sans dependance avec l'autre version du lab.
- Point fort de cette version : configuration Vercel simple pour chaque application.

## Applications

| Application | Role | Port |
| --- | --- | --- |
| `booking-app` | application principale qui charge les offres et le formulaire de reservation | 9000 |
| `offer-list-app` | remote qui expose les offres de service | 9001 |
| `offer-detail-app` | remote qui gere le detail et la confirmation de reservation | 9002 |


## Guide De Lecture

Commencez par le Host `booking-app`, car c est lui qui compose l interface finale. Lisez ensuite `offer-list-app` et `offer-detail-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Deploiement ;
- competence travaillee : preparer des remotes deployables separement ;
- concepts importants : Vercel, remoteEntry.js de production, URLs par environnement ;
- ports : `9000`, `9001`, `9002`.

## Installation

```bash
cd lab-9/booking-platform-debutant
npm install
npm run install:all
```

## Lancement

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
| Host `booking-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `offer-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `offer-detail-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

## Structure

```text
booking-platform-debutant/
|-- README.md
|-- package.json
|-- booking-app/
|-- offer-list-app/
`-- offer-detail-app/
```

## Ce Que Cette Version Montre

- Le Host charge les remotes via `remoteEntry.js`.
- Chaque application garde son propre `package.json`.
- Les remotes peuvent etre lancees, construites et modifiees separement.
- Les ports utilises sont : `9000`, `9001`, `9002`.
- Sujet de l'article du lab : Deploiement des Micro-Frontends.

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
