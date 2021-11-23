import React, { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useUserContext } from "../contexts/user_context";
const ViewOrder = () => {
  const { id } = useParams();
  const { order, getOrder } = useUserContext();
  useEffect(() => {
    getOrder(id);
    //eslint-disable-next-line
  }, [id]);
  return (
    <>
      {order && (
        <Wrapper>
          <section className="section-center">
            <p>
              Đơn hàng đã được đặt lúc <span style={{color:"var(--primary-color)"}}>{order.timeOrder} </span>và hiện tại đang được
              xử lí
            </p>
            <h2>Chi tiết đơn hàng</h2>
            <div className="order-heading">
              <h4>SẢN PHẨM</h4>
              <h4>TỔNG</h4>
            </div>
            {order.product &&
              order.product.map((item) => {
                return (
                  <div key={item.id} className="product-ordered">
                    <p>
                      {item.name} <span>x {item.amount}</span>
                    </p>
                    <strong>{item.price}</strong>
                  </div>
                );
              })}
            <div className="order-detail">
              <h5>Giao nhận hàng</h5>
              <p>Giao hàng miễn phí</p>
            </div>
            <div className="order-detail">
              <h5>Tổng cộng</h5>
              <strong>{order.total_price}</strong>
            </div>
            <h2>Địa chỉ và thông tin giao hàng</h2>

            {order.user && (
              <>
                <p className="order-info">{order.user.user_address}</p>
                <p className="order-info">{order.user.user_city}</p>
                <p className="order-info">{order.user.user_full_name}</p>
                <p className="order-info">{order.user.user_phone_number}</p>
                {order.user.user_note && (
                  <p className="order-info">{order.user.user_note}</p>
                )}
              </>
            )}
          </section>
        </Wrapper>
      )}
    </>
  );
};
const Wrapper = styled.main`
  section {
    font-size: 0.9rem;
    margin-top: 24px;
    h2 {
      margin: 24px 0;
    }
    div {
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      align-items: center;
      border-bottom: 1px solid #cecece;
    }
    .order-heading {
      border-bottom: 2px solid #cecece;
    }
    .product-ordered {
      p {
        width: 250px;
        @media (min-width: 992px) {
          font-size: 1rem;
          width: 600px;
        }
      }
      span {
        font-weight: bold;
      }
    }
    .order-detail {
    }
    .order-info {
      margin-bottom: 8px;
    }
  }
  @media (min-width: 992px) {
    section {
      font-size: 1rem;
    }
  }
`;
export default ViewOrder;
