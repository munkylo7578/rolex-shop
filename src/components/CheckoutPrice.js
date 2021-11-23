import React, { forwardRef } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helper";
import { useCartContext } from "../contexts/cart_context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";
import firebase from "../firebase";
import { useUserContext } from "../contexts/user_context";
import * as dayjs from "dayjs";
import "dayjs/locale/vi";
const CheckoutPrice = ({ handleSubmit }, formRef) => {
  const { total_price, cart,clearCart } = useCartContext();
  const { currentUser } = useUserContext();
  const history = useHistory();
  const onSubmit = (data) => {
    const timeOrder = dayjs().locale("vi").format("HH:mm, D MMMM [năm] YYYY ");
    // Create Order list with path = "/user_phone_number/timeOrder"
    const orderRef = firebase
      .database()
      .ref("Order")
      .child(`${currentUser}`);

    const orderDetail = {
      total_price,
      timeOrder,
      product: cart,
      user: data,
    };
   
    orderRef.push(orderDetail);
    swal({
      title: "Thành công!",
      text: "Bạn đã đặt hàng thành công!",
      icon: "success",
      button: "Xem thông tin đơn hàng",
    })
    .then(clearCart)
    .then(()=>history.push("/tai-khoan/orders"));
     
  };
  return (
    <Wrapper>
      <ul>
        <li>
          <h2>ĐƠN HÀNG CỦA BẠN</h2>
        </li>

        <li>
          <h5>SẢN PHẨM</h5>
          <h5>Tổng</h5>
        </li>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <p className="cart-item__name">
                {item.name} <span> x {item.amount}</span>
              </p>
              <strong>{formatPrice(item.price * item.amount)}</strong>
            </li>
          );
        })}
        <li>
          <h5>Giao hàng</h5>
          <span>Giao hàng miễn phí</span>
        </li>
        <li>
          <h5>Tổng</h5>
          <strong>{formatPrice(total_price)}</strong>
        </li>

        <li>
          <button onClick={handleSubmit(onSubmit)} className="primary-btn">
            ĐẶT HÀNG
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  font-size: 0.9rem;
  ul {
    border: 2px solid var(--primary-color);

    border-radius: 3px;
    padding: 32px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 8px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 12px;
      :first-child,
      :last-child {
        border: none;
      }
      :nth-child(2) {
        border-bottom: 2px solid #ccc;
      }
      h5 {
        font-size: 0.9rem;
      }
      h2 {
        margin-bottom: 20px;
      }
      .cart-item__name {
        width: 250px;
        line-height: 1.7;
        span {
          font-weight: bold;
          margin-left: 4px;
        }
        @media (min-width: 662px) {
          width: 500px;
        }
        @media (min-width: 992px) {
          width: 350px;
        }
      }
      button {
        margin-top: 20px;

        padding: 12px 20px;
      }
    }
  }
  @media (min-width: 992px) {
  }
`;
export default forwardRef(CheckoutPrice);
