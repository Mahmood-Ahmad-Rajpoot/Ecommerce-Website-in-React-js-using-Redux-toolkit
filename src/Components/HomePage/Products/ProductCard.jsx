import React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import { Link } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../../features/productPageDataSlice";

const ProductCard = ({ product }) => {
//  redux 
const productData = useSelector((store)=>store.productDataSlice);
     const dispatch = useDispatch();

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
  const oneImg = images[0];
  return (
     <Link onClick={()=>dispatch(setProduct(product))} style={{textDecoration:'none'}} to={'/shopPage'}>
     
    
      <Card sx={{ width: "100%",borderRadius:'0',boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;    background: #fff' }}>
        <p name='ids' id='product_ID' style={{display:'none'}}>{id}</p>
        {/*  card image */}
        <CardMedia sx={{ height: 170,objectFit:'contain',  }} image={oneImg} title="green iguana" />
        <CardContent className="d-flex flex-column">
          <Typography
            style={{
              height: "30px",
              overflow: "hidden",
              color: "black",
              fontWeight: "600",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>

          <Typography
            style={{
              height: "80px",
              overflow: "hidden",
              marginBottom: "0.5rem",
            }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>

          <Typography variant="p" sx={{ color: "black", fontWeight: "700" }}>
            Rs.<b>{price}</b>
          </Typography>
          <Typography variant="p" sx={{ color: "black", fontWeight: "700" }}>
            Brand: <b>{brand}</b>
          </Typography>
          <Typography variant="p" sx={{ color: "black" }}>
            Discounted :{discountPercentage}%
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </Card>
     
    </Link>
  );
};

export default ProductCard;
