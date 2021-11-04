import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Sidebar, Modal, Footer, MobileCategory } from "./components";
import { Home, Contact, Introduction, ProductPage,SingleProductPage,CartPage } from "./pages";

function App() {
  return (
    <Router>
      <Modal />
      <Sidebar />
      <MobileCategory />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact title="LIÊN HỆ" />
        </Route>
        <Route path="/introduction">
          <Introduction title="GIỚI THIỆU" />
        </Route>
        <Route path="/cua-hang" exact>
          <ProductPage title="CỬA HÀNG" category="all" />
        </Route>
        <Route path="/cua-hang/san-pham-hot" exact>
          <ProductPage title="SẢN PHẨM HOT" category="san-pham-hot" />
        </Route>
        <Route path="/cua-hang/dong-ho-nam">
          <ProductPage title="ĐỒNG HỒ NAM" category="dong-ho-nam" />
        </Route>
        <Route path="/cua-hang/dong-ho-nu">
          <ProductPage title="ĐỒNG HỒ NỮ" category="dong-ho-nu" />
        </Route>
        <Route path="/cua-hang/sale">
          <ProductPage title="SALE" category="sale" />
        </Route>
        <Route path="/cua-hang/brands/rolex">
          <ProductPage title="ROLEX" category="rolex" />
        </Route>
        <Route path="/cua-hang/brands/citizen">
          <ProductPage title="CITIZEN" category="citizen" />
        </Route>
        <Route path="/cua-hang/brands/casio">
          <ProductPage title="CASIO" category="casio" />
        </Route>
        <Route path="/cua-hang/san-pham/:id">
          <SingleProductPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
