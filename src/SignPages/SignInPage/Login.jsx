import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Styles from "../SignIn.module.css";
import FormHeading from "../FormHeading";
import ContinueWith from "../ContinueWith";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import LoginBtn from "./LoginBtn";
import { useSelector } from "react-redux";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  // handlers
  const {name, password}=useSelector((store)=>store.signUp)

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [input, setInput] = useState({ name: "", password: "" });
   const login = input.password === password && input.name === name? true : false;
  return (
    <div className="d-flex flex-column ">
      {/* <BackButton backFunc={}/> */}

      <div className={Styles.MainDivsAll + " mt-5 px-4"}>
        <Container maxWidth="sm" className=" ">
          <FormHeading heading="Welcome Back!" />
          <Grid container flexDirection="column">
            {/* input fields */}
            <Grid item className="mb-5">
              <FormControl className="w-100" variant="outlined">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Enter Your Name
                </InputLabel>
                <Input
                  value={input.name}
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
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
            <Grid item>
              <FormControl variant="outlined" className="w-100 ">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <Input
                  value={input.password}
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                  className="px-3"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  startAdornment={
                    <InputAdornment position="start">
                      <HttpsIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {login ? (
                <></>
              ) : (
                <h6 className="text-danger">
                  {" "}
                  (use UserName:root and password:1234)
                </h6>
              )}
            </Grid>
          </Grid>
          <div className="d-flex flex-row-reverse mb-5">
            <Link to="/forgotPage">
              <Button
                style={{ fontSize: "0.8rem", fontWeight: "800" }}
                variant="textPrimary"
                className="px-0"
                size="sm"
              >
                Forgot Password?
              </Button>
            </Link>
          </div>

          <LoginBtn inputValue={input} />
        </Container>

        <ContinueWith />
        <div className="d-flex w-100  justify-content-center">
          <p className={Styles.para + " text-center mt-4"}>
            Don't Have account ?
            <Link to="/signUpPage">
              <Button
                style={{ fontSize: "0.8rem", fontWeight: "800" }}
                variant="textPrimary"
                size="lg"
              >
                SignUp
              </Button>
            </Link>
          </p>
        </div>

        {/*  */}
      </div>

      {/* background */}
    </div>
  );
};

export default Login;
