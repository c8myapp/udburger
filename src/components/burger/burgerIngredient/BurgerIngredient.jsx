import React, { Component } from 'react'
import css from "./BurgerIngredient.css";
import PropTypes from "prop-types";


class BurgerIngredient extends Component {
  render() {
	let ingredients = null;
	switch (this.props.type) {
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
  }
}

BurgerIngredient.propType=
{
	type:PropTypes.string.isRequired
};

export default  BurgerIngredient;
