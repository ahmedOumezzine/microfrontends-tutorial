# Online Shop Advanced

Version avancee du Lab 3. Elle garde le meme objectif de gestion d'etat que la version debutant, mais ajoute une experience plus proche d'une vraie boutique.

## Objectif

Cette version montre comment enrichir une architecture micro-frontend Angular avec un etat partage plus complet :

- Host avec statistiques panier ;
- token d'etat simule via `localStorage` ;
- catalogue filtrable par categorie ;
- panier groupe par quantite ;
- total, sous-total et livraison ;
- evenements navigateur plus riches.

## Architecture

| Application | Port | Role |
| --- | --- | --- |
| `shop-app` | `9030` | Host, dashboard, NgRx, statistiques et orchestration. |
| `product-list-app` | `9031` | Remote catalogue avec filtres et fiches produit. |
| `cart-app` | `9032` | Remote panier avec quantites, livraison et total. |

## Fonctionnalites Advanced

- design Bootstrap moderne avec hero sombre et cards ;
- indicateurs articles, lignes et total dans le Host ;
- catalogue de cinq produits ;
- filtres par categorie ;
- produits avec stock, note et categorie ;
- panier groupe par produit avec quantite ;
- calcul du sous-total, de la livraison et du total ;
- cle `localStorage` separee : `lab3-advanced-cart` ;
- reset panier qui synchronise Host et Remote.


## Guide De Lecture

Commencez par le Host `shop-app`, car c est lui qui compose l interface finale. Lisez ensuite `product-list-app` et `cart-app` pour comprendre ce que chaque remote expose. Le fichier `webpack.config.js` de chaque application est le point central : il indique le nom de la remote, les modules exposes, les dependances partagees et le port local.

Dans cette version, gardez en tete :

- sujet du lab : Gestion d etat ;
- competence travaillee : synchroniser un panier entre modules ;
- concepts importants : NgRx, evenements navigateur, localStorage ;
- ports : `9030`, `9031`, `9032`.

## Installation

```bash
cd lab-3/online-shop-advanced
npm install
npm run install:all
```

## Execution

```bash
npm run start:all
```

Ouvrir :

```text
http://localhost:9030
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

1. Ouvrir `http://localhost:9030`.
2. Filtrer le catalogue par categorie.
3. Ajouter plusieurs fois le meme produit.
4. Verifier que la quantite augmente dans le panier.
5. Verifier les statistiques dans le Host.
6. Verifier le total et la livraison.
7. Vider le panier.
8. Recharger la page et verifier que l'etat reste coherent.

## Gestion D'etat

Le Host reste le coordinateur principal :

- `product-list-app` emet `cart:add` ;
- `shop-app` met a jour NgRx et `localStorage` ;
- `shop-app` emet `cart:updated` ;
- `cart-app` relit `localStorage` ;
- `cart-app` emet `cart:cleared` quand le panier est vide.

Ce modele garde les remotes decouplees tout en permettant une experience synchronisee.

## Difference Avec Debutant

La version advanced ajoute :

- plus de donnees produit ;
- plus d'interactions utilisateur ;
- une UI plus professionnelle ;
- une logique de panier plus realiste ;
- des statistiques visibles dans le Host ;
- des ports separes pour pouvoir lancer les deux versions sans conflit.


## Checklist De Validation

- Le Host s ouvre sur `http://localhost:9030`.
- Les deux remotes repondent sur `http://localhost:9031` et `http://localhost:9032`.
- L interaction principale du lab fonctionne de bout en bout.
- La console navigateur ne montre pas d erreur Module Federation.
- `npm run build:all` termine sans erreur.


## Erreurs Frequentes

- **Remote introuvable** : verifiez que la remote est demarree et que le port correspond au README.
- **Port deja utilise** : arretez l ancien serveur ou utilisez la version advanced qui possede ses propres ports.
- **Dependance partagee en conflit** : comparez les versions dans les `package.json` et la section `shared`.
- **Apres un nettoyage** : relancez `npm install` puis `npm run install:all`.
