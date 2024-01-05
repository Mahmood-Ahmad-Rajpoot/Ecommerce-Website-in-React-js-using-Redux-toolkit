import React, { useState } from "react";
import { Select, Space } from "antd";
 import { useDispatch, useSelector } from "react-redux";
  
import { Link } from "react-router-dom";
import { categoryProducts } from "../../../features/CategoriesSlice";
import fetchProducts from "../Products/fetchProducts";
const FilterButton = () => {
    const dispatch = useDispatch();

    // categoriesb based
    const { isLoading, product, err } = fetchProducts();
    const [state, setState] = useState(true);
    let categories = [];
    const res = product.map((p, ind) => {
      if (ind === 0) {
        categories = [...categories, { name: p.category, image: p.images[0] }];
      } else {
        const found = categories.find((cat) => p.category === cat.name);
        if (!found) {
          categories = [...categories, { name: p.category, image: p.images[0] }];
        }
      }
    });
  


    // handlers
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  return (
    <div>Filter{" "}
    <Select
      defaultValue="none"
      style={{
        width: 120,
        margin: " 0 10px 0 5px",
      }}
      onChange={handleChange}
      options={categories.map((item, ind) => {
        const { name, image } = item;
        return { value: name, label: name };
      })}
    /></div>
  )
}

export default FilterButton