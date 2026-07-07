# News Dashboard Advanced

Version avancee du Lab 2. Elle garde le meme objectif securite que la version debutant, mais ajoute une interface plus moderne et une configuration Module Federation plus robuste.

## Objectif

Cette version montre comment enrichir une architecture micro-frontend securisee :

- route protegee par le Host ;
- token simule avec utilisateur, role, scopes et expiration ;
- remotes qui verifient le token localement ;
- interface Bootstrap moderne ;
- recherche et filtres dans la liste ;
- detail enrichi avec controles de securite.

## Architecture

| Application | Port | Role |
| --- | --- | --- |
| `host-app` | `9020` | Gere login, session, route protegee, layout et orchestration. |
| `news-list-app` | `9021` | Affiche un flux filtrable et refuse l'acces sans token. |
| `news-details-app` | `9022` | Affiche un detail enrichi et refuse l'acces sans token. |

## Fonctionnalites Advanced

- login moderne avec identifiants de demo ;
- token enrichi dans `localStorage` ;
- affichage de l'utilisateur, du role et du temps restant ;
- bouton de deconnexion ;
- recherche dans le flux d'actualites ;
- filtres par categorie ;
- selection visuelle de l'actualite active ;
- panneau detail avec source, sensibilite, temps de lecture et checklist ;
- `vue` partage en singleton avec Module Federation ;
- bootstrap asynchrone pour initialiser correctement les modules partages ;
- CSP adaptee aux ports `9020`, `9021` et `9022`.


## Guide De Lecture

Commencez par le Host `host-app`, car c est lui qui compose l interface finale. Lisez ensuite `news-list-app` et `news-details-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Securite ;
- competence travaillee : proteger l acces aux remotes ;
- concepts importants : authentification simulee, token, acces refuse ;
- ports : `9020`, `9021`, `9022`.

## Installation

```bash
cd lab-2/news-dashboard-advanced
npm install
npm run install:all
```

## Execution

```bash
npm run start:all
```

Ouvrir :

```text
http://localhost:9020
```

Identifiants :

```text
user / pass
```


## Contrat Entre Les Applications

| Element | Responsabilite |
| --- | --- |
| Host `host-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `news-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `news-details-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

## Validation

1. Ouvrir `http://localhost:9020`.
2. Se connecter avec `user` / `pass`.
3. Verifier que la session est visible dans le dashboard.
4. Tester la recherche.
5. Tester les filtres par categorie.
6. Cliquer sur plusieurs actualites.
7. Verifier que le detail change.
8. Cliquer sur deconnexion.
9. Verifier que le dashboard n'est plus accessible.

## Securite Montree

Le Host protege la route `/dashboard`, mais les remotes ne font pas confiance au Host aveuglement. Elles relisent le token et verifient son expiration avant d'afficher les donnees.

Cela montre une defense en profondeur :

- controle de navigation dans le Host ;
- controle local dans chaque remote ;
- etat d'erreur visible si la session est invalide ;
- nettoyage du token si le payload ne peut pas etre decode.

## Module Federation

Dans cette version, `vue` est partage en singleton :

```js
shared: {
  vue: {
    singleton: true,
    requiredVersion: deps.vue,
  },
}
```

Cela evite de charger plusieurs instances de Vue entre le Host et les remotes.

Les entrees `src/main.js` chargent aussi un fichier `bootstrap.js` avec `import('./bootstrap')`. Cette initialisation asynchrone laisse Webpack preparer le partage Module Federation avant de consommer `vue`, ce qui evite l'erreur :

```text
Shared module is not available for eager consumption
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run install:all` | Installe les dependances des trois apps. |
| `npm run start:all` | Lance les trois apps. |
| `npm run build:all` | Build les trois apps. |
| `npm run start:host` | Lance seulement le Host. |
| `npm run start:list` | Lance seulement la liste. |
| `npm run start:details` | Lance seulement le detail. |

## Difference Avec Debutant

La version advanced ajoute :

- plus de donnees ;
- une meilleure experience utilisateur ;
- des controles de session visibles ;
- une configuration Module Federation plus robuste ;
- des cas d'erreur mieux presentes ;
- une UI plus adaptee a une demo professionnelle.


## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9020`.
- Les deux remotes repondent sur `http://localhost:9021` et `http://localhost:9022`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
