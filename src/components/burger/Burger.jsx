import React from "react";
import css from "./Burger.css";
import BurgerIngredient from "./burgerIngredient/BurgerIngredient";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      //console.log("igKey :: "+igKey);
      //console.log(props.ingredients[igKey]);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //console.log("i :: "+igKey + i);
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      console.log(arr);
      console.log(el);
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
