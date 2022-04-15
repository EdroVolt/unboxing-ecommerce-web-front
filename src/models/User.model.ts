type UserType = {
  _id?: string | number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: {
    city: string;
    street: string;
    government: string;
  };
  orders: {
    products: { productId: string; count: number }[];
    totalCount: number;
    paymentMethod: "cash" | "visa";
    creationDate?: Date;
  }[];
  cart: {
    products: { productId: string; count: number }[];
    totalCount: number;
  }[];
  wishList: {
    products: { productId: string; count: number }[];
    totalCount: number;
  }[];
};

export default UserType;
