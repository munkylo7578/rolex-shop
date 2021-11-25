import * as yup from "yup";

export const schemaRegister = yup
  .object({
    user_name: yup
      .string()
      .required("Hãy nhập vào đây")
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
      .required("Hãy nhập vào đây")
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
const phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
export const schemaContact = yup
  .object({
    user_full_name: yup
      .string()
      .required("Hãy nhập vào đây")
      .matches(
        /(?!\s+$)[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/,
        "Tên đăng nhập không hợp lệ"
      )
      .min(5, "Họ và tên phải dài ít nhất 5 kí tự")
      .max(20, "Họ và tên dài tối da 20 kí tự"),

    user_email: yup
      .string()
      .email("Email không đúng định dạng")
      .required("Hãy nhập vào đây"),
    user_phone_number: yup
      .string()
      .required("Hãy nhập vào đây")
      .matches(phoneRegex, "Số điện thoại sai định dạng"),
    user_message: yup
      .string()
      .matches(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Nội dung không hợp lệ")
      .required("Hãy nhập vào đây"),
  })
  .required();

export const schemaCheckout = yup
  .object({
    user_full_name: yup
      .string()
      .required("Hãy nhập vào đây")
      .matches(
        /(?!\s+$)[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/,
        "Tên đăng nhập không hợp lệ"
      )
      .min(5, "Họ và tên phải dài ít nhất 5 kí tự")
      .max(20, "Họ và tên dài tối da 20 kí tự"),

    user_phone_number: yup
      .string()
      .required("Hãy nhập vào đây")
      .matches(phoneRegex, "Số điện thoại sai định dạng"),
  })
  .required();


  export const schemaPassword = yup
  .object({
   
    
    current_password: yup
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 kí tự")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Mật khẩu phải có ít nhất một chữ cái và một số"
      ),
      new_password: yup
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 kí tự")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Mật khẩu phải có ít nhất một chữ cái và một số"
      ),
      repeat_new_password: yup
      .string()
      .oneOf(
        [yup.ref("new_password"), null],
        "Mật khẩu nhập lại không trùng khớp"
      ),
  })
  .required();


