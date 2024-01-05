import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled,    } from "@mui/material/styles";
 
//
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logo, profile } from "../../assets";
import { Link, NavLink, Outlet } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import Styles from './Navbar.module.css'
import ProfileSetting from "./ProfileSetting";
 

const NavBar = () => {
  const dispatch = useDispatch();
  const { noOfItems } = useSelector((store) => store.cart);
  const { signIn, logOutModal } = useSelector((store) => store.signIn);
  const { profilePicture } = useSelector((store) => store.signUp);
  const { products } = useSelector((store) => store.orders);
   const [anchorElUser, setAnchorElUser] = React.useState(null);
   
  
  // logout modal handler

  
  // Menu navigation

  //styled cart icon
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 3,
      backgroundColor: "lightgrey",
      border: `0.5px solid ${theme.palette.background.paper}`,
      //
    },
  }));

  return (
    <>
      <AppBar
        style={{ backgroundColor: "white", color: "#1976d2" }}
        position="fixed"
      >
        <Container sx={{ marginLeft: "0px" }} maxWidth="xl">
          <Toolbar sx={{ display: "flex" }} disableGutters>
            {/* Laptop Logo */}
            <Link style={{ textDecoration: "none" }} to={"/homePage"}>
              <Box
                className=" px-0"
                sx={{
                  flexGrow: "0",
                  display: {
                    xs: "none",
                    md: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                  },
                }}
              >
                <IconButton>
                  <img src={logo} height={"60px"} />
                </IconButton>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,

                    flexGrow: 1,

                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Stylish
                </Typography>
              </Box>
            </Link>

            {/* Mobile Nav links */}
            <Box
              sx={{ m: 0, flexGrow: "1", display: { xs: "flex", md: "none" } }}
            >
              <MobileNavLinks />
            </Box>

            {/*Phone logo view */}
            <Link
              style={{ flexGrow: "1", textDecoration: "none" }}
              to={"/homePage"}
            >
              <Box
                className=" px-0"
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              >
                <IconButton>
                  <img src={logo} height={"60px"} />
                </IconButton>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    mr: 2,
                    flexGrow: 1,
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Stylish
                </Typography>
              </Box>
            </Link>

            {/*Laptop nav link */}
            <Box sx={{ flexGrow: "3", display: { xs: "none", md: "flex" } }}>
              <NavbarLinks />
            </Box>

            {/* shopping cart and user */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              {signIn && (
                <div className="d-flex gap-3 align-items-center ">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        color: isActive ? "#1976d2 " : "grey",
                      };
                    }}
                    to={"./orders"}
                  >
                    <div className="d-flex  flex-column text-center align-items-center">
                      {" "}
                      <Badge showZero badgeContent={products.length}>
                        <LocalShippingIcon />
                      </Badge>
                    </div>
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        color: isActive ? "#1976d2 " : "grey",
                      };
                    }}
                    to={"./Cart"}
                  >
                    <StyledBadge showZero badgeContent={noOfItems}>
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </NavLink>
                </div>
              )}
              <Box sx={{ flexGrow: 0 }}>
                {signIn ? (
                  <Tooltip title="Open settings">
                   <ProfileSetting/>
                  </Tooltip>
                ) : (
                  <div>
                    <Link to={"/loginPage"}>
                      <Button type="link" style={{ color: "#F83758" }}>
                        Sign In
                      </Button>
                    </Link>
                  </div>
                )}
              </Box>
              
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
const NavbarLinks = () => {
  return (
    <div className="d-flex gap-5 mx-5 ">
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "#1976d2 " : "grey",
          };
        }}
        to={"/homePage"}
      >
        <div className="d-flex  flex-column text-center align-items-center">
          <HomeIcon fontSize="large" />
          <h6>Home</h6>
        </div>
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "#1976d2 " : "grey",
          };
        }}
        to={"./favourite"}
      >
        <div className="d-flex  flex-column text-center align-items-center">
          {" "}
           
          <FavoriteIcon fontSize="large" />
          
          
          <h6>Favourite</h6>
        </div>
      </NavLink>

      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "#1976d2 " : "grey",
          };
        }}
        to={"./trending"}
      >
        <div className="d-flex  flex-column text-center align-items-center">
          <WhatshotIcon fontSize="large" />
          <h6>Trending</h6>
        </div>
      </NavLink>
    </div>
  );
};
const MobileNavLinks = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Link style={{textDecoration:'none'}} to={"/homePage"}>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">Home</Typography>
          </MenuItem>
        </Link>
        <Link  style={{textDecoration:'none'}} to={"favourite"}>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">Favourite</Typography>
          </MenuItem>
        </Link>
        <Link  style={{textDecoration:'none'}} to={"trending"}>
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">Trending</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};
