import { useEffect, useState } from "react";
import SmallCard from "../components/common/SmallCard/SmallCard";
import {  Heading, useColorModeValue } from "@chakra-ui/react";

export default function WishList() {
  const [products, setProducts] = useState([
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images: "",
      price: 500,
      color: "red",
    },
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images: "",
      price: 500,
      color: "red",
    },
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images: "",
      price: 500,
      color: "red",
    },
  ]);

  return (
    <div>
      <Heading
        fontSize={"3xl"}
        fontFamily={"body"}
        color={useColorModeValue("yellow.500", "white")}
        ml={200}
      >

        Wish List
      </Heading>
      {products.map((product) => {
        return (
          <SmallCard
            name={product.name}
            count={product.count}
            categoryName={product.categoryName}
            images={product.images}
            price={product.price}
            color={product.color}
            buttonName=" Add to Cart "
          />
        );
      })}
    </div>
  );
}
