type OrderType = {
  products: { productId: string; count: number }[];
  totalCount: number;
  paymentMethod: "cash" | "visa";
  creationDate?: Date;
};

export default OrderType;
