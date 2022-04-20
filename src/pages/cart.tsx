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
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../store/store";
import { checkoutOrder, getMeAPI, getUserCartAPI } from "../store/actionCreator/userActionCreator";
import OrderType from "../models/Order.model";
import ProductType from "../models/Product.model";

export default function Cart() {
  const dispatch: any = useDispatch();
  const products = useSelector((store: StoreType) => store.user.cart?.products);
  let user = useSelector((store: StoreType) => store.user.user);


  useEffect(() => {
    if (!user) dispatch(getMeAPI());
  }, []);

  useEffect(()=>{
    if(!products?.length && user?._id) dispatch(getUserCartAPI(user._id))
  },[user])

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const order:OrderType ={
    products:products?.map((product:any)=>{
      return {product : product.product._id, count:product.count}
    }),
    totalCount:totalCount,
    paymentMethod:"cash"
  }

  const setTotalCountF = () => {
    let productsCount = 0;
    products?.map((product:any) => {
      productsCount += product.count;
      return setTotalCount(productsCount);
    });
  };

  const setTotalPriceF = () => {
    let productsPrice = 0;
    products?.map((product:any) => {
      console.log(product.product.price);
      productsPrice=product.product.price*product.count
      // productsPrice += product.product.price;
      console.log(productsPrice);
      return setTotalPrice(productsPrice);
    });
  };

  const checkOut=()=>{
    console.log(order)
     dispatch(checkoutOrder(user._id,order))
  }

  useEffect(()=>{
    setTotalPriceF()
  },[products])

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
        {products?.map((product:any) => {
          return (
            <SmallCard
              name={product.product.name}
              count={product.count}
              categoryName={product.categoryName}
              images={product.product.images}
              size={product.size}
              price={product.product.price}
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
          onClick={checkOut}
        >
          <CheckIcon mr={1} /> Check Out
        </Button>
      </Stack>
    </div>
  );
}
