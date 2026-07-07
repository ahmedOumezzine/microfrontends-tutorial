# Lab 3 - Gestion D'etat dans les Micro-Frontends

Ce lab presente une boutique en ligne construite avec Angular, Webpack 5, Module Federation, NgRx et Bootstrap.

Il contient deux projets separes :

- `online-shop-debutant`
- `online-shop-advanced`

Chaque projet est autonome. Chaque dossier possede son propre `package.json`, son propre `package-lock.json`, ses propres dependances, ses propres scripts et son propre README detaille.

## Organisation

```text
lab-3/
|-- README.md
|-- images/
|-- online-shop-debutant/
|   |-- README.md
|   |-- package.json
|   |-- shop-app/
|   |-- product-list-app/
|   `-- cart-app/
`-- online-shop-advanced/
    |-- README.md
    |-- package.json
    |-- shop-app/
    |-- product-list-app/
    `-- cart-app/
```

## Idee Principale

Les deux projets montrent la meme architecture :

- `shop-app` : application hote qui orchestre l'interface et coordonne l'etat.
- `product-list-app` : remote qui expose le catalogue de produits.
- `cart-app` : remote qui expose le panier.

Le catalogue emet un evenement navigateur quand un produit est ajoute. Le Host recoit cet evenement, met a jour son etat NgRx, persiste le panier dans `localStorage`, puis notifie le panier avec un autre evenement.

## Difference Entre Les Deux Projets

| Sujet | `online-shop-debutant` | `online-shop-advanced` |
| --- | --- | --- |
| Niveau | Debutant | Plus avance |
| Objectif | Comprendre le partage d'etat minimal | Montrer une experience panier plus proche d'une vraie app |
| Interface | Navbar, alerte, liste et panier simples | Hero, statistiques, cards, badges et layout plus moderne |
| Produits | 3 produits simples | 5 produits enrichis |
| Interactions | Ajouter et vider | Filtrer, ajouter plusieurs fois, grouper les quantites |
| Panier | Liste d'items | Lignes groupees, quantites, sous-total, livraison, total |
| Etat Host | Compteur simple | Articles, lignes uniques et total |
| localStorage | `lab3-cart` | `lab3-advanced-cart` |
| Ports | `9000`, `9001`, `9002` | `9030`, `9031`, `9032` |

## Quand Utiliser Chaque Version

Utilisez `online-shop-debutant` pour :

- expliquer les bases de l'etat partage ;
- comprendre le role du Host comme coordinateur ;
- montrer les evenements `cart:add` et `cart:updated` ;
- introduire NgRx sans complexite UI.

Utilisez `online-shop-advanced` pour :

- montrer une interface plus riche ;
- expliquer un panier plus realiste ;
- introduire filtres, quantites et statistiques ;
- montrer comment separer les ports et les cles `localStorage` ;
- comparer une architecture simple avec une version plus professionnelle.


## Parcours Conseille

1. Lancez d abord `online-shop-debutant` pour comprendre le flux principal.
2. Identifiez le Host `shop-app` et les deux remotes `product-list-app`, `cart-app`.
3. Ouvrez les fichiers `webpack.config.js` pour voir les noms exposes et les URLs `remoteEntry.js`.
4. Lancez ensuite `online-shop-advanced` et comparez les ports, le design et les interactions.
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
cd lab-3/online-shop-debutant
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
cd lab-3/online-shop-advanced
npm install
npm run install:all
npm run start:all
```

Ouvrir :

```text
http://localhost:9030
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

- [README debutant](./online-shop-debutant/README.md)
- [README advanced](./online-shop-advanced/README.md)

Commencez par le README de la version que vous voulez executer.
