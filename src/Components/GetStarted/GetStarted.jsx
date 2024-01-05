import React from "react";
import Styles from "./GetStarted.module.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const GetStarted = () => {
  return (
    <div id={Styles.getstartedPageMain}>
      <div>
        <div className="w-100 d-flex justify-content-end gap-3 p-3 mb-5">
          <Link to="loginPage" >
            <Button variant="outlined" color="primary">
              Sign In
            </Button>
          </Link>

          <Link to="signUpPage" >
            <Button variant="contained" color="error">
              Create Account
            </Button>
          </Link>
        </div>

        <div className="text-white d-flex  justify-content-center align-items-end align-self-end">
          <div
            className="d-flex text-center px-4 justify-content-center align-items-center "
            id={Styles.getStartedSubDiv}
          >
            <div className="d-flex flex-column w-100 mb-5">
              <>
                <h1> You want</h1>
                <h1>Authentic, here you go!</h1>{" "}
              </>
              <p className="mb-5">Find it here, buy it now! </p>

              <Link
               
                to="homePage"
                className="text-white col-12  align-self-center "
              >
                <Button variant="contained" color="error" >
                  Shopping Page{" "}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
