import React from "react";
import css from "./Button.css";

const Button = props => (<button
  //statemeng for css
  className={[css.Button,css[props.btnType]].join(' ')}
  
  onClick={props.clicked}>{props.children}</button>
);

export default Button;
