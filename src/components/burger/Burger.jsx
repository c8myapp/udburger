import React from "react";
import css from "./Burger.css";
import BurgerIngredient from "./burgerIngredient/BurgerIngredient";

const Burger = props => {

  const transformIngredients= Object.keys(props.ingredients)
  .map(igKey=>{
    return [...Array(props.ingredients[igKey])].map((_,i)=>{
      return <BurgerIngredient key = {igKey+i} type={igKey}/>;
    });
  });

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
     {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
