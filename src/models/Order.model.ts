import ProductType from "./Product.model";

type OrderType = {
  products: { product: ProductType|string; count: number }[];
  totalCount: number;
  paymentMethod: "cash" | "visa";
  createdAt?: Date;
};

export default OrderType;
