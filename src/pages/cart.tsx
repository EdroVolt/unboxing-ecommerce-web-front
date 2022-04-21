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
import {
  checkoutOrder,
  getMeAPI,
  getMyCartAPI,
} from "../store/actionCreator/userActionCreator";
import OrderType from "../models/Order.model";
import ProductType from "../models/Product.model";

export default function Cart() {
  const dispatch: any = useDispatch();
  const products = useSelector((store: StoreType) => store.user.user.cart);
  const cart = useSelector((store: StoreType) => store.user.cart);
  let user = useSelector((store: StoreType) => store.user.user);

 
  useEffect(() => {
    if (!user) dispatch(getMeAPI());
  }, []);

  useEffect(() => {
    if (!products?.products?.length) dispatch(getMyCartAPI());
  }, [user, products]);

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const order: OrderType = {
    products: products.products?.map((product: any) => {
      return { product: product.product._id, count: product.count };
    }),
    totalCount:products.products.length,
    paymentMethod: "cash",
  };

 const[empty, setEmpty]=useState(false)
 const[notEmpty, setnotEmpty]=useState(true)

 useEffect(()=>{
   if(!products.products?.length){
    setEmpty(true)
    setnotEmpty(false)
     console.log(products.products.length)
   }
 },[products])

  const setTotalCountF = () => {
    let productsCount = 0;
    products?.products?.map((product: any) => {
      productsCount += product.count;
      return setTotalCount(productsCount);
    });
  };

  const checkOut = () => {
    console.log(order);
    dispatch(checkoutOrder(user._id, order));
  };

  return (
    <div>

    {notEmpty &&  
     <><Heading
          fontSize={"3xl"}
          fontFamily={"body"}
          fontWeight={"bold"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("yellow.500", "white")}
          ml={{ sm: "10", md: "90" }}
          mb={10}
        >
          {" "}
          Cart{" "}
        </Heading><Grid templateColumns={{ sm: "repeate(1, 1fr)", md: "repeat(2, 1fr)" }}>
            {products?.products?.map((product: any) => {
              return (
                <SmallCard
                  _id={product.product._id}
                  name={product.product.name}
                  count={product.count}
                  categoryName={product.categoryName}
                  images={product.product.images}
                  size={product.size}
                  price={product.product.price}
                  color={product.color}
                  discount={product.product.discount}
                  buttonName=" Add to WishList " />
              );
            })}
          </Grid><Stack
            borderWidth="1px"
            borderRadius="lg"
            w={{ sm: "100%", md: "50%" }}
            // ml={{ sm: "1", md: "100" }}
            direction={{ base: "row", md: "row", lg: "row" }}
            justifyContent={"space-between"}
            margin={"auto"}
          >
            <Text
              ml={{ sm: "15", md: "15" }}
              mt={3}
              mb={3}
              fontSize={{ sm: "xl", md: "xl" }}
            >
              <Text fontWeight={"black"} display={"inline-block"} mr={2}>
                {" "}
                Total Price
              </Text>
              : ${products.totalPrice} USD
            </Text>
            <Button
              // eslint-disable-next-line react-hooks/rules-of-hooks
              colorScheme={useColorModeValue("gray.900", "gray.600")}
              variant="link"
              pr={15}
              mt={3}
              mb={3}
              textDecoration={"underline"}
              fontWeight={"bold"}
              fontSize={{ sm: "l", md: "xl" }}
              onClick={checkOut}
            >
              <CheckIcon mr={1} /> Check Out
            </Button>
          </Stack></>
      }
      {empty && <Heading textAlign={"center"} color={"gray.300"}  mt={30}>Your Cart is Empty</Heading> }
    </div>
  );
}
