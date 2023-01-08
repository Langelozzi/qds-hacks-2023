# Reci.py - QDS Hacks 2023

<b>Team Froggue</b>: Lucas Angelozzi, Arman Chinai, Annette Lam, Amir Eskandari, Cameron Smith

---

## Objective

We wanted to take our hackthon propmt, "turning data into insight", and give it a practical application for the widest range of users possible. We set out to create an application that, using our match score based algorithm, delivers the user a list of recipes that most closely matches the ingredients they already have in their homes! Instead of searching for a recipe, only to find out you need to buy all the ingredients for it, we want to let the user tell us what ingredients they have, and provide them with recipes they are most prepared to make.

### `Front-end`

An interactive, responsive, and modern React web application designed to be intuitive to use and aesthetically pleasing.

### `Back-end`

Flask based back-end that has endpoints for all user requests.

---

## Features

### `Nav bar`

* All Recipes: This tab will provide the user with all the recipes that match their ingredient query.
* Healthy: Using the data set we scraped, we filtered out only the recipes that are identified as healthy, and only return those to a users query.
* Vegan: This tab will only show search results that are vegan.
* Gluten-free: The gluten free tab provides only search results that are gluten free, based on the data provided in our data set.
* Dairy-free: The dairy free tab returns only dairy free search results.

<br>

### `Search bar`

The search bar provides the user with a minimalistic avenue to input their ingredients. As you input ingredients, you can see them being added to the list above. You can easily remove and add more, and only need to worry about a single text input. The search interface is consistent throughout all tabs of the application, to provide a congruent UI for the user.

<br>

### `Recipe cards`

* Each recipe card is dynamically populated according to the ingredients via the query.
* The recipe results will also display a compatibility bar -- according to the number of entered ingredients of the user.
* If the user has all the ingredients, there will be an animated compatibility bar to display this.