import { useState } from "react";
import FormCategory from "../../components/common/CategForm/CategForm";



const addHandling = (values: any) => {
  console.log(values);
};

export default function EditeProduct() {

  return (
    <FormCategory eventHandler={addHandling}/>
  );
}
