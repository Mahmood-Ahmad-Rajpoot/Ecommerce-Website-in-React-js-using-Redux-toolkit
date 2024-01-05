import React from "react";
import Styles from "../SignIn.module.css";
import Mail from "../images/Mail.svg";
import FormHeading from "../FormHeading";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  Grid,
} from "@mui/material";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
const Forgot = () => {
  return (
    <div className={Styles.MainDivsAll + " px-4"}>
      <FormHeading iconSwitch={Mail} heading="Forgot Password?" />
      <Container maxWidth="sm" className=" ">
        <Grid container flexDirection="column">
          {/* input fields */}
          <Grid item className="mb-3">
            <FormControl className="w-100" variant="outlined">
              <InputLabel htmlFor="input-with-icon-adornment">
                Enter Your Name
              </InputLabel>
              <Input
                className="px-3"
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          {/* password field */}
        </Grid>

        <p className={Styles.para + ' mb-4'}>
          <mark className="bg-transparent text-primary ">*</mark>We will send
          you a confirmation message on the given <br /> email address
        </p>

        <Container className="d-flex  justify-content-center">
          <Button
            variant="contained"
            className="col-10 align-self-center  mb-5"
          >
            Continue
          </Button>
        </Container>
      </Container>

      <Grid container justifyContent="center">
        <Grid item>
          <Link to="/loginPage">
            <Button variant="outlined" size="sm">
              Back to Login page
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default Forgot;
