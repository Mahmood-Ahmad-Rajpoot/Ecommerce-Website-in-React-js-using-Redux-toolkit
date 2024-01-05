import React  from "react";
import Styles from "./Orders.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {  IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import {   useSelector } from "react-redux";
import OrderItems from "./OrderItems";
import EmptyOrders from "./EmptyOrders";
  
  
const Cart = () => {
  const {products} = useSelector((store) => store.orders);
 
   

  const navigate = useNavigate();
  return (
    <div style={{marginTop:'90px'}} className="bg-white">
      
      {(products.length === 0  ? <EmptyOrders/>
      :<OrderItems/>)
      }

     
    </div>
  );
};

export default Cart;
