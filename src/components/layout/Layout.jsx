import React from "react";
import ContainerChild from "../../hoc/ContainerChild";

const Layout = props => (
  <ContainerChild>
    <div>Toolbar, sidedrawer,Backdrop</div>
    <main>{props.children}</main>
  </ContainerChild>
);

export default Layout;
