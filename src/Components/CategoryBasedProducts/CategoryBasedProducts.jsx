import React, { useEffect, useState } from "react";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Styles from "./categoryBasedProducts.module.css";

//
import Pagination from "@mui/material/Pagination";
import ProductCard from "../HomePage/Products/ProductCard";
import fetchProducts from "../HomePage/Products/fetchProducts";
import Featured from "../HomePage/Home/HomeComponents/1Com_Featured";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import { addSortedProducts } from "../../features/sortSlice";
function CategoryBasedProducts() {
  const dispatch = useDispatch()
  const { category } = useSelector((store) => store.categories);
  const sort = useSelector((store) => store.sorted);
  const filter = useSelector((store) => store.filtered);
  const navigate = useNavigate();
  // fetcher

  const [state, setState] = useState(1);
  const { isLoading, err, product } = fetchProducts();

  if (err) return <h1> There was an Error getting {category} products...</h1>;
  if (isLoading)
    return (
      <Box sx={{ width: "100%", paddingTop: "90px" }}>
        <LinearProgress />
      </Box>
    );
  
  // counting matching products
  let count = 0;
  product.map((p) => {
    if (p.category === category) {
      count++;
    }
  });

  const noOfPages = Math.ceil(count / 8);
  const productsPerPage = 8;
  const lastIndex = state * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  return (
    <div
      style={{
        backgroundColor: "#F2F4F3",
        overflow: "hidden",
        paddingTop: "20px",
      }}
    >
      <div className="d-flex w-100 align-items-center justify-content-between mx-5">
        <IconButton onClick={() => navigate(-1)} size="large">
          <ArrowBackIosIcon style={{ paddingLeft: "10px" }} fontSize="large" />
        </IconButton>
        <h3>
          <b>{category.toUpperCase()}</b>
        </h3>
        <div></div>
      </div>
      <hr className="mx-5"></hr>

      {/* featured componnet */}
      <div>
        <Featured text={count - 1 + "+ items"} />
      </div>

      <div className={Styles.TrendingMainDiv}>
        {product.map((prod, ind) => {
          if (prod.category === category) {
            return (
              <div
                className={
                  Styles.TrendingProductDiv +
                  " col-12 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2 p-1 "
                }
              >
                <ProductCard product={prod} />
              </div>
            );
          }
        })}
      </div>
      {/* Pagination */}
      <div className="w-100 d-flex justify-content-center mb-5">
        <Pagination
          color="primary"
          variant="outlined"
          hidePrevButton
          hideNextButton
          onChange={(e) => setState(parseInt(e.target.textContent))}
          count={noOfPages}
        />
      </div>
    </div>
  );
}

export default CategoryBasedProducts;
