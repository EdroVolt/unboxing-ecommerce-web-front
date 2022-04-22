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
import { AboutUs } from "../components/AboutUs/AboutUs";
import Cart from "../pages/cart";
import WishList from "../pages/wishList";
import Orders from "../pages/Orders";
import Login from "../components/Login/Login";
import SingUp from "../components/SignUp/SignUp";
import React, { useEffect, useState } from "react";
// import DashBoard from "../pages/DashBoard";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { boolean } from "yup";
import { StoreType } from "../store/store";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
// import NotFound from "../pages/NotFound";

const Router = () => {
  // const [isLogged, setIsLoggged] = useState(false);
  // console.log(isLogged);
  const handleAuthChanges = (isAuthenticated: any) => {
    setIsAuthenticated(!isAuthenticated);
  };
  const user = useSelector<any>((store: StoreType) => store.user.user);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  console.log("Auth", isAuthenticated);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar isAuth={isAuthenticated} setIsAuth={setIsAuthenticated} />

      <Box mt="25" minHeight={"49vh"} fontSize="xl">
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
          <Route path={about} element={<AboutUs />} />
          <Route
            path={login}
            element={
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path={singUp} element={<SingUp />} />
          {/* <Route path={error} element={<NotFound />} /> */}
        </Routes>
      </Box>
      <Footer isAuth={isAuthenticated} />
    </>
  );
};

export default Router;
