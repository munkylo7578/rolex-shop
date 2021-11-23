import React from "react";
import { useUserContext } from "../contexts/user_context";
import styled from "styled-components";
import { Link,useHistory } from "react-router-dom";
const OrdersPage = () => {
  const { orders,isLogin } = useUserContext();
  const history = useHistory()
  if(!isLogin){
    history.push("/")
  }
  return (
    <Wrapper>
      <section className="section-center">
        <div className="order-list__heading">
          <h5>Ngày</h5>
          <h5>Tình trạng</h5>
          <h5>Tổng</h5>
          <h5>Thao tác</h5>
        </div>
        {orders.map((order) => {
          const { id, timeOrder, total_price } = order;
          return (
            <div className="order-item">
              <p>{timeOrder}</p>
              <p>Đang xử lí</p>
              <strong>{total_price}</strong>
              <Link className="primary-btn" to={`/tai-khoan/orders/view-order/${id}`}>Xem</Link>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    font-size: 0.8rem;
    margin-top: 24px;
    .order-list__heading {
      display: grid;
      grid-template-columns: auto 80px 70px 60px; 
      grid-column-gap: 10px;
      padding-bottom: 4px;
      margin-bottom: 16px;
      border-bottom: 2px solid #cecece;
      h5:last-child {
        justify-self: end;
      }
    }
    .order-item {
      display: grid;
      grid-template-columns: auto 80px 80px 50px;
      grid-template-rows: 20px;
      grid-column-gap: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid #cecece;
      padding-bottom: 20px;
      align-items: center;
      strong{

      }
      a {
        text-align: center;
        display: inline-block;
        display: block;
        padding: 2px 0;
     
      }
    }
    @media(min-width: 662px){
        font-size: 1rem;
        .order-list__heading{
            grid-template-columns: auto 130px 130px 60px;
        }
        .order-item{
            grid-template-columns: auto 130px 130px 60px;
        }
    }
    @media(min-width: 992px){
        font-size: 1rem;
        .order-list__heading{
            grid-template-columns: auto 260px 250px 80px;
            h5{
                font-size: 1rem;
            }
        }
        .order-item{
            grid-template-columns:  auto 260px 260px 70px;
        }
    }
  }
`;
export default OrdersPage;
