import React, { useState, useEffect } from "react";
import Styles from "./Cart.module.css";
import { Button, Rating, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../features/CartSlice";
import { message } from "antd";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CloseOutlined } from "@ant-design/icons";
 import { Link, useNavigate } from "react-router-dom";
import { addBuyProducts } from "../../features/buySlice";
import { setProduct } from "../../features/productPageDataSlice";
import { addFavouriteProduct, checkFavourite, removeFavouriteProduct } from "../../features/favouriteSlice";
import { HeartTwoTone, HeartFilled } from "@ant-design/icons";
const ItemStructure = ({product,quantity,ind}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((store) => store.cart);
    const { cartItems, noOfItems, total } = cart;
    // handler
    const handleViewProduct = (product, quantity) => {
      dispatch(addBuyProducts({ product: product, quantity: quantity }));
      dispatch(setProduct(product));
      navigate("/shopPage");
    };
    // message for removed items
   
    const [messageApi, contextHolder] = message.useMessage();
    const key = "updatable";
   
    const openMessage = (id) => {
      messageApi.open({
        key,
        type: "loading",
        content: " removing...",
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: "success",
          content: "Successfully removed...!",
          duration: 1,
        });
        dispatch(removeItem(id));
      }, 1000);
    };
// fav handler
const {isFav} = useSelector((store)=>store.favouriteProducts)
  
 useEffect(() => {
  dispatch(checkFavourite({ id: product.id }));
  
}, [  ]);
 
  //handler

const handleFavourite = (id) => {
  if (isFav.find((p)=>p===product.id)) {
      dispatch(removeFavouriteProduct({ id: id }));}
  else dispatch(addFavouriteProduct(product));
};

const icon = isFav.find((p)=>p===product.id)
   return (
    <div   className={Styles.itemContainer}>
      <div className="w-100 d-flex gap-3 align-items-center justify-content-end">
        <span>
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
        </span>
        <IconButton
          onClick={() => {
            openMessage(ind);
          }}
        >
          <CloseOutlined />
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
      <div className="col-12 d-flex gap-3  align-items-center  mb-3 ">
        <div className=" col-3 m-1 d-flex gap-2 align-items-baseline">
          <div>
            <b>Total: </b>
          </div>{" "}
          <div
            style={{
              fontSize: "15px",
              color: "grey",
              fontWeight: "600",
            }}
          >
            Rs.{product.price * quantity}
          </div>
        </div>

        {contextHolder}

        <div className="d-flex  align-items-center   ">
          <Button
            className="m-0"
            color="error"
            disabled={quantity === 1}
            onClick={() =>
              dispatch(addToCart({ product: product, quantity: -1 }))
            }
          >
            <RemoveIcon />
          </Button>
          <div className={Styles.footerQuantity}>{quantity}</div>
          <Button
            className="m-0"
            disabled={quantity === product.stock}
            onClick={() =>
              dispatch(addToCart({ product: product, quantity: 1 }))
            }
          >
            <AddIcon />
          </Button>
        </div>
         
      </div>
      <div className="col-12 justify-content-around d-flex  ">
          <Button
            className="col-4"
            onClick={() => handleViewProduct(product, quantity)}
          >
            View{" "}
          </Button>
          <Link className="col-8" to={"/PlaceOrder"}>
            <Button
              onClick={() =>
                dispatch(
                  addBuyProducts({
                    product: product,
                    quantity: quantity,
                    index: ind,
                  })
                )
              }
              fullWidth
              // className="col-6 m-1"
              variant="contained"
            >
              checkout
            </Button>
          </Link>
        </div>
    </div>
  );
};

export default ItemStructure;
