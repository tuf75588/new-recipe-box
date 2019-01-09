import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';

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
  render() {
    const { recipes } = this.state;
    return (
      <React.Fragment>
        <h1 className='logo'>Recipe Box</h1>
        <div className='container'>
          <span />
          <PanelGroup accordion id='accordion-example'>
            {recipes.map((recipe, index) => (
              <Panel eventKey={index + 1}>
                <Panel.Heading>
                  <Panel.Title toggle>{recipe.name}</Panel.Title>
                  <Panel.Body collapsible>
                    <ListGroup>
                      {recipe.ingredients.map((ing, indx) => (
                        <ListGroupItem key={indx}>{ing}</ListGroupItem>
                      ))}
                    </ListGroup>
                  </Panel.Body>
                </Panel.Heading>
              </Panel>
            ))}
          </PanelGroup>
        </div>
      </React.Fragment>
    );
  }
}
export default RecipeContainer;
