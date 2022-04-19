import CategoryType from "./Category.model";
import UserType from "./User.model";

type ProductType = {
  _id?: string | number;
  name: string;
  description: string;
  count: number;
  sizeCount: {
    xs: number;
    s: number;
    md: number;
    l: number;
    xl: number;
  };
  category: CategoryType;
  ingredients?: string[];
  images: string[];
  price: number;
  discount?: number;
  offer?: boolean;
  reviews?: [
    {
      userId: UserType;
      comment: string;
      rate: number;
    }
  ];
  numOfReviews?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export default ProductType;
