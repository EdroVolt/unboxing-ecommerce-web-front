import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/common/ProductForm/ProductForm";
import ProductType from "../../models/Product.model";
import { getAllCategoriesAPI } from "../../store/actionCreator/categoryActionCreator";
import { addProductAPI } from "../../store/actionCreator/productActionCreator";
import { StoreType } from "../../store/store";



export default function AddProduct() {

  const dispatch:any = useDispatch()

  const formateData = (values: any) => {
    const newValues={...values,sizeCount:{
      xl:values.xl,
      l:values.l,
      md:values.md,
      s:values.s,
      xs:values.xs
    }, images:[values?.file.name], file:values.file}
    console.log(newValues)
    return newValues
  };

  const categories = useSelector((store:StoreType)=>store?.category.categories)
  const addHandling = (values: ProductType) => {
    
    dispatch(addProductAPI(formateData(values)))
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
