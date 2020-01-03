import React, {Component} from 'react';
import {Button, Row, Col, Modal} from 'react-materialize';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showRestaurant: false,
  };

  handleShowRestaurant = () => {
    this.setState({
      showRestaurant: !this.state.showRestaurant,
    });
  };

  handleAddRestaurant = newRestaurantName => {
    this.setState({
      restaurantNames: [newRestaurantName, ...this.state.restaurantNames],
    });
    this.handleShowRestaurant();
  };

  renderNewRestaurantForm() {
    if (this.state.showRestaurant) {
      return(
        <NewRestaurantForm onSave={this.handleAddRestaurant} />
      );
    }
  }
  render() {
    const {restaurantNames} = this.state;
    return (
      <div>
        <Row>
          <Button
            data-test="addRestaurantButton"
            onClick={this.handleShowRestaurant}
          >
            Add Restaurant
          </Button>
        </Row>
        <Row>
          {this.renderNewRestaurantForm()}
        </Row>
        <Row>
          <RestaurantList restaurants={restaurantNames} />
        </Row>
      </div>
    );
  }
}
