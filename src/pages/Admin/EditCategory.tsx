import { useState } from "react";
import FormCategory from "../../components/common/CategForm/CategForm";



const editHandling = (values: any) => {
  console.log(values);
};

export default function EditCategory() {
  const[  product, setProduct] =useState( {
    image: "Watch",
    name: "watch",
  })


  return (
    <FormCategory
      eventHandler={editHandling}
      name={product.name}
    />
  );
}
