import React, { Component } from 'react'
import ContainerChild from '../../hoc/ContainerChild';
import Burger from '../../components/burger/Burger';

export default class BurgerBuilder extends Component {
  render() {
	return (
	  <ContainerChild>
		<Burger></Burger>
		<div>Build Controls</div>
	  </ContainerChild>
		
	  
	)
  }
}
