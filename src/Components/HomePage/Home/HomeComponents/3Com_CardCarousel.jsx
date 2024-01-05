import React, { useState } from "react";
import Styles from "./Home.module.css";
import { card1, heel } from "../../../../assets";
// card
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardContent, Typography, Button, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
 
const CardCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className={Styles.CarouselMain + " carousel slide px-2 "}
        data-ride="carousel"
      >
        <div className="carousel-inner overflow-hidden   ">
          <div className="carousel-item active position-relative">
            <Cards img={card1} />
          </div>
          <div className="carousel-item">
            <Cards img={card1} />
          </div>
          <div className="carousel-item">
            <Cards img={heel} />
          </div>
        </div>
      </div>
      {/* Carousel indicator buttons */}

      <div className="carousel-indicators position-relative ">
        <button
          type="button"
          data-target="#carouselExampleIndicators"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className={Styles.circlebtn}
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          className={Styles.circlebtn + " carousel-item active"}
          data-target="#carouselExampleIndicators"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          className={Styles.circlebtn}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
          data-target="#carouselExampleIndicators"
        />
      </div>
    </div>
  );
};

export default CardCarousel;

const Cards = ({ img }) => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: "100%", height: "100%", borderRadius: "1rem " }}>
    <Grid container>
      <Grid xs={12} sm={12} md={6} lg={6} item>
        <CardMedia
          component="img"
          height="450"
          image={img}
          alt="green iguana"
        />
      </Grid>
      <Grid
        sx={{
          height: "inherit",
          width: "100%",
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        item
      >
        <CardContent>
          <div className={Styles.CardTextBtn}>
            <div>
              <Typography
                variant="h5"
                style={{ letterSpacing: "0.5rem", fontWeight: "700" }}
              >
                New Arrivals
              </Typography>
              <Typography variant="h6" style={{ fontWeight: "400" }}>
                Summer '25 Collection{" "}
              </Typography>
            </div>
            <Link to={"/AllProducts"}>
            <Button
              endIcon={<EastIcon />}
              color="error"
              variant="contained"
            >
              View all
            </Button>
            </Link>
          </div>
        </CardContent>
      </Grid>
    </Grid>
  </Card>
  );
};
