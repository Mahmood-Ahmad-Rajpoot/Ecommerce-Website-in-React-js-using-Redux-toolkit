import React from "react";
import { Typography } from "@mui/material";
import ShippingHeader from "./ShippingHeader";
import ShippingDetails from "./ShippingDetails";
import Payment from "./Payment";
import { useSelector } from "react-redux";
 

const Shipping = () => {
const {product, quantity} = useSelector((store)=>store.buyProduct)

  // info message

  return (
    <div>
        <ShippingHeader/>
      
      <hr className="my-5"></hr>
      <ShippingDetails price={product.price} quantity={quantity}/>
      <Payment/>
    </div>
  );
};

export default Shipping;
