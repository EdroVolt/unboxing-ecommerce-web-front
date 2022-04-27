import CategoryType from "./Category.model";
import ReviewType from "./Review.model";
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
  reviews?: ReviewType[];
  numOfReviews?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export default ProductType;
