import React, { useState } from "react";
import { Select, Space } from "antd";
 
import { useDispatch, useSelector } from "react-redux";
 import { Link } from "react-router-dom";
 import { categoryProducts } from "../../../features/CategoriesSlice";
import fetchProducts from "../Products/fetchProducts";
const SortButton = () => {


    // handlers
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  return (
    <div> Sort{" "}
    <Select
      defaultValue="none"
      style={{
        width: 120,
        margin: " 0 10px 0 5px",
      }}
      onChange={handleChange}
      options={[
        {
          value: "priceLow",
          label: "Low Prices  ",
        },
        {
          value: "PriceHigh",
          label: "High Prices  ",
        },
        
      ]}
    /></div>
  )
}

export default SortButton