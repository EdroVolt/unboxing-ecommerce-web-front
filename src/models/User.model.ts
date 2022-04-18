type UserType = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  address?: {
    city: string;
    street: string;
    government: string;
  };
  orders?: [
    {
      products: { product: string; count: number }[];
      totalCount: number;
      paymentMethod: "cash" | "visa";
      createdAt?: Date;
    }
  ];
  cart?: {
    products: { product: string; count: number }[];
    totalCount: number;
  };
  wishList?: {
    products: { product: string; count: number }[];
    totalCount: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
};

export default UserType;
