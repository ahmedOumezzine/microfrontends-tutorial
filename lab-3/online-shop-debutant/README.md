# Online Shop Debutant

Version debutant du Lab 3. Elle montre comment partager un etat simple entre plusieurs micro-frontends Angular.

## Objectif

Cette version sert a comprendre les bases de la gestion d'etat distribuee :

- un Host Angular charge deux remotes ;
- `product-list-app` emet un evenement navigateur ;
- `shop-app` recoit l'evenement et met a jour le panier ;
- `cart-app` lit le panier depuis `localStorage` ;
- NgRx illustre le role d'un store dans l'application hote.

## Architecture

| Application | Port | Role |
| --- | --- | --- |
| `shop-app` | `9000` | Host, layout principal, NgRx et orchestration du panier. |
| `product-list-app` | `9001` | Remote qui expose la liste des produits. |
| `cart-app` | `9002` | Remote qui affiche le panier persiste. |

## Fonctionnalites

- affichage de trois produits ;
- ajout au panier via `cart:add` ;
- compteur panier dans le Host ;
- persistance dans `localStorage` avec la cle `lab3-cart` ;
- synchronisation du panier via `cart:updated` ;
- bouton pour vider le panier.


## Guide De Lecture

Commencez par le Host `shop-app`, car c est lui qui compose l interface finale. Lisez ensuite `product-list-app` et `cart-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Gestion d etat ;
- competence travaillee : synchroniser un panier entre modules ;
- concepts importants : NgRx, evenements navigateur, localStorage ;
- ports : `9000`, `9001`, `9002`.

## Installation

```bash
cd lab-3/online-shop-debutant
npm install
npm run install:all
```

## Execution

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
| Host `shop-app` | Charge les remotes, garde l etat global utile et orchestre l interaction. |
| Remote `product-list-app` | Fournit une partie de l interface et expose un composant consommable par le Host. |
| Remote `cart-app` | Affiche le detail, le resultat ou la deuxieme partie du flux utilisateur. |
| `remoteEntry.js` | Fichier genere par Webpack qui permet au Host de charger une remote a distance. |
| `shared` | Section qui evite de dupliquer les dependances critiques comme React, Vue ou Angular. |

## Build

```bash
npm run build:all
```

## Validation

1. Ouvrir `http://localhost:9000`.
2. Ajouter un produit depuis la liste.
3. Verifier que le compteur du Host augmente.
4. Verifier que `cart-app` affiche le produit.
5. Vider le panier.
6. Recharger la page et verifier l'etat de `localStorage`.

## Concepts Montres

- Host comme coordinateur d'etat ;
- evenements navigateur comme contrat entre micro-frontends ;
- persistance locale simple ;
- integration Angular standalone avec Module Federation ;
- NgRx dans l'application principale.

## Difference Avec Advanced

Cette version reste volontairement simple. La version advanced ajoute une interface plus moderne, plus de produits, des filtres, un panier groupe par quantite, des statistiques et une cle `localStorage` separee.


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
