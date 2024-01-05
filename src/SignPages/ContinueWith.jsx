import React from "react";
import Styles from "./SignIn.module.css";
import { Button, Container, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {apple, google , facebook} from '../assets'
const ContinueWith = () => {
  const circle = {
    width:"6vw",
    height:'6vw',
    // border:"1px solid red",
    // padding:'2px !Important',

  }
  return (
    <>
      <p className={Styles.para + " text-center mt-2"} >-OR Continue with-</p>
      <div className="d-flex flex-row justify-content-center gap-4">
        <IconButton style ={circle} aria-label="delete" variant='outlined' color="">
          <img style={{width:'30px'}} src={apple}/>
        </IconButton>
        <IconButton style ={circle} aria-label="delete" variant='outlined' color="">
          <img style={{width:'30px'}} src={google} />
        </IconButton>
        <IconButton style ={circle} aria-label="delete" variant='outlined' color="">
          <img style={{width:'30px'}} src={facebook}/>
        </IconButton>
        {/* <div className={Styles.imageCircle}>
          <img className={Styles.Roundimages} src={google} alt="circle" />
        </div>
        <div className={Styles.imageCircle}>
          <img className={Styles.Roundimages} src={apple} alt="circle" />
        </div>
        <div className={Styles.imageCircle}>
          <img className={Styles.Roundimages} src={facebook} alt="circle" />
        </div> */}
      </div>
    </>
  );
};

export default ContinueWith;
