import React from "react";
import loadable from "@loadable/component";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";

import {
  LoadableMobileCategory,
  
  LoadableContact,
  LoadableIntroduction,
  LoadableProductPage,
  LoadableCartPage,
  LoadableSingleProductPage,
  LoadableHome,
  LoadableHeader,
  LoadableLoginForm,
} from "./loadables";


function App() {
  return (
    <Router>
      <LoadableLoginForm />
      <LoadableMobileCategory />
      <LoadableHeader />
      <Switch>
        <Route exact path="/" >
          <LoadableHome />
        </Route>
        <Route path="/contact">
          <LoadableContact title="LIÊN HỆ" />
        </Route>
        <Route path="/introduction">
          <LoadableIntroduction title="GIỚI THIỆU" />
        </Route>
        <Route path="/cua-hang" exact>
          <LoadableProductPage title="CỬA HÀNG" category="all" />
        </Route>
        <Route path="/cua-hang/san-pham-hot" exact>
          <LoadableProductPage title="SẢN PHẨM HOT" category="san-pham-hot" />
        </Route>
        <Route path="/cua-hang/dong-ho-nam">
          <LoadableProductPage title="ĐỒNG HỒ NAM" category="dong-ho-nam" />
        </Route>
        <Route path="/cua-hang/dong-ho-nu">
          <LoadableProductPage title="ĐỒNG HỒ NỮ" category="dong-ho-nu" />
        </Route>
        <Route path="/cua-hang/sale">
          <LoadableProductPage title="SALE" category="sale" />
        </Route>
        <Route path="/cua-hang/brands/rolex">
          <LoadableProductPage title="ROLEX" category="rolex" />
        </Route>
        <Route path="/cua-hang/brands/citizen">
          <LoadableProductPage title="CITIZEN" category="citizen" />
        </Route>
        <Route path="/cua-hang/brands/casio">
          <LoadableProductPage title="CASIO" category="casio" />
        </Route>
        <Route path="/cua-hang/san-pham/:id">
          <LoadableSingleProductPage />
        </Route>
        <Route path="/cart">
          <LoadableCartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
