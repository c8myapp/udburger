import React from "react";
import ContainerChild from "../../../hoc/ContainerChild";
import Button from "../../ui/button/Button";
const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{}}>{igKey}</span> : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <ContainerChild>
      <h3>Your Order</h3>
      <p>A delicius burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong> Total Price : {props.totalPrice}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContiune}>
        Continue
      </Button>
    </ContainerChild>
  );
};

export default OrderSummary;
