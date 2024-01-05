import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import fetchProducts from "../../Products/fetchProducts";
import ProductCard from "../../Products/ProductCard";
import { CircularProgress } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const SeventhSPComponent = () => {
  const [page, setPage] = useState(1);
  // fetching similar products
  const { isLoading, err, product } = fetchProducts();
  const to_SimilarProduct = useSelector(
    (store) => store.productDataSlice.product
  );

  if (isLoading) return <CircularProgress color="secondary" />;
  if (err) return <h2>There was an error getting similar products...</h2>;
  const similarProducts = [];
  product.map((p, ind) => {
    if (p.category === to_SimilarProduct.category) {
      similarProducts.push(p);
    }
  });
   // pagination
  // const [page, setPage] = useState(1);

  const noOfPages = Math.ceil(similarProducts.length / 4);
  const productsPerPage = 4;
  const lastIndex = page * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  return (
    <>
      <div className="d-flex flex-wrap">
        {similarProducts.map((p, ind) => {
          if (ind >= firstIndex && ind < lastIndex)
            return (
              <div className="col-12 col-lg-3 col-md-4 col-sm-6 col-xs-12 p-1">
                <ProductCard key={ind} product={p} />
              </div>
            );
        })}
      </div>
      <div className="w-100 d-flex justify-content-center mb-5">
        <Pagination
          color="primary"
          variant="outlined"
          hidePrevButton
          hideNextButton
          onChange={(e) => setPage(parseInt(e.target.textContent))}
          count={noOfPages}
        />
      </div>
    </>
  );
};

export default SeventhSPComponent;
