import React from "react";
import css from "./BurgerIngredient.css";

const BurgerIngredient = props => {
  let ingredients = null;
  switch (props.type) {
    case "bread-bottom":
      ingredients = <div className={css.BreadBottom} />;
      break;
    case "bread-top":
      ingredients = (
        <div className={css.BreadTop}>
          <div className={css.Seeds1} />
          <div className={css.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredients = <div className={css.Meat} />;
      break;
    case "cheese":
      ingredients = <div className={css.Cheese} />;
      break;
    case "salad":
      ingredients = <div className={css.Salad} />;
      break;
    case "bacon":
      ingredients = <div className={css.Bacon} />;
      break;
    default:
      ingredients = null;
  }
  return ingredients;
};

export default BurgerIngredient;
