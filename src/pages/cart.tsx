import { useEffect, useState } from "react";
import SmallCard from "../components/common/SmallCard/SmallCard";
import { Button, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Cart() {
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
        {" "}
        Cart{" "}
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
            buttonName=" Add to WishList "
          />
        );
      })}
      <Button
        colorScheme={useColorModeValue("gray.900", "gray.600")}
        variant="outline"
        ml={200}
        mt={3}
        mb={3}
        fontSize={"xl"}
      >
        Check Out
      </Button>
    </div>
  );
}
