import json


class RecipeController:
    def __init__(self, data_path) -> None:
        with open(data_path, encoding="utf8") as data:
            unfiltered_recipes = json.load(data)
            self.recipes = self.__remove_duplicate_recipes(unfiltered_recipes)

    def get_all_recipes(self) -> list[dict]:
        return self.recipes

    def get_all_recipe_names(self) -> list[str]:
        return [recipe['title'] for recipe in self.recipes]

    def get_recipes_ordered_by_ingredients(self, recipes: list, ingredients: list):
        recipes_with_match_scores = self.__set_match_scores(recipes, ingredients)
        recipes_with_at_least_one_match = [recipe for recipe in recipes_with_match_scores if recipe["matchScore"] > 0]
        ordered_recipes = self.__sort_by_match_score(recipes_with_at_least_one_match)

        return ordered_recipes

    def get_recipe_by_id(self, recipe_id) -> dict:
        for element in self.recipes:
            if element['id'] == recipe_id:
                return element

    def get_healthy_recipes(self) -> list:
        return [recipe for recipe in self.recipes if recipe['veryHealthy'] is True]

    # Private methods
    @staticmethod
    def __remove_duplicate_recipes(data: list) -> list:
        recipes = []

        for recipe in data:
            if recipe not in recipes:
                recipes.append(recipe)

        return recipes

    @staticmethod
    def __sort_by_match_score(recipes):
        return sorted(recipes, key=lambda recipe: recipe["matchScore"], reverse=True)

    @staticmethod
    def __set_match_scores(recipes, ingredients) -> list:
        def add_match_score_to_recipe(recipe):
            match_score, num_matches, num_ingredients = RecipeController.__calculate_match_score(recipe, ingredients)
            recipe["matchScore"] = match_score
            recipe["numMatches"] = num_matches
            recipe["numIngredients"] = num_ingredients
            return recipe

        return list(map(add_match_score_to_recipe, recipes))

    @staticmethod
    def __calculate_match_score(recipe: dict, ingredients: list) -> tuple:
        recipe_ingredients = [ingredient['name'] for ingredient in recipe["extendedIngredients"]]

        matched = set()
        for ingredient in ingredients:
            for recipe_ingredient in recipe_ingredients:
                if RecipeController.__is_ingredient_match(recipe_ingredient, ingredient):
                    matched.add(recipe_ingredient)

        num_matches = len(matched)
        match_score = round(num_matches / len(recipe_ingredients), 2)

        return match_score, num_matches, len(recipe_ingredients)

    @staticmethod
    def __is_ingredient_match(recipe_ingredient: str, ingredient: str):
        recipe_ingredient_words = [recipe.strip().lower() for recipe in recipe_ingredient.split(' ')]
        ingredient_words = [recipe.strip().lower() for recipe in ingredient.split(' ')]

        matched_words = set(recipe_ingredient_words).intersection(set(ingredient_words))
        number_of_matching_words = len(matched_words)

        if number_of_matching_words > 0:
            return True
        return False


def main() -> None:
    recipe_controller = RecipeController('../../data/recipes.json')

    ingredients = ["cream", "sour cream", "sugar", "orange", "apples", "cheese", "pecans"]
    recipe_controller.get_recipes_ordered_by_ingredients(ingredients)

    print(recipe_controller.get_recipe_by_id(641794))


if __name__ == '__main__':
    main()
