import React from "react";
import Styles from "./PlaceOrder.module.css";
import { Rating } from "@mui/material";
import { Select } from "antd";

const Product = ({ product, quantity }) => {
  // select value size or qty

  return (
    <div
      className={
        Styles.ProductToBuy + " col-lg-9 col-md-9 col-sm-12 col-12 mt-3 mb-2 "
      }
    >
      <div className="d-flex  mb-3">
        <div className={Styles.imageContainer + " col-5    m-3"}>
          <img
            className=" rounded-2 "
            src={product.images[0]}
            alt={product.title}
          />
        </div>

        <div className="col-6 mt-2">
          <h3 className="mt-3">
            <b>{product.title}</b>
          </h3>
          <div className="mt-3 mb-2 text-black text-justify">
            {product.description}
          </div>

          <div className=" d-flex gap-1 py-2">
            <div className={Styles.selectBoxesDiv + " px-2  rounded"}>
              Variations:
             
            <Select
                className={Styles.selectBtn}
                defaultValue="Red"
                bordered={false}
                style={{
                  width: 80,
                  fontWeight: 700,
                }}
                options={[
                  {
                    value: "red",
                    label: "Red",
                  },
                  {
                    value: "black",
                    label: "Black",
                  },
                  {
                    value: "Blue",
                    label: "blue",
                  },
                ]}
              />
            </div>
            <div className={Styles.selectBoxesDiv + " px-2  rounded"}>
              Quantity:
              <Select
                className={Styles.selectBtn}
                defaultValue={quantity}
                bordered={false}
                style={{
                  width: 55,
                }}
                options={[
                  {
                    value: quantity,
                    label: quantity,
                  },
                ]}
              />
            </div>
          </div>

          <div>
            Delivery By <b>10 May 2XXX </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
