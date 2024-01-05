import React from "react";
import Styles from "./Home.module.css";
// material ui
import { heel } from "../../../../assets";
// card
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardContent, Typography, Button, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const TextCard5thCom = () => {
  return (
    <div className={Styles.MainDiv5thCom}>
      <Card
        sx={{
          maxWidth: "100%",
          height: "100%",
          borderRadius: "1rem ",
          color: "white",
          backgroundColor: "transparent",
        }}
      >
        <Grid container>
          <Grid xs={6} sm={6} md={6} lg={6} item>
            <CardMedia
              component="img"
              minheight="500px"
              image={heel}
              alt="card"
            />
          </Grid>

          <Grid
            sx={{
              height: "inherit",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={6}
            sm={6}
            md={6}
            lg={6}
            item
          >
            <CardContent>
              <div className=" d-flex flex-column">
                <div className=" d-flex flex-column text-center ">
                  <Typography
                    variant="h4"
                    style={{ letterSpacing: "0.5rem", fontWeight: "700" }}
                  >
                    Flat And Heels
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      letterSpacing: "0.3rem",
                      fontWeight: "400",
                      margin: "0.5rem 0",
                    }}
                  >
                    Take A chance to get award ,Happy Shopping
                  </Typography>
                  <div>
                <Link to={"/AllProducts"}>
                  <Button
                    endIcon={<EastIcon />}
                    color="error"
                    variant="contained"
                  >
                    Visit Now
                  </Button>
                </Link>
                </div>
                </div>
                
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default TextCard5thCom;

// const Cards = () => {
// //   const theme = useTheme();
//   return (

//   );
// };
