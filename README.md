# Say Jello

### Objectifs

Utiliser Typescript pour créer un `Hello world` à l'aide des [Variables](https://www.typescriptlang.org/docs/handbook/variable-declarations.html), [Function](https://www.typescriptlang.org/docs/handbook/functions.html), [Classes](https://www.typescriptlang.org/docs/handbook/classes.html) et [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
___
### Exercices

#### Avant toute chose

**Forker le repo github sur votre profil et puis cloner celui-ci**

Vérifier avec votre terminal si `nodejs` & `npm` sont bien installer.
dans votre terminal :
* `node --version`
* `npm --version`
	
Et pour finir faire un `npm install` et `npm start` et rendez-vous sur l'adresse `http://localhost:9000`

##### Étape 1

Créer une fonction `jello` qui prendra trois arguments `first_name`, `last_name`, `age`.

Une fois cette fonction crée, elle devra renvoyer `Jello Bello [first_name] [last_name] à [age] ans` dans votre `HTML` dans la `section#app`.


##### Étape 2

Créer un classe `Person` avec les mêmes attributs que la fonction `jello`.

Une fois créer, rapeller la `jello` avec une nouvelle instance de `Person`.

Mettre en place vos accesseur pour chaque attributs que possède votre classe.

Une fois ceci fait, encore une fois rapeller `jello` avec une nouvelle instance de `Person`.

Créer un function qui vérifira si la `Person` instacier et un adulte ou non. 

Elle devra renvoyer `Jello Bello [first_name] [last_name] à [age] ans. [first_name] est un [is_an_adult]` dans votre `HTML` dans la `section#app`.

#### Etape 3

Créer une `Interfaces` qui va prendre les mêmes attributs qui votre classe `Person`.

Puis implémenter votre `Interfaces` à votre classe `Person`.

#### Etape 4

Créer un formulaire dans votre `index.html` ou il y aura 3 inputs (`first_name`, `last_name`, `age`).

Puis avec votre `typescript` récupérer ce que renvoie votre formulaire et créer une nouvelle instance de votre classe `Person` à chaque nouvelle soumission du formulaire.

#### Bonus

> Comming soon.
