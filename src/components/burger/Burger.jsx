import React from "react";
import css from "./Burger.css";
import BurgerIngredient from "./burgerIngredient/BurgerIngredient";

const Burger = props => {
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
	  <BurgerIngredient type="cheese" />
	  <BurgerIngredient type="bacon" />
	  <BurgerIngredient type="salad" />
	  <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
