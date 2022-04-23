import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import React, { useEffect, useState } from "react";
import "./CardDetail.css";
import { StarIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import { Avatar } from "@chakra-ui/react";
import { FavouriteButton } from "../Favourite";
import ProductType from "../../../models/Product.model";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../../store/store";
import {
  addProductToMyCartAPI,
  addProductToMyWishListAPI,
  deleteProductFromMyWishListAPI,
  getMeAPI,
} from "../../../store/actionCreator/userActionCreator";

export default function Simple({
  _id = "",
  name = " ",
  description,
  count = 1,
  sizeCount = {
    xs: 0,
    s: 0,
    md: 0,
    l: 0,
    xl: 0,
  },
  category,
  ingredients,
  images = ["mm"],
  price = 0,
  discount = 0,
  offer = true,
  reviews,
}: ProductType) {
  const dispatch: any = useDispatch();
  let user = useSelector((store: StoreType) => store.user.user);
  const [userCount, setUserCount] = useState(0);
  const [userSize, setUserSize] = useState("");
  const toast = useToast();
  const [selectedCount, setSelectedCount] = useState(count);
  const [apled, setApled] = useState(false);
  const [apledd, setApledd] = useState(true);
  const cart = {
    product: _id,
    count: selectedCount,
    size: userSize,
  };

  const [favIsSelected, setFavIsSelected] = useState(false);

  function countLimit(count: number) {
    let countList = [];
    for (let i = 0; i < count; i++) {
      console.log(i);
      countList.push(<option>{i + 1}</option>);
    }
    return countList;
  }

  const wishListHandler = (cart: any) => {
    dispatch(addProductToMyWishListAPI(cart))
      .then(() => {
        toast({
          title: "Added to WishList ",
          status: "info",
          duration: 4000,
          isClosable: true,
        });
      })
      .catch(() => {
        dispatch(deleteProductFromMyWishListAPI(_id)).then(() => {
          toast({
            title: "Removed",
            status: "warning",
            duration: 4000,
            isClosable: true,
          });
        });
      });
  };

  useEffect(() => {
    dispatch(getMeAPI())
  }, []);

  useEffect(() => {
    setFavIsSelected(
      !!user?.wishList?.products?.find((product: any) => {
        return product?.product?._id === _id;
      })
    );
  });

  // const [userCount, setUserCount] = useState(0);
  // const [userSize, setUserSize] = useState("");
  // const [selectedCount, setSelectedCount] = useState(count);

  // const cart = {
  //   product: _id,
  //   count: selectedCount,
  // };
  const cartHandler = (cart: any) => {
    if (!userSize) {
      toast({
        title: `Opps `,
        description: `You forget to choose your size`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(addProductToMyCartAPI(cart))
        .then(() => {
          toast({
            title: `Success `,
            description: `You add ${name} to your cart`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((error: any) => {
          console.log(error);
          toast({
            title: `Error `,
            description: `${name} is arleady added`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    }
    console.log(cart);
  };

  const increaseCount = () => {
    if (selectedCount <= userCount) {
      setSelectedCount(selectedCount + 1);
      setApledd(false);
    } else {
      setApled(true);
    }
  };

  const decreaseCount = () => {
    if (selectedCount > 1) {
      setSelectedCount(selectedCount - 1);
      setApled(false);
    } else {
      setApledd(true);
    }
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              //images[0]
              `http://localhost:8080/${images[0]}`
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }} position={"relative"}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {name}
            </Heading>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
              textAlign={"left"}
            >
              {category?.name}
            </Text>
            <Box display="flex" alignItems="baseline" mt={0}>
              {offer && (
                <Badge borderRadius="full" colorScheme="teal" marginTop="0">
                  offer
                </Badge>
              )}
            </Box>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              className={discount > 0 ? "discout" : " "}
            >
              ${price} USD
            </Text>
            {discount > 0 && (
              <Text
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue("gray.500", "gray.400")}
                fontWeight={300}
                fontSize={"xl"}
              >
                {" "}
                ${price - (price * discount) / 100} USD
              </Text>
            )}
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Text fontSize={"lg"}>{description}</Text>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {ingredients?.map((ingred) => {
                  return (
                    <List spacing={2}>
                      <ListItem>{ingred}</ListItem>{" "}
                    </List>
                  );
                })}
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={"s"}
                fontWeight={"bond"}
                textAlign={"left"}
                mb={2}
              >
                Size
              </Text>
              <List spacing={2}>
                <ListItem>
                  {sizeCount?.xl > 0 && (
                    // eslint-disable-next-line no-sequences
                    <Button
                      ml={1}
                      onClick={() => [
                        setUserCount(sizeCount.xl),
                        setUserSize("xl"),
                        setSelectedCount(1),
                        setApled(false),
                        setApledd(true),
                      ]}
                    >
                      XL
                    </Button>
                  )}
                  {sizeCount?.l > 0 && (
                    <Button
                      ml={1}
                      onClick={() => [
                        setUserCount(sizeCount.l),
                        setUserSize("l"),
                        setSelectedCount(1),
                        setApled(false),
                        setApledd(true),
                      ]}
                    >
                      L
                    </Button>
                  )}
                  {sizeCount?.md > 0 && (
                    <Button
                      ml={1}
                      onClick={() => [
                        setUserCount(sizeCount.md),
                        setUserSize("md"),
                        setSelectedCount(1),
                        setApled(false),
                        setApledd(true),
                      ]}
                    >
                      md
                    </Button>
                  )}
                  {sizeCount?.s > 0 && (
                    <Button
                      ml={1}
                      onClick={() => [
                        setUserCount(sizeCount.s),
                        setUserSize("s"),
                        setSelectedCount(1),
                        setApled(false),
                        setApledd(true),
                      ]}
                    >
                      S
                    </Button>
                  )}
                  {sizeCount?.xs > 0 && (
                    <Button
                      ml={1}
                      onClick={() => [
                        setUserCount(sizeCount.xs),
                        setUserSize("xs"),
                        setSelectedCount(1),
                        setApled(false),
                        setApledd(true),
                      ]}
                    >
                      XS
                    </Button>
                  )}
                </ListItem>
              </List>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={"s"}
                fontWeight={"bond"}
                textAlign={"left"}
                mb={2}
                mt={2}
              >
                Count
              </Text>

              <Box
                display={"flex"}
                flexDirection={"row-reverse"}
                alignItems={"stretch"}
                gap={"px"}
              >
                <Button
                  color={useColorModeValue("black", "gray.800")}
                  mr={1}
                  bg={"gray.100"}
                  onClick={increaseCount}
                  disabled={apled}
                >
                  +
                </Button>
                <Text
                  bg={"gray.100"}
                  // width={"xs"}
                  width={"100%"}
                  display={"inline-block"}
                  padding={"1%"}
                  borderRadius={"7px"}
                  textAlign="center"
                  color={useColorModeValue("black", "gray.800")}
                >
                  {selectedCount}
                </Text>
                <Button
                  bg={"gray.100"}
                  ml={1}
                  onClick={decreaseCount}
                  disabled={apledd}
                  color={useColorModeValue("black", "gray.900")}
                >
                  -
                </Button>
              </Box>
            </Box>
          </Stack>

          <FavouriteButton
            position="absolute"
            top="-7"
            right="4"
            w={"50px"}
            bg={favIsSelected ? "red.700" : "red.200"}
            color={favIsSelected ? "white" : "black"}
            _hover={{
              bg: "blue.200",
            }}
            children={"Add to wish list"}
            aria-label={`Add ${name} to your favourites`}
            onClick={() => {
              // setFavIsSelected(!favIsSelected);
              wishListHandler(cart);
            }}
          />
          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => cartHandler(cart)}
          >
            Add To Cart
            <chakra.a href={"#"} display={"flex"} marginStart={5}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>{" "}
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <List>
          <ListItem>
            <Text
              as={"span"}
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Reviews:
            </Text>{" "}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviews?.length} reviews
            </Box>
            {reviews?.map((review) => {
              return (
                <List spacing={2} mt={4}>
                  <Avatar
                    src="https://bit.ly/broken-link"
                    size="sm"
                    display="inline-block"
                  />
                  <Text fontWeight={"bold"} display="inline-block" ml="2">
                    {review?.userId?.name}
                    {console.log(review)}
                  </Text>
                  <List spacing={2}>
                    <ListItem ml="10">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i >= review?.rate ? "gray.300" : "blue.400"}
                          />
                        ))}
                    </ListItem>
                  </List>
                  <ListItem margin={10}>{review?.comment}</ListItem>{" "}
                </List>
              );
            })}
          </ListItem>
        </List>
      </SimpleGrid>
    </Container>
  );
}
