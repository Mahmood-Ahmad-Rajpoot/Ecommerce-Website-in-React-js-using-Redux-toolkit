import React, { useState } from "react";
import Styles from "./ShopPage.module.css";
//
import { Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Paragraph from "antd/es/typography/Paragraph";

// ant design
// import { Typography } from "antd";
// const { Paragraph, Text } = Typography;

const sizes = ["6PK", "7PK", "8PK", "9PK", "10PK", "11PK"];
const ThirdComponent = ({ product }) => {
  // size changing state
  const [ellipsis, setEllipsis] = useState(true);
  const [state, setState] = useState(0);

  // destructuring the product array
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
  } = product;

  return (
    <div className={Styles.Main3rdSP + " px-4  "}>
      {/* sizes */}
      <h5 style={{ fontWeight: "700" }}>Size: {sizes[state]}</h5>
      <div className="d-flex flex-wrap gap-1">
        {sizes.map((size, ind) => {
          let focused = {};
          if (ind === state) {
            focused = { backgroundColor: "#FA7189", color: "white" };
          }
          return (
            <Button
              key={ind}
              variant="outlined"
              color="error"
              onClick={() => setState(ind)}
              style={focused}
              className={Styles.SizeContainer}
            >
              {size}
            </Button>
          );
        })}
      </div>
      {/* title  */}

      <Typography
        style={{
          marginTop: "1rem",
          overflow: "auto",
          color: "black",
          fontWeight: "700",
        }}
        gutterBottom
        variant="h4"
      >
        {title}
      </Typography>
      {/* rating */}
      <div className="d-flex gap-2 align-items-center text-center text-secondary mb-2">
        <Rating name="read-only" value={rating} readOnly /> 5,020{" "}
      </div>
      <Typography
        style={{
          marginBottom: "0.5rem",
        }}
        variant="h6"
        color="text.secondary"
      >
        {/* price */}
        <div className="d-flex gap-2 align-items-center text-center mb-2">
          <Typography variant="p" sx={{ color: "black", fontWeight: "600" }}>
            Rs.{price}
          </Typography>
          <div className={Styles.percentOff}
           
          >
            {discountPercentage}% OFF
          </div>
        </div>
      </Typography>

      {/* description */}

      <Typography
        className="row"
        variant="p"
        sx={{ color: "black", fontWeight: "600" }}
      >
        Product Description:
      </Typography>

      <div id="descriptionID">
        <Paragraph style={{textAlign:'justify'}}
          ellipsis={
            ellipsis
              ? {
                  rows: 4,
                  expandable: true,
                  symbol: "more",
                }
              : false
          }
        >
          E commerce is the process of buying and selling goods and services
          online. It has become increasingly popular in recent years, as it
          offers a convenient and efficient way to shop. There are many
          advantages to using e commerce, including the ability to compare
          prices, access a wider range of products, and enjoy greater
          convenience. It is also typically faster and more convenient than
          traditional shopping methods. E-commerce has revolutionized the way
          businesses operate and has created new opportunities for entrepreneurs
          around the world. If you’re thinking of starting an online business,
          there’s no better time than now. With the right platform and a bit of
          creativity, you can build a successful e-commerce business that will
          thrive for years to come. Thanks for reading!
        </Paragraph>
      </div>
    </div>
  );
};

export default ThirdComponent;
