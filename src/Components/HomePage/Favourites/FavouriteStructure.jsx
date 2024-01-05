import React, { useState, useEffect } from "react";
import Styles from "./Favourite.module.css";
import { Button, Rating, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CloseOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { setProduct } from "../../../features/productPageDataSlice";
import {
  addFavouriteProduct,
  checkFavourite,
  removeFavouriteProduct,
} from "../../../features/favouriteSlice";
import { HeartTwoTone, HeartFilled } from "@ant-design/icons";
const FavouriteStructure = ({ product, ind }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);

  const { cartItems, noOfItems, total } = cart;
  // handler
  const handleViewProduct = (product) => {
    dispatch(setProduct(product));
    navigate("/shopPage");
  };
  // message for removed items

  // fav handler

  useEffect(() => {
    dispatch(checkFavourite({ id: product.id }));
  }, []);
  const { isFav } = useSelector((store) => store.favouriteProducts);

  //handler

  const handleFavourite = (id) => {
    if (isFav.find((p) => p === product.id)) {
      dispatch(removeFavouriteProduct({ id: id }));
    } else dispatch(addFavouriteProduct(product));
  };

  const icon = isFav.find((p) => p === product.id);

  return (
    <div className={Styles.itemContainer}>
      <div className="w-100 d-flex gap-3 align-items-center justify-content-end">
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
      </div>
      <div className="d-flex mb-3">
        <div className={Styles.imageContainer + " col-4 mx-3 my-1"}>
          <img className="col-5" src={product.images[0]} alt={product.title} />
        </div>

        <div className="col-7 mt-2 ">
          <h4 className="mt-3 mb-3">
            <b>{product.title}</b>
          </h4>

          <h6 className="mb-3">
            Variations:
            <span className="border rounded-2  px-2 py-1 mx-1">none</span>
          </h6>
          <div className="d-flex align-items-baseline mb-3  ">
            <span className={Styles.spanDiv}>{product.rating}</span>
            <Rating size="small" value={product.rating} />
          </div>
          <div className={Styles.priceMainDiv + " d-flex gap-3 col-12"}>
            <div className="d-flex justify-content-center align-items-center  border rounded col-4">
              <b>Rs. {product.price}</b>
            </div>
            <div className={Styles.discountPrice + "col-6"}>
              <p className="text-danger m-0">
                upto {product.discountPercentage}% off{" "}
              </p>
              <h6 className={Styles.actualPrice}>
                Rs.
                {Math.ceil((product.discountPercentage / 100) * product.price) +
                  product.price}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          Styles.footer +
          " d-flex px-4  justify-content-between align-items-center "
        }
      ></div>
       
        <div className="col-12 px-5 d-flex justify-content-center  ">
          <Button
            fullWidth
            // variant="outlined"
             onClick={() => handleViewProduct(product)}
          >
            View{" "}
          </Button>
        </div>
       
    </div>
  );
};

export default FavouriteStructure;

//
