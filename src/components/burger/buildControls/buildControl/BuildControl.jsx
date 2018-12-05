import React  from 'react';
import css from './BuildControl.css';


const BuildControl=props=>(
<div className={css.BuildControl}>
	<div className={css.Label}>{props.label}</div>
	<button className={css.More}>More</button>
	<button className={css.Less}>Less</button>
</div>

);
export default BuildControl;
