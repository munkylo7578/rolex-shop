import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helper";
import { useCartContext } from "../contexts/cart_context";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/user_context";
import { useProductsContext } from "../contexts/products_context";
const CartPrice = () => {
  const history = useHistory();
  const { total_price } = useCartContext();
  const { isLogin } = useUserContext();
  const { openForm } = useProductsContext();
  return (
    <Wrapper>
      <h5>TỔNG SỐ LƯỢNG</h5>
      <div>
        <p>Tổng phụ</p>
        <strong>{formatPrice(total_price)}</strong>
      </div>
      <div>
        <p>Giao hàng</p>
        <span>Giao hàng miễn phí</span>
      </div>
      <div>
        <p>Tổng</p>
        <strong>{formatPrice(total_price)}</strong>
      </div>
      {
        isLogin ?  <button className="primary-btn" onClick={() => history.push("/checkout")}>
        TIẾN HÀNH THANH TOÁN
      </button>
      :  <button className="primary-btn" onClick={openForm}>
      ĐĂNG NHẬP ĐỂ THANH TOÁN
    </button>
      }
     
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h5,
  div {
    padding-bottom: 8px;
  }
  h5 {
    border-bottom: 3px solid #ececec;
  }
  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    margin-top: 28px;
  }
  div:last-child {
    border-bottom: 3px solid #ececec;
  }
  button {
    margin-top: 24px;
    width: 100%;
    padding: 8px 20px;

    :hover {
      background-color: #ccaa7e;
    }
  }
`;
export default CartPrice;
