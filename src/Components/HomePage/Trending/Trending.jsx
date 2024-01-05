import React, { useEffect, useMemo, useState } from "react";
import fetchProducts from "../Products/fetchProducts";
import ProductCard from "../Products/ProductCard";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Styles from "./Trending.module.css";
import Featured from "../Home/HomeComponents/1Com_Featured";
//
import Pagination from "@mui/material/Pagination";
function Trending() {
  // fetcher

  const [state, setState] = useState(1);
  const { isLoading, err, product } = fetchProducts();

  useEffect(() => {}, []);
  if (err) return <h1> There was an Error getting Trending products...</h1>;
  if (isLoading)
    return (
      <Box sx={{ width: "100%", paddingTop: "90px" }}>
        <LinearProgress />
      </Box>
    );

    const productsPerPage = 9;
  const noOfPages = Math.ceil(product.length / productsPerPage);
  const lastIndex = state * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
 
  return (
    <div
      style={{
        backgroundColor: "#F2F4F3",
        overflow: "hidden",
        paddingTop: "90px",
      }}
    >
      {/* featured componnet */}
      <div>
        <Featured text={product.length - 1 + "+ items"} />{" "}
      </div>

      <div className={Styles.TrendingMainDiv}>
        {product.map((product, ind) => {
          if (ind >= firstIndex && ind < lastIndex) {
            return (
              <div
                className={
                  Styles.TrendingProductDiv +
                  " col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6   my-2 p-2 "
                }
              >
                <ProductCard product={product} />
              </div>
            );
          }
        })}
      </div>
      {/* Pagination */}
      <div className="w-100 d-flex justify-content-center mb-5">
        <Pagination color="primary" variant="outlined"  hidePrevButton hideNextButton
          onChange={(e) => setState(parseInt(e.target.textContent))}
          count={noOfPages}
        />
      </div>
    </div>
  );
}

export default Trending;
