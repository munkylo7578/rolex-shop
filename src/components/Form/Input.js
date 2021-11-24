export const EmailInput = ({ register }) => {
  return <input
  type="email"
  name="user_email"
  placeholder="Email"
  {...register("user_email")}
/>
};
export const  NameInput = ({ register }) => {
    return <input
    type="text"
    name="user_name"    
    placeholder="Tên đăng nhập"
    {...register("user_name")}
  />
  };
  export const  PasswordInput = ({ register }) => {
    return <input
    type="password"
    name="user_password"
    {...register("user_password")}
  />
  };
  export const  PasswordRepeatInput = ({ register }) => {
    return <input
    name="user_password_repeat"
    type="password"
    {...register("user_password_repeat")}
  />
  };
  
