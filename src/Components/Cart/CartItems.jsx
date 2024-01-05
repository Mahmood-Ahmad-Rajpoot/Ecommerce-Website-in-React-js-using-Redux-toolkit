import React, { useState } from "react";
import Styles from "./Cart.module.css";
import { Button, Rating, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../features/CartSlice";
import { message } from "antd";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CloseOutlined } from "@ant-design/icons";
import CLearCartModal from "./CLearCartModal";
import { Link, useNavigate } from "react-router-dom";
import { addBuyProducts } from "../../features/buySlice";
import { setProduct } from "../../features/productPageDataSlice";
import ItemStructure from "./ItemStructure";

const CartItems = () => {
   
  const { cartItems, noOfItems, total } = useSelector((store) => store.cart);
 
  // handler
 
  // message for removed items
 
  
 
  

  return (
    <div className="d-flex flex-column align-items-center ">
      <div
        className={
          Styles.cartItemsBox + " col-lg-7 col-md-8 col-sm-12 col-12 mt-1 p-1"
        }
      >
        <div className="">
          <h5 className="align-self-start ">
            <b>Shopping List</b>
          </h5>
        </div>

        {cartItems.map((p, ind) => {
          const { product, quantity } = p;
          return (
            <ItemStructure key={ind} product={product} quantity={quantity} ind={ind}/>
          );
        })}
      </div>

      <div className="col-8 d-flex flex-column align-items-center">
        <div className="col-11 d-flex justify-content-between my-3">
          <div>
            <b>Cart Total:</b>
          </div>{" "}
          <div>
            <b>{total}</b>
          </div>{" "}
        </div>
        <CLearCartModal />
      </div>
    </div>
  );
};

export default CartItems;
