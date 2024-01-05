import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./Error";
import GetStarted from "./Components/GetStarted/GetStarted";
import Main from "./Components/Suggestion/Main";
import Home from "./Components/HomePage/Home/Home";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import Trending from "./Components/HomePage/Trending/Trending";
import Favourite from "./Components/HomePage/Favourites/Favourite";
import ShopPage from "./Components/HomePage/ShopPage";
import Profile from "./Components/Profile";
import PlaceOrder from "./Components/PlaceOrder";
import Suggestion from "./Components/Suggestion/Main";
import Cart from "./Components/Cart";
import AllProducts from "./Components/AllProducts";
import CategoryBasedProducts from "./Components/CategoryBasedProducts";
import Shipping from "./Components/Shipping";
import SignUp from "./SignPages/SignUpPage/SignUp";
import Login from "./SignPages/SignInPage/Login";
import Forgot from "./SignPages/ForgotPage/Forgot";
import BackBtnaction from "./Components/Suggestion/BackBtnaction";
import SignInFirstModal from "./Components/SignInFirstModal/SignInFirstModal";
import Orders from "./Components/Orders/Orders";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="homePage" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="trending" element={<Trending />} />
          <Route path="orders" element={<Orders />} />
          <Route path="Cart" element={<Cart />} />
        </Route>

        <Route path="Cart" element={<Cart />} />
        <Route path="/" element={<GetStarted />} />
        <Route path="loginPage" element={<Login />} />
        <Route path="signUpPage" element={<SignUp />} />
        <Route path="forgotPage" element={<Forgot />} />
        {/* shared layout for home page */}

        <Route path="AllProducts" element={<AllProducts />} />
        <Route path="shopPage" element={<ShopPage />} />
        <Route path="*" element={<Error />} />
        <Route path="Main" element={<Main />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="PlaceOrder" element={<PlaceOrder />} />
        <Route path="Suggestion" element={<Suggestion />} />
        <Route
          path="CategoryBasedProducts"
          element={<CategoryBasedProducts />}
        />
        <Route path="Shipping" element={<Shipping />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
