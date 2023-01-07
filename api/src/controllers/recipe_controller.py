import json

class RecipeController:
    def __init__(self) -> None:
        with open('data/recipes.json') as data:
            unfiltered_recipes = json.load(data)
            self.recipes = self.__remove_duplicate_recipes(unfiltered_recipes)
            

    def getAllRecipes(self) -> list[dict]:
        return self.recipes


    def getAllRecipeNames(self) -> list[str]:
        return [recipe['title'] for recipe in self.recipes]


    @staticmethod
    def __remove_duplicate_recipes(data: list) -> list:
        recipes = []

        for recipe in data:
            if recipe not in recipes:
                recipes.append(recipe)
        
        return recipes
