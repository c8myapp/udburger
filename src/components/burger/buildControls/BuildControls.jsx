import React from "react";

import BuildControl from "./buildControl/BuildControl";
import css from './BuildControls.css';

const BuildControls = props => {
  return (
    <div className={css.BuildControls}>
      {Object.keys(props.ingredients).map((ingredient, i) => {
        //console.log(ingredient + i);
        return (
          <BuildControl
            key={ingredient + i}
            label={ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
          />
        );
      })}
      ;
    </div>
  );
};
export default BuildControls;
