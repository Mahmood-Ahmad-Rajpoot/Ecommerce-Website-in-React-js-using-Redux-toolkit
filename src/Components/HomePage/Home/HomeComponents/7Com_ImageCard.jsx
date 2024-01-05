import React from "react";
//
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Styles from "./Home.module.css";
import { Link } from "react-router-dom";

const ImageCard7th = () => {
  return (
    <div className={Styles.MainDiv7th}>
      <Card sx={{ maxWidth: "100%", height: "100%", borderRadius: "1rem " }}>
        <Grid container>
          <Grid xs={12} sm={12} md={6} lg={6} item>
            <CardMedia
              component="img"
              height="450"
              image="https://source.unsplash.com/random"
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
    </div>
  );
};

export default ImageCard7th;
