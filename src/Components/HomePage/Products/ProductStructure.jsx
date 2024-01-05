import React from "react";
import Styles from "./ProductStructure.module.css";
import fetchProducts from "./fetchProducts";

// MATERIAL UI
import { Grid } from "@mui/material";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";
const ProductStructure = ({ discount }) => {
  // products fetcher
  const { isLoading, product, err } = fetchProducts();
  if (err)
  return (
    <div
      style={{ cursor: "pointer" }}
      className="d-flex w-100 justify-content-center gap-2 bg-white"
    >
      <h5>Something went wrong while loading products</h5>{" "}
      <RotateLeftOutlinedIcon  />
    </div>
  );

  return isLoading ? (
    <Box sx={{ display: "flex", width: "90%", justifyContent: "center" }}>
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    <>
      <div
        id={Styles.MainDivProductStruct}
        className="d-flex align-items-center"
      >
        <span className={Styles.span2}>
          <Fab
            sx={{ paddingLeft: 1 }}
            color="secondary"
            onClick={() => {
              document.getElementById("scroller").scrollLeft -= 250;
            }}
          >
            <ArrowBackIosIcon />
          </Fab>
        </span>
        <div id="scroller" className={Styles.MainProductStructure + "  p-1"}>
          <Grid
            container
            style={{ width: "100%", flexWrap: "nowrap" }}
            spacing={1}
          >
            {product.map((data, ind) => {
              if (data.discountPercentage > parseInt(discount)) {
                return (
                  <Grid
                  key={ind}
                    item
                    sx={{ height: "400px" }}
                    className="col-3"
                    xs={6}
                    sm={6}
                    md={4}
                    lg={3}
                  >
                    <ProductCard product={data} />
                  </Grid>
                );
              }
            })}
          </Grid>
        </div>
        <span className={Styles.span}>
          <Fab
            color="secondary"
            onClick={() => {
              document.getElementById("scroller").scrollLeft += 250;
            }}
          >
            <ArrowForwardIosIcon />
          </Fab>
        </span>
      </div>
    </>
  );
};

export default ProductStructure;
// materil
