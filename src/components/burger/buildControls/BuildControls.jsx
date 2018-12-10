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
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addItem={() => props.ingredientAdd(ctrl.type)}
        removeItem={() => props.ingredeintRemove(ctrl.type)}
        
        
      />
    ))}
    </div>
  );
};
export default BuildControls;