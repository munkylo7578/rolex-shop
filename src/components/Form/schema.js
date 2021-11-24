import * as yup from "yup";

export const schemaRegister = yup
  .object({
    user_name: yup
      .string()
      .required()
      .matches(/^\S*$/, "Tên đăng nhập không hợp lệ")
      .min(3, "Tên đăng nhập phải dài ít nhất 3 kí tự")
      .max(20, "Tên đăng nhập dài tối da 20 kí tự"),

    user_email: yup
      .string()
      .email("Email không đúng định dạng")
      .required("Hãy nhập vào đây"),
    user_password: yup
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 kí tự")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Mật khẩu phải có ít nhất một chữ cái và một số"
      ),
    user_password_repeat: yup
      .string()
      .oneOf(
        [yup.ref("user_password"), null],
        "Mật khẩu nhập lại không trùng khớp"
      ),
  })
  .required();
export const schemaLogin = yup
  .object({
    user_name: yup
      .string()
      .required()
      .matches(/^\S*$/, "Tên đăng nhập không hợp lệ")
      .min(3, "Tên đăng nhập phải dài ít nhất 3 kí tự")
      .max(20, "Tên đăng nhập dài tối da 20 kí tự"),

    user_password: yup
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 kí tự")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Mật khẩu phải có ít nhất một chữ cái và một số"
      ),
  })
  .required();
