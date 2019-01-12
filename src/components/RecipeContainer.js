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
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  hydrateStateWithLocalStorage = () => {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        //parse this value and set state on component render
        try {
          value = JSON.parse(value);
          this.setState((state, props) => {
            return {
              recipes: value
            };
          });
        } catch {
          console.warn('an error occured');
        }
      }
    }
  };

  getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  handleAddRecipe = (name, ingredients) => {
    let newRecipe = { name, ingredients: [...ingredients.split(',')], id: uuidv4() };

    this.setState(
      (state, props) => {
        return {
          recipes: [...state.recipes, newRecipe]
        };
      },
      () => {
        localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
      }
    );
  };
  handleUpdateRecipe = (id, newRecipe) => {
    //! getting recipe we need to edit
    const target = [...this.state.recipes].findIndex((el) => el.id === id);
    let newrecipes = [...this.state.recipes].map((element, index, arr) =>
      index === target ? (element = newRecipe) : element
    );
    this.setState(
      (state, props) => {
        return {
          recipes: newrecipes
        };
      },
      () => {
        localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
      }
    );
  };
  handleDelete = (recipeId) => {
    const { recipes } = this.state;
    const filteredList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    this.setState(
      (state, props) => {
        return {
          recipes: filteredList
        };
      },
      () => {
        localStorage.setItem('recipes', JSON.stringify(filteredList));
      }
    );
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
