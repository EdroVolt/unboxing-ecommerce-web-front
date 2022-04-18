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
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";

type CardProps = {
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
  name,
  count = 1,
  categoryName,
  images,
  price = 0,
  buttonName,
  size,
}: CardProps) {
  return (
    <Box ml={{ sm: "1", md: "20" }} mb={5}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "90%" }}
        height={{ sm: "35rem", md: "27rem", lg: "15rem" }}
        direction={{ base: "column", md: "column", lg: "row" }}
        bg={useColorModeValue("white.800", "gray.200")}
      >
        <Flex flex={0.75} bg="black">
          <Image objectFit="cover" boxSize="100%" src={images} />
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
            color={useColorModeValue("yellow.500", "black")}
            px={3}
          >
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4} px={3}>
            {categoryName}
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.600")} px={3}>
            $ {price} USD
          </Text>
          <Stack direction={"row"} mt={6}>
            <Stack
              width={"100%"}
              direction={"column"}
              justifyContent={"space-between"}
            >
           {size &&   <Text fontSize={"l"}  px={3}>Size: {size}</Text>}
              <Text fontSize={"l"}  px={3}>Count: {count}</Text>
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
              rounded={"full"}
              bg={"blue.500"}
              color={"white"}
              _hover={{
                bg: "blue.600",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              <AddIcon mr={1} /> {buttonName}
            </Button>
            <Button
              bg={useColorModeValue("gray.100", "gray.400")}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              <DeleteIcon mr={1} /> Remove
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
