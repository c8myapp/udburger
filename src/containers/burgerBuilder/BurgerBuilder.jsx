import React, { Component } from 'react'
import ContainerChild from '../../hoc/ContainerChild';
import Burger from '../../components/burger/Burger';

export default class BurgerBuilder extends Component {
	state=
	{
		ingredients :{
				salad:0,
				bacon:0,
				cheese:2,
				meat:0
		}
	};
	
	render() {
	return (
	  <ContainerChild>
		<Burger ingredients = {this.state.ingredients}></Burger>
		<div>Build Controls</div>
	  </ContainerChild>
		
	  
	)
  }
}
