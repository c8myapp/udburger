import React from "react";
import css from "./Modal.css";
import ContainerChild from "../../../hoc/ContainerChild";
import Backdrop from "../backdrop/Backdrop";

const Modal = props => (
  <ContainerChild>
    <Backdrop show={props.show} clicked={props.modalClosed} />

    <div
      className={css.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </ContainerChild>
);

export default Modal;
