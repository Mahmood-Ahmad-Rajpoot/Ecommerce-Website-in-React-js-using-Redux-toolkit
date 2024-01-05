import React from "react";
//
import Styles from "./Home.module.css";
import { Typography, Button } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
const TextCard6th = () => {
  return (
    <div className={Styles.MainDiv6thCom}>
      <div style={{ marginLeft: "1rem" }}>
        <Typography
          component="div"
          sx={{ fontWeight: "500", color: "white" }}
          variant="h5"
         >
          Trending Products
        </Typography>
        <div className="d-flex gap-1 align-items-center">
          <CalendarMonthOutlinedIcon sx={{ color: "white" }} />
          <Typography
            sx={{ fontWeight: "500", color: "white" }}
            variant="p"
            component="div"
          >
            Last Date 29/December
          </Typography>
        </div>
      </div>
      <div className={Styles.Btn6thComponent}>
        <Link to={"/AllProducts"}>
          <Button
            variant="outlined"
            style={{
              color: "white",
              border: "0.15rem solid white",
              marginRight: "2rem",
            }}
            endIcon={<EastIcon />}
          >
            View all
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TextCard6th;
