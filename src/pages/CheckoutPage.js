import React,{useRef} from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import {  CheckoutInfo, CheckoutPrice } from "../components";

import { useHistory } from "react-router";
import { useUserContext } from "../contexts/user_context";
import { schemaCheckout } from "../components/Form/schema";
import { yupResolver } from "@hookform/resolvers/yup";
const CheckoutPage = () => {

  const { isLogin } =useUserContext()
  const history = useHistory()
  const formRef = useRef()
  const {
    register,
    formState: { errors },
   
    handleSubmit,
  
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaCheckout)
  });
  if(!isLogin){
    history.push("/")
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
