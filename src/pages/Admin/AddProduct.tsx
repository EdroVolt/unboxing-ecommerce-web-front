import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/common/ProductForm/ProductForm";
import ProductType from "../../models/Product.model";
import { getAllCategoriesAPI } from "../../store/actionCreator/categoryActionCreator";
import { addProductAPI } from "../../store/actionCreator/productActionCreator";
import { StoreType } from "../../store/store";



export default function AddProduct() {

  const dispatch:any = useDispatch()

  const categories = useSelector((store:StoreType)=>store?.category.categories)
  const addHandling = (values: ProductType) => {
    console.log(values)
    dispatch(addProductAPI(values))
  };

  useEffect(()=>{
    dispatch(getAllCategoriesAPI())
  },[])

  return (
    <Form
    category={categories}
      eventHandler={addHandling}
    />
  );
}
