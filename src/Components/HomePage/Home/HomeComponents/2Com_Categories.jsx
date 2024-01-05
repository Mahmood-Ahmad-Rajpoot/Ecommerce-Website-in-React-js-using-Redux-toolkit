import React, { useEffect, useState } from "react";
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "../../../../assets";
import Styles from "./Home.module.css";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import { categoryProducts } from "../../../../features/CategoriesSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchProducts from "../../Products/fetchProducts";
import { Link } from "react-router-dom";
// const categories = [
//   { name: "Beauty", image: cat1 },
//   { name: "Fashion", image: cat2 },
//   { name: "Women", image: cat3 },
//   { name: "Gents", image: cat4 },
//   { name: "Kids", image: cat5 },
//   { name: "New", image: cat6 },
//   { name: "New", image: cat6 },
// ];

const Categories = () => {
  // redux
  const dispatch = useDispatch();
  const gets = useSelector((store) => store.categories);

  //
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

  

  if (err)
    return (
      <div onClick={()=>setState(!state)}
        style={{ cursor: "pointer" }}
        className="d-flex w-100 justify-content-center gap-2 bg-white"
      >
        <h5 >Categories</h5>{" "}
        <RotateLeftOutlinedIcon   />
      </div>
    );

  return isLoading ? (
    <Box sx={{ display: "flex", width: "90%", justifyContent: "center" }}>
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    // Sort and filter
    <>
      {/* categories */}
      <div className={Styles.ScrollContainerCategories}>
        <div
          id={Styles.CategoryParentDiv}
        
        >
          {categories.map((item,ind) => {
            const { name, image } = item;
            return (
              <Link key={ind} style={{textDecoration:'none'}} to="/CategoryBasedProducts">
              <div
                className="col-lg-3 col-md-4 col-sm-4 "
                id={Styles.CategoryCircleDiv}
                onClick={() => dispatch(categoryProducts(name))}
              >
                <img
                  style={{ borderRadius: "50%", width: "7vw", height: "7vw" }}
                  src={image}
                  
                />

                <p className="p-0 m-0">{name}</p>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;

// card
