import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { login } from "../../../router/routePaths";
import PrivateRoute from "../../../router/PrivateRoute";
import {
  addcategory,
  addProduct,
  categorysList,
  editcategory,
  editProduct,
  productsList,
} from "./AdminRouterPaths";
import ProductsList from "../ProductsList";
import AddProduct from "../AddProduct";
import EditeProduct from "../EditProduct";
import CategoryList from "../CategoryList";
import EditCategory from "../EditCategory";
import AddCategory from "../AddCategory";

const AdminRouter = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   let token = localStorage.getItem("token")?.split(" ")[1];
  //   if (token) {
  //     const decodedToken: any = jwt.decode(token);
  //     if (decodedToken?.role === "admin") setIsAdmin(true);
  //     else setIsAdmin(false);
  //   } else {
  //     navigate(login);
  //   }
  // }, []);

  return (
    <>
      <Routes>
        <Route >
          <Route path={productsList} element={<ProductsList />} />
          <Route path={addProduct} element={<AddProduct />} />
          <Route path={editProduct} element={<EditeProduct />} />

          <Route path={categorysList} element={<CategoryList />} />
          <Route path={editcategory} element={<EditCategory />} />
          <Route path={addcategory} element={<AddCategory />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRouter;
