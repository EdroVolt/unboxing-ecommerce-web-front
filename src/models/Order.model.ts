type OrderType = {
  products: { product: string; count: number }[];
  totalCount: number;
  paymentMethod: "cash" | "visa";
  createdAt?: Date;
};

export default OrderType;
