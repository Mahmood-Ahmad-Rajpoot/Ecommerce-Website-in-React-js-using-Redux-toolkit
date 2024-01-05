import React from "react";
import Styles from "./Shipping.module.css";
const ShippingDetails = ({price, quantity}) => {
  return (
    <div className="col-12 d-flex flex-column gap-4  align-items-center ">
      <div className="col-12 col-lg-8 col-md-10 col-sm-12 px-4">
        <div className=" col-12 mb-4 d-flex justify-content-between align-items-center">
          <span className={Styles.textField}>Product Price</span>
          <span className={Styles.textField}>{price}</span>
        </div>
        <div className=" col-12 mb-4 d-flex justify-content-between align-items-center">
          <span className={Styles.textField}>Items</span>
          <span className={Styles.textField}>{quantity}</span>
        </div>
        <div className=" col-12 mb-4 d-flex justify-content-between align-items-center">
          <span className={Styles.textField}>Shipping</span>
          <span className={Styles.textField}>Free</span>
        </div>
        <div className=" col-12 mb-2 d-flex justify-content-between align-items-center">
          <span className={Styles.textField + " text-black"}>Total</span>
          <span className={Styles.textField + " text-black"}>{price*quantity}</span>
        </div>
        <hr style={{ borderTop: "2px solid black" }} className="col-12"></hr>
      </div>
    </div>
  );
};

export default ShippingDetails;
