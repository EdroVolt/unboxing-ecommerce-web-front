/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import SmallCard from "../components/common/SmallCard/SmallCard";
import {
  Box,
  Button,
  Grid,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Cart() {
  const [products, setProducts] = useState([
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images:
        "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
      price: 500,
      color: "red",
      size: "xl",
    },
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images:
        "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
      price: 500,
      color: "red",
      size: "xl",
    },
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images:
        "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
      price: 500,
      color: "red",
      size: "xl",
    },
  ]);

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const setTotalCountF = () => {
    let productsCount = 0;
    products.map((product) => {
      productsCount += product.count;
      return setTotalCount(productsCount);
    });
  };

  const setTotalPriceF = () => {
    let productsPrice = 0;
    products.map((product) => {
      console.log(product.price);
      productsPrice += product.price;
      console.log(productsPrice);
      return setTotalPrice(productsPrice);
    });
  };

  return (
    <div>
      <Heading
        fontSize={"3xl"}
        fontFamily={"body"}
        color={useColorModeValue("yellow.500", "white")}
        ml={{ sm: "10", md: "90" }}
        mb={10}
      >
        {" "}
        Cart{" "}
      </Heading>
      <Grid templateColumns={{ sm: "repeate(1, 1fr)", md: "repeat(2, 1fr)" }}>
        {products.map((product) => {
          return (
            <SmallCard
              name={product.name}
              count={product.count}
              categoryName={product.categoryName}
              images={product.images}
              size={product.size}
              price={product.price}
              color={product.color}
              buttonName=" Add to WishList "
            />
          );
        })}
      </Grid>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "41%" }}
        ml={{ sm: "1", md: "20" }}
        direction={{ base: "row", md: "row", lg: "row" }}
        justifyContent={"space-between"}
      >
        <Text
          ml={{ sm: "10", md: "15" }}
          mt={3}
          mb={3}
          fontSize={{ sm: "xl", md: "xl" }}
        >
          Total Price: {totalPrice}
        </Text>
        <Button
          colorScheme={useColorModeValue("gray.900", "gray.600")}
          variant="link"
          pr={15}
          mt={3}
          mb={3}
          fontSize={{ sm: "l", md: "xl" }}
          onClick={setTotalPriceF}
        >
          <CheckIcon mr={1} /> Check Out
        </Button>
      </Stack>
    </div>
  );
}
