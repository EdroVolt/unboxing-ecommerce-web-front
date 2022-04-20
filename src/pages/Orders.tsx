import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderType from "../models/Order.model";
import { getMeAPI, getUserOrdersAPI } from "../store/actionCreator/userActionCreator";
import { StoreType } from "../store/store";

export default function Orders() {
  const dispatch:any = useDispatch()
  const orders = useSelector((store:StoreType)=>store.user?.orders)
  let user = useSelector((store:StoreType)=>store.user?.user)
// let  userId="625ed2eb0ee7817fe8fe2efb"
  useEffect(()=>{
    if(!user) dispatch(getMeAPI())
  },[])

  useEffect(()=>{
    if(!orders.length && user?._id) dispatch(getUserOrdersAPI(user._id))
  },[user])

  console.log(user)
  

  return (
    <Box>
      <Heading
        fontSize={"3xl"}
        fontFamily={"body"}
        color={useColorModeValue("yellow.500", "gray.200")}
        ml={10}
        mb={5}
      >
        Your Orders
      </Heading>
      {orders?.map((order:OrderType) => {
        return (
          <Box
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("gray.200", "gray.200")}
          borderWidth="1px"
          overflow="hidden"
          w={"90%"}
          mb={6}
          ml={5}
     
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("black", "gray.800")}
          >
            <Text
              color="black"
              mb={5}
              ml={5}
              mt={5}
              fontSize={"xl"}
              fontFamily={"body"}
            >
              {order.createdAt}
            </Text>
            <hr style={{width:"100%" , background:"#d0d8db" , height:"1px", marginBottom:"10px"}}/>
            <Grid
              borderWidth="1px"
              borderRadius="lg"
              w={{ sm: "100%", md: "90%" }}
              ml={{sm:"2",md:"10", lg:"10"}}
              // mr={{sm:"2",md:"20"}}
              gap={6}
              mb={6}
              templateColumns={{sm: "repeat(1, 1fr)" , md:"repeat(3, 1fr)", xl:"repeat(5, 1fr)"}}
            >
              {order.products.map((product:any) => {
                return (
                  <Link to={`/products/${product.product._id}`}>
                  
                  <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: "100%", md: "100%" }}
                    height={{ sm: "476px", md: "10rem" }}
                    direction={{ base: "column", md: "row" }}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bg={useColorModeValue("white", "gray.100")}
                    padding={4}
                  >
                    <Flex flex={1} bg="blue.200">
                      <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={
                        product.product.image
                          // "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        }
                      />
                    </Flex>
                    <Stack
                      flex={1}
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      p={1}
                      pt={2}
                    >
                      <Heading fontSize={"2xl"} fontFamily={"body"}>
                        {product.product.name}
                      </Heading>
                      <Text
                        fontWeight={600}
                        color={"gray.500"}
                        size="sm"
                        mb={4}
                      >
                        {product.count}
                      </Text>
                    </Stack>
                  </Stack>
                  </Link>
                );
              })}
            </Grid>
            <hr style={{width:"100%" , background:"#d0d8db" , height:"1px", marginBottom:"10px"}}/>
            {/* <Button ml={5} mb={5}>Review This Order</Button> */}
          </Box>
        );
      })}
    </Box>
  );
}
