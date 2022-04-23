import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/common/ProductForm/ProductForm";
import ProductType from "../../models/Product.model";
import { getAllCategoriesAPI } from "../../store/actionCreator/categoryActionCreator";
import { addProductAPI } from "../../store/actionCreator/productActionCreator";
import { StoreType } from "../../store/store";

export default function AddProduct() {
  const dispatch: any = useDispatch();

  const formateData = (values: any) => {
    const formData = new FormData();

    formData.append("file", values.file);
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("category", values.category);
    formData.append("description", values.description);
    formData.append("images", values?.file.name);
    formData.append(
      "sizeCount",
      JSON.stringify({
        xl: values.xl,
        l: values.l,
        md: values.md,
        s: values.s,
        xs: values.xs,
      })
    );
    return formData;
  };

  const categories = useSelector(
    (store: StoreType) => store?.category.categories
  );
  const addHandling = (values: ProductType) => {
    dispatch(addProductAPI(formateData(values)));
  };

  useEffect(() => {
    dispatch(getAllCategoriesAPI());
  }, []);

  return <Form category={categories} eventHandler={addHandling} />;
}
