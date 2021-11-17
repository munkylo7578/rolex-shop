import React from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { useProductsContext } from "../../contexts/products_context";
const Login = () => {
    const { closeModal } = useProductsContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Chúc mừng!",
      text: "Bạn đã đăng nhập thành công!",
      icon: "success",
      button: "tiếp tục mua hàng"
    }).then(closeModal);
 
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
      <div className="form-control">
        <label htmlFor="">Mật khẩu</label>
        <input type="text" />
      </div>
      <button type="submit" className="primary-btn">
        ĐĂNG NHẬP
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.form``;
export default Login;
