// import Button from "@mui/material";

import React, { useState } from "react";
import {  IconButton, Typography } from "@mui/material";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../features/CartSlice";
import AddToCartBtn from "./AddToCartBtn";
import { useNavigate } from "react-router";
import { Button, Popover } from "antd";
import { setCloseSignInFirstModal, setOpenSignInFirstModal } from "../../../../features/signInFirstModalSlice";
import { addBuyProducts } from "../../../../features/buySlice";
 

const FifthSPComponent = ({ stock }) => {
  //
  const cart = useSelector((store) => store.cart);
  const { signIn } = useSelector((store) => store.signIn);
  const { openModal } = useSelector((store) => store.signInFirstModal);
  const { product } = useSelector((store) => store.productDataSlice);
  // const buyProduct = useSelector((store) => store.buyProduct);
   const dispatch = useDispatch();
   const navigate = useNavigate();
  //  usestate
   const [loading, setLoading] = useState(false);
   const [openPopover, setOpenPopover] = useState(false);

  const [quantity, setQuantity] = useState(1);
// handlers
// popover handlers
const handleOpenChange = (newOpen) => {
  setOpenPopover(newOpen);
};

  const handleBuyBtn = () =>{
    if (signIn)
    {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(setCloseSignInFirstModal());
        dispatch(addBuyProducts({product:product, quantity:quantity}))
        navigate('/PlaceOrder')
    
        
      }, 2000);
    }
    else{
      dispatch(setOpenSignInFirstModal())
    }

  }
 
  
  
  return (
    <div className="d-flex  w-100 justify-content-center gap-4 mb-5  ">
      <div className="d-flex w-100  justify-content-around ">
        
       <div className="col-5  ">
        <AddToCartBtn/>
       </div>
       <Popover
      content={<div className="w-100 d-flex flex-column align-items-center ">
        <div><Button onClick={()=>setQuantity(quantity-1)} disabled={quantity===1} type="link">-</Button> <span>{quantity}</span><Button onClick={()=>setQuantity(quantity+1)} disabled={quantity===stock} type="link">+</Button> </div>
        <Button type="primary" onClick={handleBuyBtn} block loading={loading}>Buy</Button></div>}
      title="Set Quantity"
      trigger="click"
      open={openPopover}
      onOpenChange={handleOpenChange}
    >
        <Button 
        // onClick={handleBuyBtn}
          className="col-5"
          type="primary"
          style={{backgroundColor:'#31B769',height:'inherit'}}
          // loading={loading}
          
          startIcon={<AdsClickIcon />}
        >
          {" "}
          Buy Now
        </Button> 
        {/* buy modal */}
        </Popover>
      </div>
    </div>
  );
};

export default FifthSPComponent;
