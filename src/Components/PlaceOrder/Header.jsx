import React, { useEffect, useState } from "react";
import { IconButton, Typography } from "@mui/material";

import { HeartTwoTone, HeartFilled } from "@ant-design/icons";

import ExitButton from "../ExitButton/ExitButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteProduct,
  checkFavourite,
  removeFavouriteProduct,
} from "../../features/favouriteSlice";

const Header = ({ product }) => {
  const dispatch = useDispatch();
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
    <div className="d-flex justify-content-between align-items-center mx-5   my-3">
      <ExitButton />
      <Typography variant="h5" fontWeight={"600"}>
        Place Order
      </Typography>
      <IconButton className=" " onClick={()=>handleFavourite(product.id)} size="large">
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
    </div>
  );
};
export default Header;
