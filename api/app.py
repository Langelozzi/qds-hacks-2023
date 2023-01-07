from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from src.controllers.recipe_controller import RecipeController


app = Flask(__name__)
CORS(app)
recipe_controller = RecipeController()


@app.route('/')
def root():
    response = jsonify({'text': 'hello world'})
    return response


@app.route('/recipes')
def get_all_recipes():
    return recipe_controller.get_all_recipes()


if __name__ == '__main__':
    app.run(debug=True)