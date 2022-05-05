import ProductType from "./Product.model";

type OrderType = {
  _id?: string;
  products: { product: ProductType | string; count: number }[];
  totalCount: number;
  paymentMethod: "cash" | "visa";
  createdAt?: Date;
};

export default OrderType;
