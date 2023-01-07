from flask import Flask
from src.controllers.recipe_controller import RecipeController


app = Flask(__name__)
recipe_controller = RecipeController()


@app.route('/')
def root():
    return {'text': 'hello world'}


@app.route('/recipes')
def get_all_recipes():
    return recipe_controller.getAllRecipeNames()


if __name__ == '__main__':
    app.run(debug=True)