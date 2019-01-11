import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

export default class AddRecipe extends React.Component {
  state = {
    show: false,
    name: '',
    ingredients: ''
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
    this.props.addRecipe(this.state.name, this.state.ingredients);
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <Button bsStyle='primary' onClick={this.open}>
          Add Recipe
        </Button>
        <Modal show={this.state.show} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new recipe!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>All Fields Are Required.</p>
            <FormGroup>
              <FormControl type='text' placeholder='Recipe Name' onChange={this.handleInputChange} name='name' />
            </FormGroup>
            <FormGroup controlId='formControlsTextarea'>
              <ControlLabel>Textarea</ControlLabel>
              <FormControl
                componentClass='textarea'
                placeholder='Enter ingredients (separated by commas)'
                name='ingredients'
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <ButtonToolbar>
              <Button bsStyle='success' onClick={this.handleSubmit}>
                Submit
              </Button>
            </ButtonToolbar>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
