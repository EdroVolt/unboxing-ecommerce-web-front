import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Unboxing from "../apis/unboxing";
import CardDetail from "../components/common/CardDetail/CardDetail";


export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<any>();

  useEffect(() => {
    Unboxing.get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  return (
    <CardDetail
    _id={product?._id}
      name={product?.name}
      description={product?.description}
      count={product?.count}
      sizeCount={product?.sizeCount}
      category={product?.category}
      ingredients={product?.ingredients}
      images={product?.images}
      price={product?.price}
      discount={product?.discount}
      offer={product?.offer}
      reviews={product?.reviews}
    />

  );
}
