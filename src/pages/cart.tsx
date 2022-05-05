/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import emailjs, { send } from "emailjs-com";

import SmallCard from "../components/common/SmallCard/SmallCard";
import {
  Box,
  Button,
  Grid,
  Heading,
  Stack,
  Text,
  toast,
  useColorModeValue,
  useToast,
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
import { Spinner } from "@chakra-ui/spinner";
import ProductType from "../models/Product.model";
import { useNavigate } from "react-router";
import { orders } from "../router/routePaths";

export default function Cart() {
  const dispatch: any = useDispatch();
  const [disaple, setDisaple] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [notEmpty, setnotEmpty] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state: any) => state.user.user);

  const navigate = useNavigate();

  const toast = useToast();

  const sendEmail = (userOrder: any) => {
    emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICE_ID!,
      process.env.REACT_APP_EMAIL_SERVICE_ORDER!,
      { from_name: user?.name, user_id: user?._id, order: userOrder },
      process.env.REACT_APP_EMAIL_SERVICE_API_KEY!
    );
  };

  const order: OrderType = {
    products: user?.cart?.products?.map((product: any) => {
      return { product: product.product._id, count: product.count };
    }),
    totalCount: user?.cart?.products.length,
    paymentMethod: "cash",
  };

  const setTotalCountF = () => {
    let productsCount = 0;
    user?.cart?.products?.map((product: any) => {
      productsCount += product.count;
      return setTotalCount(productsCount);
    });
  };

  const checkOut = () => {
    setDisaple(true);
    dispatch(checkoutOrder(user._id, order))
      .then(() => {
        const userOrders = user?.orders;
        sendEmail(userOrders[userOrders?.length - 1]?._id);
        toast({
          title: "CheckOut Success",
          description: "please check your orders ",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        navigate(orders);
      })
      .catch((error: any) => {
        setDisaple(false);
        toast({
          title: `Opps `,
          description: `${error}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    dispatch(getMeAPI()).then(() => {});
  }, []);

  useEffect(() => {
    if (!user) dispatch(getMeAPI());
    else if (user?.cart?.products.length) {
      setEmpty(false);
      setnotEmpty(true);
    } else {
      setEmpty(true);
      setnotEmpty(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user?.cart?.products?.length && user?._id) dispatch(getMyCartAPI());
  }, [user]);

  return (
    <Box px="5" mb="5">
      {notEmpty && (
        <>
          <Heading
            fontSize={"3xl"}
            fontFamily={"body"}
            fontWeight={"bold"}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("yellow.500", "white")}
            ml={{ sm: "10", md: "90" }}
            mb={10}
          >
            Cart
          </Heading>
          {!user ? (
            <Spinner
              position={"absolute"}
              right={"50vw"}
              top={"25vh"}
              size="xl"
            />
          ) : (
            <>
              <Grid
                templateColumns={{
                  sm: "repeate(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
              >
                {user.cart?.products?.map((product: any) => {
                  return (
                    <SmallCard
                      key={product.product._id}
                      _id={product.product._id}
                      name={product.product.name}
                      count={product.count}
                      categoryName={product.categoryName}
                      images={product.product.images}
                      size={product.size}
                      price={product.product.price}
                      color={product.color}
                      discount={product.product.discount}
                      buttonName=" Add to WishList "
                    />
                  );
                })}
              </Grid>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "50%" }}
                // ml={{ sm: "1", md: "100" }}
                direction={{ base: "row", md: "row", lg: "row" }}
                justifyContent={"space-between"}
                margin={"auto"}
              >
                <Text ml={15} mt={3} mb={3} fontSize={{ sm: "xl", md: "xl" }}>
                  <Text fontWeight={"black"} display={"inline-block"} mr={2}>
                    Total Price
                  </Text>
                  : ${user.cart.totalPrice}
                </Text>
                <Button
                  disabled={disaple}
                  // colorScheme={useColorModeValue("gray.900", "gray.600")}
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
              </Stack>
            </>
          )}
        </>
      )}
      {empty && (
        <Heading textAlign={"center"} color={"gray.300"} mt={30}>
          Your Cart is Empty
        </Heading>
      )}
    </Box>
  );
}
