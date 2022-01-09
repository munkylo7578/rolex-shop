import {
  ADD_TO_CART,
  CAlCULATE_AMOUNT,
  CLEAR_CART,
  REMOVE_CART,
  TOGGLE_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if(action.type === CLEAR_CART){
    return {
      ...state,
      cart:[]
    }
  }
  if (action.type === TOGGLE_AMOUNT) {
    const { id, type } = action.payload;
    const tempCart = state.cart.map((item) => {
      let tempAmount = item.amount;
      if (item.id === id && type === "inc") {
        tempAmount = tempAmount + 1;
        if (tempAmount > item.max) {
          tempAmount = item.max;
        }
      }
      if (item.id === id && type === "dec") {
        tempAmount = tempAmount - 1;
        if (tempAmount < 1) {
          tempAmount = 1
       
        }
      }
      return { ...item, amount: tempAmount };
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === CAlCULATE_AMOUNT) {
    
    const { total_item, total_price } = state.cart.reduce(
      (total, item) => {
        total.total_item += item.amount;
        total.total_price += item.amount * item.price;
        return total;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return { ...state, total_item, total_price }
  }
  if (action.type === REMOVE_CART) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: [...tempCart] };
  }
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
        max: stock,
      };
      return { ...state, cart: [...state.cart, tempProduct] };
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
