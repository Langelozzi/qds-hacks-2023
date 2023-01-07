from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from src.controllers.recipe_controller import RecipeController


app = Flask(__name__)
CORS(app)
recipe_controller = RecipeController('data/recipes.json')


@app.route('/')
def root():
    response = jsonify({'text': 'hello world'})
    return response


@app.route('/recipes')
def get_all_recipes():
    return recipe_controller.get_all_recipes()


@app.route('/recipes/ingredient-wizard', methods=["POST"])
def get_recipes_matched_by_ingredient():
    request_body = request.get_json()
    ingredients = request_body["ingredients"]

    return recipe_controller.get_recipes_ordered_by_ingredients(ingredients)


@app.route('/recipes/<recipe_id>')
def get_recipe_by_id(recipe_id):
    return recipe_controller.get_recipe_by_id(int(recipe_id))


if __name__ == '__main__':
    app.run(debug=True)
