import React from "react";

import BuildControl from "./buildControl/BuildControl";
import css from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = props => {
  return (
    <div className={css.BuildControls}>
      <p>
        Total Price = <strong>{props.price.toFixed(2)}</strong>
      </p>

      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addItem={() => props.ingredientAdded(ctrl.type)}
          removeItem={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button 
      className={css.OrderButton} 
      disabled={!props.purchasable}
      onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default BuildControls;
