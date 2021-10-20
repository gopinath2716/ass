import React from "react";
import "./Product.css";
import Menu1 from "./components/Menu1";
import ProductInfo from "./components/Product-info";

export default function App() {
  return (
    <div className="wrapper">
      <div className="product">
        <div className="menu1">
          <Menu1 />
        </div>
        <div className="product-info">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
}
