import React from "react";
import ContainerChild from "../../hoc/ContainerChild";
import css from './Layout.css';

const Layout = props => (
  <ContainerChild>
    <div>Toolbar, sidedrawer,Backdrop</div>
    <main className={css.Content}>{props.children}</main>
  </ContainerChild>
);

export default Layout;
