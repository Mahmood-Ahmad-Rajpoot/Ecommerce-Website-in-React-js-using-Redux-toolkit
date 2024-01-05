import React, { useState } from "react";
import Styles from "./Profile.module.css";
import UploadProfilePic from "./UploadProfilePic";
import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  EditOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setEdit } from "../../features/signUp";
 
const Profile = () => {
  const dispatch = useDispatch();
  const { edit} = useSelector((store)=>store.signUp)
   const [icon, setIcon] = useState(<EditOutlined />);
  const iconHandler = () => {
    if (edit) {
      setIcon(<EditOutlined />);
      dispatch(setEdit());
    } else {
      setIcon(<CloseOutlined />);
      dispatch(setEdit());
    }
  };
  return (
    <div className=" mt-4">
      <ProfileHeader />

      {/* Details form  */}
      <div className="w-100 d-flex justify-content-center">
        <div className={Styles.Profiledetailform + " border p-0 rounded-2"}>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center gap-5 mt-0">
            <span className="align-self-end">
              <IconButton onClick={iconHandler}>{icon}</IconButton>
            </span>
            <UploadProfilePic upload={edit} />
            {/* details */}
            <div className="mx-3">
              <ProfileDetails edit={edit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
