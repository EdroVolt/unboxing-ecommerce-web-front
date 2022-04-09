import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";

type CardProps = {
  name?: string;
  count?: number;
  categoryName?: string;
  images?: string;
  price?: number;
  discount?: number;
  offer?: boolean;
  color?: string;
  buttonName?: string;
};
export default function SmallCard({
  name,
  count = 0,
  categoryName,
  images,
  price = 0,
  buttonName,
}: CardProps) {

  function countLimit(count: number) {
    let countList=[]
    for (let i = 0; i < count; i++) {
      console.log(i)
      countList.push(<option>{i+1}</option>);
    }
    return countList
  }

  return (
    <Center mt={4} mr={500} >
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "70%" }}
        height={{ sm: "400px", md: "15rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("gray.100", "gray.200")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={0.25} bg="black">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              images
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"} color={useColorModeValue("yellow.500", "black")}>
            {name}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {categoryName}
          </Text>
          <Text color={useColorModeValue("gray.700", "gray.600")} px={3}>
            $ {price} USD
           </Text>
          <Stack direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
             
              fontWeight={"400"}
            >
             <Select color="black" bg={useColorModeValue("gray.100", "gray.400")}>{countLimit(count)}</Select>
            </Badge>
      
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
             <AddIcon/> {buttonName}
            </Button>
            <Button
              bg={useColorModeValue("gray.100", "gray.400")}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              <DeleteIcon/> Remove
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
