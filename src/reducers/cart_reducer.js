import { ADD_TO_CART } from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { image, amount, id, price, name, stock } = action.payload;

    const tempItem = state.cart.find((item) => item.id === image + id);
    if (tempItem) {
      const tempArray = state.cart.map((item) => {
        if (item.id === tempItem.id) {
          let newAmount = item.amount + amount;
          if (newAmount > stock) {
            newAmount = stock;
          }
          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });
      return { ...state, cart: [...tempArray] };
    } else {
      const tempProduct = {
        id: image + id,
        amount,
        price,
        name,
        image,
      };
      return { ...state, cart: [...state.cart, tempProduct] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
