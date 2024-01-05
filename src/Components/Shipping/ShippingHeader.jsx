import React from 'react'
import ExitButton from '../ExitButton/ExitButton'
import { Typography } from "@mui/material";

const ShippingHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mx-5   my-3">
        <ExitButton />
        
        <Typography  variant="h5" fontWeight={"600"}>
          Place Order
        </Typography>
        <div></div>
        
      </div>
  )
}

export default ShippingHeader