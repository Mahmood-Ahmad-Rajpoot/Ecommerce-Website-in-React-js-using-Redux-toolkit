import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <Typography
        variant="h4"
        style={{ marginTop: "20vw", marginBottom: "20px" }}
        align="center"
        color="textSecondary"
      >
        Page You Requested Not Found
      </Typography>
      <Grid container size="lg" justifyContent="center">
        <Grid item>
          <Link to="/">
            <Button variant="contained" size="lg">
              Back to Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Error;
