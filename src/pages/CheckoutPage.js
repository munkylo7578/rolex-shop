import React from "react";
import styled from "styled-components";
import { useCartContext } from "../contexts/cart_context";
const CheckoutPage = () => {
  const { total_price, cart } = useCartContext();
  return (
    <Wrapper>
      <section className="section-center">
        <article className="checkout-information">
          <h2>THÔNG TIN THANH TOÁN</h2>
          <form>
            <div className="form-control">
              <label htmlFor="">Tên đầy đủ *</label>
              <input type="text"></input>
            </div>

            <div className="form-control">
              <label htmlFor="">Địa chỉ *</label>
              <input type="text"></input>
            </div>
            <div className="form-control">
              <label htmlFor="">Tỉnh / Thành phố *</label>
              <input type="text"></input>
            </div>
            <div className="form-control">
              <label htmlFor="">Số điện thoại * </label>
              <input type="number"></input>
            </div>
            <div className="form-control">
              <label htmlFor="">Ghi chú đơn hàng (tùy chọn)</label>
              <textarea placeholder="Ghi chú về đơn hàng,ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."></textarea>
            </div>
          </form>
        </article>
        <article className="checkout-price">
          <ul>
            <li>
              <h2>ĐƠN HÀNG CỦA BẠN</h2>
            </li>

            <li>
              <div>
                <p>SẢN PHẨM</p>
                <h5>Tổng</h5>
              </div>
            </li>
            {cart.map((item) => {
              return (
                <li>
                  <div>
                    <p className="cart-item__name">{item.name} x {item.amount}</p>
                    <strong>{item.price}</strong>
                  </div>
                </li>
              );
            })}
            <li>
              <div>
                <h5>Giao hàng</h5>
                <span>Giao hàng miễn phí</span>
              </div>
            </li>
            <li>
              <div>
                <h5>Tổng</h5>
                <strong>200000</strong>
              </div>
            </li>

            <li>
              <button className="primary-btn">ĐẶT HÀNG</button>
            </li>
          </ul>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    margin-top: 32px;
    margin-bottom: 80px;
    display: grid;

    .checkout-information {
      h2 {
        margin-bottom: 24px;
        font-size: 1.2rem;
      }
      form {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px 60px 60px 60px 160px;
        padding-bottom: 52px;
        grid-row-gap: 30px;
        .form-control {
          label {
            display: block;
            margin-bottom: 12px;
            font-weight: 600;
            font-size: 0.9rem;
          }
          input,
          textarea {
            display: block;
            width: 100%;
            height: 60%;
            border: 1px solid #ccc;
            outline: none;
            padding-left: 12px;
          }
          textarea {
            padding-top: 12px;
            height: 80%;
          }
        }
      }
    }
    .checkout-price {
      font-size: 0.9rem;
      ul {
        border: 2px solid var(--primary-color);

        border-radius: 3px;
        padding: 32px;
      }
      .cart-item__name{
        width: 250px;
   
      }
      h2 {
        margin-bottom: 20px;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 12px;
        :nth-child(5),
        :nth-child(2) {
          border-bottom: 2px solid #ccc;
        }
      }
      button {
        margin-top: 20px;

        padding: 12px 20px;
      }
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 32px;
  
     
    }
  }
`;
export default CheckoutPage;
