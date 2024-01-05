import React, { useState } from "react";
import {  Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
 
const Footer = ({ total }) => {
  const navigate =  useNavigate();
  const [loading, setLoading] = useState();
  const enterLoading =()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/Shipping')
      
    }, 2000);
  }
  return (
    <div className="col-12   d-flex justify-content-between align-items-center">
      <div className="d-flex  flex-column align-items-center ">
        <Typography fontWeight={"400"} variant="h6">
          Rs.<b> {total}</b>
        </Typography>
        <Link to={"/shopPage"}>
          <Button type="link" style={{color:'#F83758'}}>
            <b>view details</b>
          </Button>
        </Link>
      </div>
      <div className="col-8 ">
        
          <Button
            block
            type="primary"
            style={{backgroundColor:'#F83758',fontWeight: "600",height:'2.6rem'}}
          loading={loading}
          onClick={enterLoading}
           
           
            
          >
            Proceed To Payment
          </Button>
       
      </div>
    </div>
  );
};

export default Footer;
