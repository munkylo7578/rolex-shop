import firebase from "../firebase";
import swal from "sweetalert";

const userRef = firebase.database().ref("Users");

export const registerAccount = (data, reset, setActiveForm) => {
  userRef.once("value", (snapshot) => {
    const users = snapshot.val();
    const userList = [];
    for (let id in users) {
      userList.push({ id, ...users[id] });
    }

    const tempUser = userList.find(
      (user) =>
        user.user_email === data.user_email && user.user_name === data.user_name
    );
    if (tempUser) {
      swal({
        title: "Thất bại!",
        text: "Email hoặc tên đăng nhập đã được sử dụng !",
        icon: "error",
        button: "ĐĂNG KÍ LẠI",
      });
    } else {
      userRef.push(data);
      swal({
        title: "Chúc mừng!",
        text: "Bạn đã đăng kí tài khoản thành công!",
        icon: "success",
        button: "ĐĂNG NHẬP",
      }).then(() => setActiveForm(0));
      reset();
    }
  });
};

export const handleLogin = (data, closeModal, login) => {
  console.log("testlogin");
  userRef.on("value", (snapshot) => {
    const users = snapshot.val();
    const userList = [];
    for (let id in users) {
      userList.push(users[id]);
    }
    const isInfoCorrect = userList?.find(
      (user) =>
        user.user_name === data.user_name &&
        user.user_password === data.user_password
    );

    if (isInfoCorrect) {
      swal({
        title: "Chúc mừng!",
        text: "Bạn đã đăng nhập thành công!",
        icon: "success",
        button: "tiếp tục mua hàng",
      })
        .then(login(isInfoCorrect, userList))
        .then(closeModal);
    } else {
      swal({
        title: "Thất bại!",
        text: "Tên đăng nhập hoặc mật khẩu chưa đúng!",
        icon: "error",
        button: "Nhập lại thông tin ",
      });
    }
  });
};
export const handleChangePassword = (data, currentUser) => {
  //Getting users from firebase
  userRef.on("value", (snapshot) => {
    const users = snapshot.val();
    const userList = [];
    //loop through users and remove id
    for (let id in users) {
      userList.push({ id, ...users[id] });
    }
    // if new password equal to old password
    if (data.new_password === data.current_password) {
      swal({
        title: "Thất bại!",
        text: "Mật khẩu mới trung với mật khẩu cũ !",
        icon: "error",
        button: "Thử lại",
      });
    }
    // if not go here
    else {
      // find user that want to change password
      const foundUser = userList.find((user) => user.user_name === currentUser);
      if (foundUser) {
        // if old password not correct
        if (foundUser.user_password !== data.current_password) {
          swal({
            title: "Thất bại!",
            text: "Mật khẩu hiên tại không đúng !",
            icon: "error",
            button: "Thử lại",
          });
        } else {
          // getting exact user that need to change password from firebase
          const passRef = firebase.database().ref("Users").child(foundUser.id);
          passRef.update({
            user_password: data.new_password,
          });
          swal({
            title: "Thành công!",
            text: "Bạn đã thay đổi mật khẩu thành công !",
            icon: "success",
            button: "Tiếp tục",
          });
        }
      }
    }
  });
};
