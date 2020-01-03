import React, { Component } from 'react';
import { 
  Button, 
  TextInput,
  Row
} from 'react-materialize';

export default class NewRestaurantForm extends Component {
  state = {inputText: ''};

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  onSave = () => {
    const { onSave } = this.props;
    const { inputText } = this.state;

    onSave(inputText);

  }
  render() {
    const { inputText } = this.state;
    return (
      <Row>
        <TextInput 
          s={12} m={10} l={10}
          label="Restaurant Name" 
          value={inputText}
          onChange={this.handleTextChange}
          data-test="newRestaurantName" 
        />
        <Button 
          s={12} m={4} l={2}
          data-test="saveNewRestaurantButton"
          onClick={this.onSave}
        >
          Save
        </Button>
      </Row>
    );
  }
}
