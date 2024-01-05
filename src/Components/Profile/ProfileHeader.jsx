import React from 'react'
import { Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

  const ProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-5">
        <IconButton onClick={() => navigate(-1)} size="large">
          <ArrowBackIosIcon style={{ paddingLeft: "10px" }} fontSize="large" />
        </IconButton>
      </div>
  )
}

export default ProfileHeader