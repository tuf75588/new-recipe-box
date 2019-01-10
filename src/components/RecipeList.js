import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import EditRecipe from './EditRecipe';
export default ({ recipes, updateRecipe }) => {
  return (
    <PanelGroup accordion id='accordion-example'>
      {recipes.map((recipe, index) => (
        <Panel key={index} eventKey={index + 1}>
          <Panel.Heading>
            <Panel.Title toggle>{recipe.name}</Panel.Title>
            <Panel.Body collapsible>
              <ListGroup>
                {recipe.ingredients.map((ing, indx) => (
                  <div key={indx}>
                    <ListGroupItem>{ing}</ListGroupItem>
                  </div>
                ))}
              </ListGroup>
              <ButtonToolbar>
                <EditRecipe name={recipe.name} ingredients={recipe.ingredients} update={updateRecipe} />
                <Button bsStyle='danger'>Delete Recipe</Button>
              </ButtonToolbar>
            </Panel.Body>
          </Panel.Heading>
        </Panel>
      ))}
    </PanelGroup>
  );
};
