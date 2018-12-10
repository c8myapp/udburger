import React, { Component } from "react";
import ContainerChild from "../../hoc/ContainerChild";
import Burger from "../../components/burger/Burger";
import BuildControls from "../../components/burger/buildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.7,
  meat: 1.6,
  bacon: 1.0
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0
  };

  updateStatusPurchase = ingredients => {
    const sum = Object.keys(ingredients)
      .map(keyarray => {
        return ingredients[keyarray];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = type => {
    //update ingredient state
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const tmpIngredients = {
      ...this.state.ingredients
    };
    tmpIngredients[type] = updateCount;

    //update price
    const oldPrice = this.state.totalPrice;
    const ingredientPrice = INGREDIENT_PRICE[type];
    const updatePrice = oldPrice + ingredientPrice;

    //update state
    this.setState({ totalPrice: updatePrice, ingredients: tmpIngredients });
    this.updateStatusPurchase(tmpIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const tmpIngredients = {
      ...this.state.ingredients
    };
    tmpIngredients[type] = updateCount;

    //update price
    const oldPrice = this.state.totalPrice;
    const ingredientPrice = INGREDIENT_PRICE[type];
    const updatePrice = oldPrice - ingredientPrice;

    //update state
    this.setState({ totalPrice: updatePrice, ingredients: tmpIngredients });
    this.updateStatusPurchase(tmpIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <ContainerChild>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          ingredientAdd={this.addIngredientHandler}
          ingredeintRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </ContainerChild>
    );
  }
}
