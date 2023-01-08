# QDS Hacks 2023

<b>Team Froggue</b>: Lucas Angelozzi, Arman Chinai, Annette Lam, Amir Eskandari, Cameron Smith

---

## Objective

To create a Python-based web application that accepts a list of ingredients from the user, and returns an easy recipe for the user.

### `Front-end`

React based front-end that is interactive, responsive, with a modern design that is intuitive to use.

### `Back-end`

Flask based back-end that has endpoints for all user requests.

---

## Features

### `Nav bar`

* All Recipes: displays all recipes according to ingredients entered
* Healthy: sorts recipes by checking the JSON data if meets "healthy" criteria
* Vegan: sorts recipes by checking the JSON data if meets "vegan" criteria
* Gluten-free: sorts recipes by checking the JSON data if meets "gluten-free" criteria
* Dairy-free: sorts recipes by checking the JSON data if meets "dairy-free" criteria

### `Search bar`

* The user enters the ingredients they have at home to search our recipe database.
* The search results are yielded by keywords.
* Ingredient keywords will be compiled on top of the search for ease of reference.

### `Recipe cards`

* Each recipe card is dynamically populated according to the ingredients via the query.
* The recipe results will also display a compatibility bar -- according to the number of entered ingredients of the user.
* If the user has all the ingredients, there will be an animated compatibility bar to display this.

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
