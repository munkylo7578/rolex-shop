import React from 'react'
import styled from "styled-components"
import { useCartContext } from '../contexts/cart_context';
import { formatPrice } from '../utils/helper';
const CartItem = () => {
    const { cart, removeCart,toggleAmount } = useCartContext();
    return (
        <>
        {cart.map((item, index) => {
            const { price, amount, id, name, image } = item;
            return (
              <Wrapper key={id}>
                <div
                  onClick={() => removeCart(id)}
                  className="remove-cart-item"
                >
                  <button>X</button>
                </div>
                <img src={image} alt={name} />
                <div className="cart-item__name">
                  <p>{name}</p>
                  <div className="mobile-cart-item__price">
                    <span>{amount} x</span>{" "}
                    <strong>{formatPrice(price)}</strong>
                  </div>
                </div>
                <strong className="cart-item__price">
                  {formatPrice(price)}
                </strong>
                <div className="cart-item__amount">
                  <button onClick={()=>toggleAmount(id,"dec")}>-</button>
                  <span>{amount}</span>
                  <button onClick={()=>toggleAmount(id,"inc")}>+</button>
                </div>
                <strong className="cart-item__total-price">
                  {formatPrice(amount * price)}
                </strong>
              </Wrapper>
            );
          })}
        </>
    )
}
const Wrapper = styled.div`
    
        padding-top: 12px;
        display: grid;
        grid-template-columns: 15px 100px minmax(150px,270px) auto;
        align-items: center;
        border-bottom: 1px solid #ececec;
        padding-bottom: 12px;

        .remove-cart-item {
          position: relative;
          button {
            position: absolute;
            top: -40px;
            left: 0;
            border-radius: 50%;
            background-color: transparent;
            color: #ccc;
            border: 2px solid #ccc;
            padding: 1px 5px;
            transition: all 0.2s ease-in;
            font-weight: 540;
            :hover {
              border-color: black;
              color: black;
              cursor: pointer;
            }
            @media(min-width: 662px){
              top: -15px;
              left: -2px;
            }
          }
          
        }
        img {
          height: 80px;
          width: 80px;
        }
        .cart-item__name {
          p,
          .mobile-cart-item__price {
            font-size: 0.8rem;
            line-height: 1.7;
          }
          p,
          span {
            color: #353535;
          }
        }
        .cart-item__price {
          display: none;
        }
        .cart-item__amount {
          justify-self: end;
          display: flex;
          button {
            padding: 2px 6px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            transition: all 0.3s ease-out;
            :hover {
              background-color: #b8b8b8;
              cursor: pointer;
            }
          }
          span {
            background-color: #fff;
            display: block;
            padding: 6px 8px;
            border: 1px solid #ccc;
          }
        }
        .cart-item__total-price {
          display: none;
        }

        @media (min-width: 662px) {
          grid-template-columns: 20px 75px auto 120px 80px 120px;
          .cart-item__price,
          .cart-item__total-price {
            display: block;
            font-size: 0.9rem;
          }
          .cart-item__total-price {
            justify-self: end;
          }
          .cart-item__amount {
            justify-self: stretch;
          }
          .mobile-cart-item__price {
            display: none;
          }
        }
       
      
`
export default CartItem
