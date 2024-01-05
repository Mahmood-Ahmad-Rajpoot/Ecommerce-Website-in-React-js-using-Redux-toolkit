import React, { useState } from "react";
import Styles from "./Cart.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {  IconButton, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";


import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const { cartItems, noOfItems, total } = cart;

  
  //  badge styles cart badge
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {/* 1st */}
      <div className="d-flex w-100 justify-content-between align-items-center px-5 py-2  ">
        <IconButton className=" " onClick={() => navigate(-1)} size="large">
          <ArrowBackIosIcon
            style={{ paddingLeft: "10px", color: "black" }}
            fontSize="large"
          />
        </IconButton>
        <Typography variant="h5" fontWeight={"600"}>
          Your Bag
        </Typography>
        <div>
          {" "}
          <StyledBadge badgeContent={noOfItems} color="primary" showZero>
            <ShoppingCartIcon />
          </StyledBadge>
        </div>
      </div>
      {(noOfItems===0  ? <EmptyCart/>
      :<CartItems/>)
      }

     
    </div>
  );
};

export default Cart;
