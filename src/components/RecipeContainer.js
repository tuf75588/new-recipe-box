import React, { Component } from 'react';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
import uuidv4 from 'uuid';
class RecipeContainer extends Component {
  state = {
    recipes: [
      {
        name: 'Banana Smoothie',
        ingredients: [
          '2 bananas',
          '1/2 cup vanilla yogurt',
          '1/2 cup skim milk',
          '2 teaspoons honey',
          'pinch of cinnamon'
        ],
        id: uuidv4()
      },
      { name: 'Spaghetti', ingredients: ['Noodles', 'Tomato Sauce', 'Meatballs'], id: uuidv4() },
      {
        name: 'Split Pea Soup',
        ingredients: ['1 pound split peas', '1 onion', '6 carrots', '4 ounces of ham'],
        id: uuidv4()
      }
    ]
  };
  handleAddRecipe = (name, ingredients) => {
    let newRecipe = { name, ingredients: [...ingredients.split(',')] };

    this.setState((state, props) => {
      return {
        recipes: [...state.recipes, newRecipe]
      };
    });
  };
  handleUpdateRecipe = (id, newRecipe) => {
    //! getting recipe we need to edit
    console.log(newRecipe.ingredients);
    // newRecipe.ingredients = [...newRecipe.ingredients.split(',')];
    const target = [...this.state.recipes].findIndex((el) => el.id === id);
    let newrecipes = [...this.state.recipes].map((element, index, arr) =>
      index === target ? (element = newRecipe) : element
    );

    this.setState({ recipes: newrecipes });
  };
  handleDelete = (recipeId) => {
    const { recipes } = this.state;
    const filteredList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    this.setState((state, props) => {
      return {
        recipes: filteredList
      };
    });
  };

  render() {
    const { recipes } = this.state;
    return (
      <React.Fragment>
        <h1 className='logo'>Recipe Box</h1>
        <div className='container'>
          <RecipeList recipes={recipes} updateRecipe={this.handleUpdateRecipe} handleDelete={this.handleDelete} />
          <AddRecipe addRecipe={this.handleAddRecipe} />
        </div>
      </React.Fragment>
    );
  }
}
export default RecipeContainer;
