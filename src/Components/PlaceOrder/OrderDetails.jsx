import React, { useState } from "react";
import Styles from "./PlaceOrder.module.css";
import { couponIcon } from "../../assets";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const OrderDetails = ({ price, quantity }) => {
  const [coupon, setCoupon] = useState({
    apply: "Apply",
    display: "none",
    field: false,
  });
  const couponHandler = () => {
    if (coupon.field === false)
      setCoupon({ apply: "Cancel", display: "block", field: true });
    else setCoupon({ apply: "Apply", display: "none", field: false });
  };
  return (
    <div className="col-lg-9 col-md-9 col-sm-12 col-12 mt-3">
      {/* coupon  */}
      <div  className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex gap-2  align-self-center align-items-center m-1">
          <img className="" src={couponIcon} style={{ width: "25px" }} />

          <Typography variant="h6" fontWeight={"600"}>
            Apply Coupon
          </Typography>
        </div>

        <Button
          onClick={couponHandler}
          className="col-xs-2 col-sm-2 col-md-2 col-lg-2 "
          variant="contained"
          color="error"
          sx={{ fontWeight: "700" }}
        >
          {coupon.apply}
        </Button>
      </div>
      <TextField
        focused
        fullWidth
        style={{ display: coupon.display }}
        className=" active col-xs-10  col-sm-10 col-md-10  col-lg-5 "
      ></TextField>
      <hr className=""></hr>

      {/* Order payment details  */}

      <div className="mt-5 mb-5">
        <Typography variant="h6" fontWeight={"600"}>
          Order Payment Details
        </Typography>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <Typography fontWeight={"400"} variant="h6">
            Order Amount
          </Typography>
          <Typography fontWeight={"400"} variant="h6">
            Rs.<b> {price}</b>
          </Typography>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="d-flex gap-2">
            <Typography fontWeight={"400"} variant="h6">
              Convenience
            </Typography>
            <Button sx={{ fontWeight: "600",color:'#F83758' }}>
              Know more
            </Button>
          </div>
          <Button sx={{ fontWeight: "600", color: "red" }}>Apply coupon</Button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <Typography fontWeight={"400"} variant="h6">
            Delivery
          </Typography>
          <Typography fontWeight={"400"} sx={{color:'#F83758'}} variant="h6">
            <b> Free</b>
          </Typography>
        </div>
      </div>
      <hr />
      <div className="d-flex  justify-content-between align-items-center mt-5 mb-5">
        <Typography variant="h6" fontWeight={"600"}>
          Order Total
        </Typography>
        <Typography fontWeight={"400"} variant="h6">
          Rs.<b> {price * quantity}</b>
        </Typography>
      </div>
      <div className="d-flex gap-2">
        <Typography fontWeight={"400"} variant="h6">
          EMI Available
        </Typography>
        <Button sx={{ fontWeight: "600", color:'#F83758' }}  >
          Details
        </Button>
      </div>
      <hr />
      <Footer total={price * quantity}/>
    </div>
  );
};

export default OrderDetails;
