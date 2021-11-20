import React,{useRef} from "react";
import styled from "styled-components";
import { useCartContext } from "../contexts/cart_context";
import { useForm } from "react-hook-form";
import { NoCart, CheckoutInfo, CheckoutPrice } from "../components";
import { useEffect } from "react/cjs/react.development";
const CheckoutPage = () => {
  const { cart } = useCartContext();
  const formRef = useRef()
  const {
    register,
    formState: { errors },
    reset,
    formState,
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });
 
  if (cart.length === 0) {
    return <NoCart />;
  }
  return (
    <Wrapper>
      <section className="section-center">
        <CheckoutInfo ref={formRef} register={register} errors={errors}  />
        <CheckoutPrice ref={formRef}  handleSubmit={handleSubmit}/>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  section {
    margin-top: 32px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: minmax(350px,1fr);
    @media (min-width: 992px) {
      grid-template-columns: 3fr 2fr;
      grid-column-gap: 32px;
    }
  }
`;
export default CheckoutPage;
