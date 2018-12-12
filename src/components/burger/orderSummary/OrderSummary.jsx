import React from "react";
import ContainerChild from "../../../hoc/ContainerChild";
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
	  <p>Continue to Checkout?</p>
    </ContainerChild>
  );
};

export default OrderSummary;