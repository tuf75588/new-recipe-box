import React, { Component } from 'react';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';
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
        ]
      },
      { name: 'Spaghetti', ingredients: ['Noodles', 'Tomato Sauce', 'Meatballs'] },
      { name: 'Split Pea Soup', ingredients: ['1 pound split peas', '1 onion', '6 carrots', '4 ounces of ham'] }
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

  render() {
    const { recipes } = this.state;
    return (
      <React.Fragment>
        <h1 className='logo'>Recipe Box</h1>
        <div className='container'>
          <RecipeList recipes={recipes} />
          <AddRecipe addRecipe={this.handleAddRecipe} />
        </div>
      </React.Fragment>
    );
  }
}
export default RecipeContainer;
