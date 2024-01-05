import React, { useState } from "react";
// material ui
import { Button, Typography } from "@mui/material";
 import Styles from "./Home.module.css";

import SortButton from "../SortButton";
import FilterButton from "../FilterButton";

 
const Featured = ({ text }) => {
  
  
  return (
    <div id={Styles.Featured} className="d-flex justify-content-between">
      <Typography variant="h5" fontWeight={700}>
        {" "}
        {text}
      </Typography>
      <div className="d-flex">
      <SortButton/>
      <FilterButton/>
       
        
      </div>
    </div>
  );
};

export default Featured;
