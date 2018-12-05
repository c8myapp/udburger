import React, { Component } from "react";
import ContainerChild from "../../hoc/ContainerChild";
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/buildControls/BuildControls";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 2,
      meat: 0
    }
  };

  render() {
    return (
      <ContainerChild>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} />
      </ContainerChild>
    );
  }
}
