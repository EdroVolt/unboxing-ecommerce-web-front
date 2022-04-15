type ProductType = {
  id?: string | number;
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
  categoryId: string;
  ingredients: [string];
  images: [string];
  price: number;
  discount: number;
  offer: boolean;
  reviews: [
    {
      userId: string;
      comment: string;
      rate: number;
    }
  ];
  numOfReviews: number;
};

export default ProductType;
