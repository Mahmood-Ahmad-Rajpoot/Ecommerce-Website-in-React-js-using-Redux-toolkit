import React from "react";
import Styles from "./ShopPage.module.css";
import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompareIcon from "@mui/icons-material/Compare";
import Featured from "../../Home/HomeComponents/1Com_Featured";
import { CircularProgress } from "@mui/material";
//
import fetchProducts from "../../Products/fetchProducts";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SixthSPComponent = () => {
  // finding similar category products

  const { isLoading, err, product } = fetchProducts();
  const to_SimilarProduct = useSelector(
    (store) => store.productDataSlice.product
  );
  let similar =0;
  const checker = product.map((p) => {
    if (p.category === to_SimilarProduct.category) similar += 1;
  });

  const btnStyles = {
    backgroundColor: "white",
    color: "black",
    boxShadow: " 1px 1px 16px 0px rgba(0, 0, 0, 0.08)",
  };
  return (
    <div>
      <div style={{boxShadow: " 1px 1px 16px 0px rgba(0, 0, 0, 0.08)", backgroundColor:'#FFCCD5', }} className=" rounded-2 p-3 text-white mb-3">
        <h4 className={
          Styles.deliverIn
        }>Deliver in</h4>
        <h1 className={Styles.within24}>Within 24 Hours</h1>
      </div>

      <div className="d-flex w-100 justify-content-around mb-5">
        <Button
          className="col-5"
          style={btnStyles}
          startIcon={<VisibilityIcon fontSize="large" />}
        >
          {" "}
          View Similar
        </Button>
        <Button
          className="col-5"
          style={btnStyles}
          startIcon={<CompareIcon fontSize="large" />}
        >
          {" "}
          Compare
        </Button>
      </div>
      <h1>Similar To</h1>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Featured text={similar-1 + " +items"} />
      )}
    </div>
  );
};

export default SixthSPComponent;
