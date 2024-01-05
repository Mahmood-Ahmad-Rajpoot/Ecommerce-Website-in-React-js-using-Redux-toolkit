import React, { useState } from "react";
import Styles from "./PlaceOrder.module.css";
import { Button, IconButton, Typography } from "@mui/material";
import Header from "./Header";
import Product from "./Product";
import OrderDetails from "./OrderDetails";
import { useSelector } from "react-redux";

const PlaceOrder = () => {
  // const location = useLocation();
  // // const {product, quantity} = location.state;
  // const receivedData = location.state && location.state.data;
// redux state 
const {product, quantity} = useSelector((store)=>store.buyProduct)
 
  return (
    <>
      <Header product={product} />
      <div className="p-2 d-flex flex-column align-items-center">
        {/* first component */}
        <Product product={product} quantity={quantity} />
        <OrderDetails price={product.price} quantity={quantity} />
      </div>
    </>
  );
};

export default PlaceOrder;
