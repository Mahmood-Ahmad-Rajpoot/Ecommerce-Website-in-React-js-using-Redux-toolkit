import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./Orders.module.css";
import { Button, Rating } from "@mui/material";
import { setProduct } from "../../features/productPageDataSlice";
import { useNavigate } from "react-router";
   
const OrderItems = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
  const { products } = useSelector((store) => store.orders);
//   handlers
const handleViewProduct=(product)=>{
    dispatch(setProduct(product));
    navigate('/shopPage')

}
  return (
    <div className="d-flex flex-column col-12 align-items-center">
        <h2 className="mt-3 "> <b>  Orders({products.length})</b> </h2>
      {products.map((p, ind) => {
        const { product, quantity } = p;
        return (
          <div onClick={()=>handleViewProduct(product)} key={ind} className={Styles.itemContainer + ' col-12 col-lg-8 col-md-10 col-sm-12 mt-3'}>
            <div className="d-flex mb-3">
              <div className={Styles.imageContainer + " col-4 mx-3 my-1"}>
                <img
                  className="col-5"
                  src={product.images[0]}
                  alt={product.title}
                />
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
                      {Math.ceil(
                        (product.discountPercentage / 100) * product.price
                      ) + product.price}
                    </h6>
                  </div>
                </div>
                <div className=" d-flex mt-3 align-items-center text-secondary">
                  <b>
                    Quantity:</b>
                     
                     <span className="mx-5">{quantity} </span>
                      

                  
                    
                  
                </div>
              </div>
            </div>

            <div
              className={
                Styles.footer +
                " d-flex px-4  justify-content-between align-items-center "
              }
            ></div>
            <div className="col-12 mb-2 d-flex justify-content-around align-items-center gap-1">
              <div className=" col-3 m-1 d-flex gap-2 align-items-baseline">
                 
                  <b>Total: </b>
                 
                <div
                  style={{ fontSize: "15px", color: "grey", fontWeight: "600" }}
                >
                  Rs.{product.price * quantity}
                </div>
              </div>
              <div className="col-6"> <Button
                 
                 fullWidth
                 variant="contained"
               >
                 TracK Package
               </Button></div>

             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderItems;
