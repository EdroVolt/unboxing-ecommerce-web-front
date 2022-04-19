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
import React, { useEffect, useState } from "react";
// import DashBoard from "../pages/DashBoard";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
// import NotFound from "../pages/NotFound";

const Router = () => {
  // const [isLogged, setIsLoggged] = useState(false);
  // console.log(isLogged);

  const auth = useSelector<any>((state) => state.user.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("Auth", isAuthenticated);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    // eslint-disable-next-line
  }, [auth]);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      {/* {isAuthenticated === true ? (
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsAuthenticated(true)}>LogIn</button>
      )} */}

      <Routes>
        <Route path={home} element={<Home />} />

        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
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
