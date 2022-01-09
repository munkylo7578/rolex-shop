import React, { forwardRef } from "react";
import styled from "styled-components";

const CheckoutInfo = ({ register, errors }, formRef) => {
  return (
    <Wrapper className="checkout-information">
      <h2>THÔNG TIN THANH TOÁN</h2>
      <form ref={formRef}>
        <div className="form-control">
          <label htmlFor="">Họ và tên *</label>
          <input
            type="text"
            placeholder="Nguyễn văn A"
            {...register("user_full_name", )}
          />
          {errors.user_full_name && (
            <p className="error-message">{errors.user_full_name.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Địa chỉ *</label>
          <input
            type="text"
            name="user_address"
            {...register("user_address", {
              required: "Hãy nhập vào đây",
            })}
          />
          {errors.user_address && (
            <p className="error-message">{errors.user_address.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Tỉnh / Thành phố *</label>
          <input
            type="text"
            name="user_city"
            {...register("user_city", {
              required: "Hãy nhập vào đây",
            })}
          />
          {errors.user_city && (
            <p className="error-message">{errors.user_city.message}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="">Số điện thoại * </label>
          <input
            type="text"
            name="user_phone_number"
            placeholder="Ví dụ: 0346236036"
            {...register("user_phone_number", )}
          />
          {errors.user_phone_number && (
            <p className="error-message">{errors.user_phone_number.message}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="">Ghi chú đơn hàng (tùy chọn)</label>
          <textarea
            placeholder="Ghi chú về đơn hàng,ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
            name="user_note"
            {...register("user_note")}
          />
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.article`
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
        :focus {
          box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(248 183 66 / 60%);
        }
      }

      textarea {
        padding-top: 12px;
        height: 80%;
      }
    }
  }
`;
export default forwardRef(CheckoutInfo);
