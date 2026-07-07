# Lab 6 - Tests (Advanced)

Ce projet est la version **Advanced** du Lab 6. Il implemente un reseau social avec Angular, Jest, Webpack 5 et Module Federation.

## Objectif

- Comprendre le theme : Tests.
- Manipuler une architecture Host + Remotes avec Module Federation.
- Travailler dans un projet autonome, sans dependance avec l'autre version du lab.
- Point fort de cette version : historique complet des publications consultees, donnees enrichies, UI Bootstrap plus lisible, ports dedies pour eviter les conflits avec la version debutant.

## Applications

| Application | Role | Port |
| --- | --- | --- |
| `social-app` | application principale qui charge les remotes et suit les publications consultees | 9060 |
| `post-list-app` | remote qui expose la liste des publications | 9061 |
| `profile-app` | remote qui expose le profil de l auteur selectionne | 9062 |


## Guide De Lecture

Commencez par le Host `social-app`, car c est lui qui compose l interface finale. Lisez ensuite `post-list-app` et `profile-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Tests ;
- competence travaillee : tester chaque remote separement ;
- concepts importants : Jest, tests unitaires, contrats de composants ;
- ports : `9060`, `9061`, `9062`.

## Installation

```bash
cd lab-6/social-network-advanced
npm install
npm run install:all
```

## Lancement

```bash
npm run start:all
```

Ouvrir :

```text
http://localhost:9060
```


## Contrat Entre Les Applications

| Element | Responsabilite |
| --- | --- |
| Host `social-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `post-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `profile-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

## Structure

```text
social-network-advanced/
|-- README.md
|-- package.json
|-- social-app/
|-- post-list-app/
`-- profile-app/
```

## Ce Que Cette Version Montre

- Le Host charge les remotes via `remoteEntry.js`.
- Chaque application garde son propre `package.json`.
- Les remotes peuvent etre lancees, construites et modifiees separement.
- Les ports utilises sont : `9060`, `9061`, `9062`.
- Sujet de l'article du lab : Tests dans les Micro-Frontends.

## Difference Avec L'Autre Version

- Version debutant : plus simple, ideale pour comprendre le concept rapidement.
- Version advanced : plus riche, meilleure presentation Bootstrap, donnees plus completes et ports dedies.

## Commandes Utiles

```bash
npm run install:all
npm run start:all
npm run build:all
npm run test:all
```


## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9060`.
- Les deux remotes repondent sur `http://localhost:9061` et `http://localhost:9062`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.
- `npm run test:all` passe pour verifier la partie test.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
