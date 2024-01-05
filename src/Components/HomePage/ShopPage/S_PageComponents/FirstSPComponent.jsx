import React, { useEffect, useState } from "react";
import Styles from "./ShopPage.module.css";
//
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton,Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import SignInFirstModal from "../../../SignInFirstModal/SignInFirstModal";
import { setOpenSignInFirstModal } from "../../../../features/signInFirstModalSlice";
import { addFavouriteProduct, checkFavourite, removeFavouriteProduct } from "../../../../features/favouriteSlice";
import { HeartTwoTone, HeartFilled } from "@ant-design/icons";
  
const FirstComponent = ({product}) => {
  const dispatch = useDispatch();
  const { noOfItems } = useSelector((store) => store.cart);
  const { signIn } = useSelector((store) => store.signIn);
  const { openModal } = useSelector((store) => store.signInFirstModal);
   const navigate = useNavigate();
  // modal

  // handler
  const handleCart = () => {
    if (signIn) {
      navigate("/Cart");
    } else {
      dispatch(setOpenSignInFirstModal());
    }
  };
  // cart styles
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
// favourite handlers
 const { isFav } = useSelector((store) => store.favouriteProducts);
useEffect(() => {
  dispatch(checkFavourite({ id: product.id }));
}, []);
const icon = isFav.find((id) => id === product.id);

//handler

const handleFavourite = (id) => {
  if ( icon) {
    dispatch(removeFavouriteProduct({ id: id }));
  } else dispatch(addFavouriteProduct(product));
};
  return (
    <div className="d-flex w-100 justify-content-between">
      {openModal && <SignInFirstModal />}
      <IconButton onClick={() => navigate(-1)} size="large">
        {" "}
        <ArrowBackIosIcon style={{ paddingLeft: "10px" }} fontSize="large" />
      </IconButton>{" "}
      <div className="d-flex gap-3">
        <IconButton
          className=" "
          onClick={() => handleFavourite(product.id)}
          size="large"
        >
          {icon ? (
            <HeartFilled
              style={{
                color: "#d32f2f",
              }}
            />
          ) : (
            <HeartTwoTone twoToneColor="#d32f2f" />
          )}
        </IconButton>
        <IconButton onClick={handleCart} aria-label="cart">
          <StyledBadge badgeContent={noOfItems} color="primary" showZero>
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    </div>
  );
};

export default FirstComponent;
