import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import {
  home,
  profile,
  products,
  productDetails,
  about,
  cart,
  orders,
  wishList,
  login,
  singUp,
  error,
  dashboard,
} from "./routePaths";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import Products from "../pages/Products";
import ProductDetail from "../pages/productDetail";
//import { AboutUs } from "../components/AboutUs/AboutUs";
import Cart from "../pages/cart";
import WishList from "../pages/wishList";
import Orders from "../pages/Orders";
import Login from "../components/Login/Login";
import SingUp from "../components/SignUp/SignUp";
import React, { useState } from "react";
import DashBoard from "../pages/DashBoard";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../components/Navbar/Navbar";
// import NotFound from "../pages/NotFound";


const Router = () => {
  const [isLogged, setIsLoggged] = useState(false);
  console.log(isLogged);

  return (
    <>
    <Navbar isLogged={isLogged}  />
      {isLogged === false ? (
    <button onClick={() => setIsLoggged(true)}>LogIn</button>
  ) : (
    <button onClick={() => setIsLoggged(false)}>LogOut</button>
  )}
     
    
      <Routes>
        <Route path={home} element={<Home />} />
        
        <Route element={<PrivateRoute isLogged={isLogged} />}>
          <Route path={profile} element={<UserProfile />} />
          <Route path={cart} element={<Cart />} />
          <Route path={wishList} element={<WishList />} />
          <Route path={orders} element={<Orders />} />
        </Route>
        {/* <Route
          path={dashboard}
          element={
            <PrivateRoute
              isLogged={isLogged && user.roles.includes("admin")}
            >
              <DashBoard user={user} />
            </PrivateRoute>
          }
        /> */}

        <Route path={products} element={<Products />} />
        <Route path={productDetails} element={<ProductDetail />} />
        <Route path={login} element={<Login />} />
        <Route path={singUp} element={<SingUp />} />
        {/* <Route path={error} element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default Router;
