import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Styles from './Navbar.module.css'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { OpenLogOutModal } from "../../features/signInSlice";
import LogOutModal from "./LogOutModal";
const ProfileSetting = () => {
    const dispatch = useDispatch();
  const { noOfItems } = useSelector((store) => store.cart);
  const { signIn, logOutModal } = useSelector((store) => store.signIn);
  const { profilePicture } = useSelector((store) => store.signUp);
  const { products } = useSelector((store) => store.orders);
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {logOutModal && <LogOutModal />}

      <Box sx={{ display: "flex", alignItems: "center",justifyContent:'center', textAlign: "center",  }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
             <img className={Styles.profilePicture} src={profilePicture}/>

          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to={'/Profile'} className={Styles.link}><MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem></Link>
       
            
        
        <Divider />
        <MenuItem  disabled className={Styles.link} onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <Link to={'/Profile'} className={Styles.link}> <MenuItem className={Styles.link} onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem></Link>
         
       
        <MenuItem className={Styles.link} onClick={()=>{
            handleClose();
            dispatch(OpenLogOutModal());}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
export default ProfileSetting
//  

  