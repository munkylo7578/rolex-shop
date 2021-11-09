import React from "react";

import styled from "styled-components";
import { useProductsContext } from "../contexts/products_context";

const Modal = () => {
  const { closeModal, isModalOpen } = useProductsContext();

  return (
    <ModalContainer onClick={closeModal}>
      <div className={isModalOpen ? "show-modal" : ""}></div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  .show-modal {
    display: block;
  }
  div {
    display: none;
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default Modal;
