import React from "react";
import './Header.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({page,quantity}) => {
  return (
    <div
      className="w-100 px-2 d-flex mb-5
    justify-content-between align-items-baseline 
    "
    >
      <div className="pageNo d-flex">
        <p className="text-black">{page}/</p>
        <p>{quantity}</p>{" "}
      </div>
    <Link to={'/homePage'}><Button sx={{color:'black', fontWeight:'700'}} >Skip</Button></Link>  
    </div>
  );
};

export default Header;
