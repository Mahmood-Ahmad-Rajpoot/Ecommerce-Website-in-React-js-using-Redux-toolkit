import React, { useCallback, useState } from "react";
import Styles from "../SignIn.module.css";
import ContinueWith from "../ContinueWith";
import Login from "../SignInPage/Login";
import FormHeading from "../FormHeading";
import { Link } from "react-router-dom";

// materrial ui
import {
  Button,
  Container,
  FormControl,
  IconButton,
  Grid,
} from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
//   icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import SignUpBtn from "./SignUpBtn";

const SignUp = () => {
// form data collections
const [inputValues, setInputValues] = useState({
  name: '',
  password: '',
  confirmPassword:'',
  email: '',
});
// setting data in the state object
const handleInputChange = useCallback((fieldName,event)  => {
  setInputValues((prevValues) => ({
    ...prevValues,
    [fieldName]: event.target.value,
  }));
}, []);
 
  const [showPassword, setShowPassword] =useState(false);
  // handlers
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // password and confirm password match validation handlers
  let passMatch = false;
  if (inputValues.password !== inputValues.confirmPassword) {
    passMatch=true;
    // setPassMatch(true);
  } else passMatch =false
  // 
  return (
    <div className={Styles.MainDivsAll + " px-4"}>
      <Container maxWidth="sm" className=" ">
        <FormHeading heading="Create Account" />

        <Grid container flexDirection="column">
          {/* input fields */}
          <Grid item className="mb-4">
            <FormControl className="w-100" variant="outlined">
              <InputLabel htmlFor="input-with-icon-adornment">
                Enter Your Name
              </InputLabel>
              <Input value={inputValues.name}  onChange={(e)=>handleInputChange('name',e)}
                className="px-3"
                id="1"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          {/* email field */}

          <Grid item className="mb-4">
            <FormControl className="w-100" variant="outlined">
              <InputLabel htmlFor="input-with-icon-adornment">
                Email Address
              </InputLabel>
              <Input value={inputValues.email}  onChange={(e)=>handleInputChange('email',e)}
                className="px-3"
                id="2"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>


          {/* password field */}
          <Grid item className="mb-4">
            <FormControl variant="outlined" className="w-100 ">
              <InputLabel  htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <Input value={inputValues.password}  onChange={(e)=>handleInputChange('password', e)}
                required
                className="px-3"
                id="3"
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
          </Grid>
          {/* Confirm Password */}

          <Grid item>
            <FormControl variant="outlined" className="w-100 ">
              <InputLabel htmlFor="outlined-adornment-confirm-password">
                Confirm Password
              </InputLabel>
              <Input value={inputValues.confirmPassword}  onChange={(e)=>handleInputChange('confirmPassword', e)}
                required
                className="px-3"
                id="4"
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
            {passMatch&&<div className="text-danger">Password and confirm password does not match</div>}
          </Grid>
        </Grid>

        <div className="d-flex flex-row mt-3 mb-5">
          <p className={Styles.para}>
            {" "}
            By clicking on{" "}
            <mark className="bg-white text-primary">Create </mark> button you
            will agree terms <br /> and conditions.
          </p>
        </div>

        <Container className="d-flex  justify-content-center">
          {/* signup btn */}
       <SignUpBtn data={inputValues}/>
        </Container>
      </Container>

      <ContinueWith />
      <div className="d-flex w-100  justify-content-center align-items-center">
        <p className={Styles.para + " text-center mt-4"}>
          I already have an account ?
          <mark className="bg-white">
            <Link to="/loginPage">
              <Button
                style={{ fontSize: "0.8rem", fontWeight: "800" }}
                variant="text"
                size="sm"
              >
                Login
              </Button>
            </Link>
          </mark>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
