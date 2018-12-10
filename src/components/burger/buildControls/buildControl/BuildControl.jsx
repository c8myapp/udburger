import React  from 'react';
import css from './BuildControl.css';


const BuildControl=props=>(
<div className={css.BuildControl}>
	<div className={css.Label}>{props.label}</div>
	<button className={css.Less} onClick={props.removeItem}>Less</button>
	<button className={css.More} onClick={props.addItem}>
      More
    </button>
</div>

);
export default BuildControl;
