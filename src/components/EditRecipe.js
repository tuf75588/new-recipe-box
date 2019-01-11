import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
export default class EditRecipe extends React.Component {
  state = {
    name: this.props.name || '',
    ingredients: this.props.ingredients || '',
    show: false
  };
  open = () => {
    this.setState({ show: true });
  };
  close = () => {
    this.setState({ show: false });
  };
  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState((state, props) => {
      return {
        [name]: value
      };
    });
  };
  handleSubmit = () => {
    const { name, ingredients } = this.state;
    const newRecipe = {
      name,
      ingredients
    };
    this.props.updateRecipe(newRecipe);
  };
  render() {
    const { show } = this.state;
    return (
      <>
        <Modal show={show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <FormControl
                type='text'
                value={this.state.name}
                placeholder='Recipe Name'
                onChange={this.handleInputChange}
                name='name'
              />
            </FormGroup>
            <FormGroup controlId='formControlsTextarea'>
              <ControlLabel>Textarea</ControlLabel>
              <FormControl
                componentClass='textarea'
                placeholder='Enter ingredients (separated by commas)'
                name='ingredients'
                value={this.state.ingredients}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button bsStyle='primary' onClick={this.handleSubmit}>
              Update
            </Button>
          </Modal.Body>
        </Modal>
        <Button bsStyle='warning' onClick={this.open}>
          Edit This Recipe
        </Button>
      </>
    );
  }
}
