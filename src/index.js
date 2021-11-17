import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./contexts/products_context";
import { FilteredProvider } from "./contexts/filtered_context";
import { CartProvider } from "./contexts/cart_context";
import { UserProvider } from "./contexts/user_context";
ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilteredProvider>
        <CartProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartProvider>
      </FilteredProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
