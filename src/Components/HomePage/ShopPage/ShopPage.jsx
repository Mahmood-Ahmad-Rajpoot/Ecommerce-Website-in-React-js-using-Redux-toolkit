import React from "react";
import FirstComponent from "./S_PageComponents/FirstSPComponent";
import SecondComponent from "./S_PageComponents/SecondSPComponent";
import Styles from "./S_PageComponents/ShopPage.module.css";
import ThirdComponent from "./S_PageComponents/ThirdSPComponent";
import { useDispatch, useSelector } from "react-redux";
import FourthComponent from "./S_PageComponents/FourthSPComponent";
import FifthSPComponent from "./S_PageComponents/FifthSPComponent";
import SixthSPComponent from "./S_PageComponents/SixthSPComponent";
import SeventhSPComponent from "./S_PageComponents/SeventhSPComponent";

const ShopPage = () => {
  const ProductData = useSelector((store) => store.productDataSlice);
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = ProductData.product;
  return (
    <div className={Styles.MainShopPageDiv}>
      <FirstComponent product={ProductData.product} />

      {/* 2nd 3rd component */}
      <div className="mt-4 mb-5 w-100 d-flex flex-wrap">
        <div
          className={
            Styles.kkk + "   mb-2 col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12"
          }
        >
          <SecondComponent images={images} />
        </div>

        <div
          className={
            Styles.kkk + "  col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12"
          }
        >
          <ThirdComponent product={ProductData.product} />
        </div>
      </div>

      {/* 4th componet */}
      <FifthSPComponent stock={stock} />
      <div className="w-100 mb-5">
        <FourthComponent />
      </div>

      {/* 5th compo */}

      {/* // 6th component */}
      <SixthSPComponent />

      {/* 7th compo */}
      <SeventhSPComponent />
    </div>
  );
};

export default ShopPage;
