import React from "react";
import Styles from "./Home.module.css";
import { CardContent, Typography, IconButton, Button } from "@mui/material";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const TextCard = () => {
  return (
    <div className={Styles.TextCardMainDiv}>
      <div style={{ marginLeft: "2rem" }}>
        <Typography
          component="div"
          sx={{ fontWeight: "500", color: "white" }}
          variant="h5"
           
        >
          Deal of the Day
        </Typography>
        <div className="d-flex gap-1 align-items-center">
          <AccessAlarmsIcon sx={{ color: "white" }} />
          <Typography
            sx={{ fontWeight: "500", color: "white" }}
            variant="p"
            component="div"
          >
            22 h 52 min 42 s remaining
          </Typography>
        </div>
      </div>
      <Link to={"/AllProducts"}>
        {" "}
        <Button
          variant="outlined"
          style={{
            color: "white",
            border: "0.15rem solid white",
            marginRight: "2rem",
          }}
          endIcon={<EastIcon />}
        >
          Shop Now
        </Button>
      </Link>
    </div>
  );
};
export default TextCard;
