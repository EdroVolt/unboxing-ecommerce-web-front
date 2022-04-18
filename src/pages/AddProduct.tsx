import { useState } from "react";
import Form from "../components/common/ProductForm/ProductForm";


const addHandling = (values: any) => {
  console.log(values);
};

export default function AddProduct() {

  return (
    <Form
      eventHandler={addHandling}
    />
  );
}
