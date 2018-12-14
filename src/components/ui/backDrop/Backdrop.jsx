import React from 'react';
import css from './Backdrop.css';

const Backdrop = props=>(
	
	props.show ? <div className={css.Backdrop} onClick={props.clicked}>
	
	</div> : null
);

export default Backdrop;
