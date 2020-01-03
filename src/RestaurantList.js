import React from 'react';
import { dataURLToBlob } from 'blob-util';
import {Collection, CollectionItem} from 'react-materialize';

const RestaurantList = ({restaurants}) =>
  <Collection header="Restaurants">
    <RestaurantItems restaurants={restaurants} />
  </Collection>

const RestaurantItems = ({restaurants}) => (
  restaurants.length === 0 
    ? <NoRestaurantItems /> 
    : <SomeRestaurantItems restaurants={restaurants}/> 
);

const NoRestaurantItems = () => (
  <CollectionItem>(none added yet)</CollectionItem>
);
const SomeRestaurantItems = ({restaurants}) => (
  restaurants.map(restaurantName => (
    <CollectionItem key={restaurantName}>{restaurantName}</CollectionItem>
  ))
);

export default RestaurantList;
