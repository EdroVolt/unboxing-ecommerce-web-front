import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  addProductToMyCartAPI,
  addProductToMyWishListAPI,
  deleteProductFromMyCartAPI,
  deleteProductFromMyWishListAPI,
  getMeAPI,
} from "../../../store/actionCreator/userActionCreator";
import { useDispatch } from "react-redux";
import "../CardDetail/CardDetail";

type CardProps = {
  _id: string;
  name?: string;
  count?: number;
  categoryName?: string;
  images?: string;
  price?: number;
  size?: string;
  discount?: number;
  offer?: boolean;
  color?: string;
  buttonName?: string;
};
export default function SmallCard({
  _id,
  name,
  count = 1,
  categoryName,
  images,
  price = 0,
  buttonName,
  size,
  discount = 0,
}: CardProps) {
  const dispatch: any = useDispatch();

  const deleteProduct = (_id: string) => {
    if (buttonName === " Add to Cart ") {
      dispatch(deleteProductFromMyWishListAPI(_id)).then(() => {
        dispatch(getMeAPI());
      });
      console.log(_id, buttonName);
    } else if (buttonName === " Add to WishList ") {
      dispatch(deleteProductFromMyCartAPI(_id)).then(() => {
        dispatch(getMeAPI());
      });
    }
  };
  const cart = {
    product: _id,
    count: count,
  };
  const cartHandler = (cart: any, _id: string) => {
    if (buttonName === " Add to Cart ") {
      dispatch(addProductToMyCartAPI(cart)).then(() => {
        dispatch(deleteProductFromMyWishListAPI(_id)).then(() => {
          dispatch(getMeAPI());
        });
      });
    } else if (buttonName === " Add to WishList ") {
      dispatch(addProductToMyWishListAPI(cart)).then(() => {
        dispatch(deleteProductFromMyCartAPI(_id)).then(() => {
          dispatch(getMeAPI());
        });
      });
    }
  };

  return (
    <Box ml={{ sm: "1", md: "20" }} mb={5}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "90%" }}
        height={{ sm: "35rem", md: "27rem", lg: "17rem" }}
        direction={{ base: "column", md: "column", lg: "row" }}
        bg={useColorModeValue("white.800", "gray.200")}
      >
        <Flex flex={0.75} bg="black">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={`http://localhost:8080/${images}`}
          />
        </Flex>
        <Stack
          flex={1.5}
          flexDirection="column"
          justifyContent="center"
          p={1}
          pt={2}
        >
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={"bold"}
            color={useColorModeValue("gray.800", "black")}
            px={3}
          >
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4} px={3}>
            {categoryName}
          </Text>
          <Text
            color={useColorModeValue("gray.600", "gray.500")}
            fontWeight={300}
            fontSize={"xl"}
            className={discount > 0 ? "discout" : " "}
            px={3}
          >
            ${price} USD
          </Text>
          {discount > 0 && (
            <Text
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "gray.800")}
              fontWeight={300}
              fontSize={"xl"}
              px={3}
            >
              {" "}
              ${price - (price * discount) / 100} USD
            </Text>
          )}
          <Stack direction={"row"} mt={6}>
            <Stack
              width={"100%"}
              direction={"column"}
              justifyContent={"space-between"}
            >
              {size && (
                <Text fontSize={"l"} px={3}>
                  Size: {size}
                </Text>
              )}
              <Text
                fontSize={"l"}
                px={3}
                color={useColorModeValue("gray.600", "black")}
              >
                Count: {count}
              </Text>
            </Stack>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              fontSize={"sm"}
              // rounded={"xl"}
              bg="gray.300"
              color={"black"}
              _hover={{
                bg: "gray.400",
              }}
              _focus={{
                bg: "gray.400",
              }}
              onClick={() => cartHandler(cart, _id)}
            >
              {buttonName}
            </Button>
            <Button
              bg={useColorModeValue("red.600", "red.500")}
              fontSize={"xs"}
              _focus={{
                bg: "red.400",
              }}
              _hover={{
                bg: "red.400",
              }}
              color={"white"}
              onClick={() => {
                deleteProduct(_id);
              }}
            >
              <DeleteIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
