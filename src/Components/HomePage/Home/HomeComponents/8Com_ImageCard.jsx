import React from "react";
//

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  IconButton,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Styles from "./Home.module.css";
import { shoes } from "../../../../assets";
import { Link } from "react-router-dom";
const ImageCard8th = () => {
  return (
    <div className={Styles.MainDiv7th}>
      <Card
        sx={{ maxWidth: "100%", height: "100%", borderRadius: "1rem " }}
       >
        <Typography
          variant="h6"
          style={{ fontWeight: "600", padding: "0.5rem" }}
        >
          Sponsored
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CardMedia
              component="img"
              height="450"
              style={{ width: "100%" }}
              image="https://source.unsplash.com/random/2"
              alt="green iguana"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              height: "inherit",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <div className={Styles.CardTextBtn}>
                <div>
                  <Typography variant="p" style={{ fontWeight: "700" }}>
                    Summer '25 Collection{" "}
                  </Typography>
                </div>
                <Link to={"/AllProducts"}>
                  <IconButton>
                    <EastIcon />
                  </IconButton>
                </Link>
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ImageCard8th;
