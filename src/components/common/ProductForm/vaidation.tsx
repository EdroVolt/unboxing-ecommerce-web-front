import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
  name: Yup.string().required("product Name is required"),
  price: Yup.number().required("Price is required"),
  discription: Yup.string().required("product discription is required"),
  categoryName: Yup.string().required("Category name of product is required"),
  xlCount: Yup.number().required("count of xl size is required"),
  lCount: Yup.number().required("count of l size is required"),
  mdCount: Yup.number().required("count of md size is required"),
  sCount: Yup.number().required("count of s size is required"),
  xsCount: Yup.number().required("count of xs size is required"),
});

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const formateData = (values: any) => {
  const newValues={...values,sizeCount:{
    xl:values.xl,
    l:values.l,
    md:values.md,
    s:values.s,
    xs:values.xs
  } }
  console.log(newValues)
  return newValues
};
export type ProductFormProps = {
  image?: string;
  name?: string;
  price?: number;
  description?: string;
  category?: [];
  xl?: number;
  l?: number;
  md?: number;
  s?: number;
  xs?: number;
  offer?: boolean;
  discount?: number;
  eventHandler?: (values: any) => void;
};
