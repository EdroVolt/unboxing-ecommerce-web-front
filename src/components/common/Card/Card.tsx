import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Image,
  Skeleton,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {} from "react-icons";

type CardProps = {
  imageUrl?: string;
  imageAlt?: string;
  beds?: number;
  baths?: number;
  title: string;
  formattedPrice?: string;
  reviewCount?: number;
  rating?: number;
  isOffer?: boolean;
  color?: string;
  category?: string;
};

const props = {
  title: "Modern home in city center in the heart of historic Los Angeles",
};

export default function Card({
  imageUrl = "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  imageAlt,
  title,
  formattedPrice,
  reviewCount,
  rating = 0,
  category,
  isOffer = false,
  color = "gray.200",
}: CardProps) {
  return (
    <Box
      bg={useColorModeValue(color, "gray.700")}
      h="full"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      color={"black"}
    >
      {!imageUrl ? (
        <Skeleton w="full" h="240"></Skeleton>
      ) : (
        <Image
          loading="lazy"
          src={`https://unboxingjs.herokuapp.com//${imageUrl}`}
          alt={imageAlt}
          w="full"
          h="240"
        />
      )}

      <VStack align="flex-start" p="6">
        <Box display="flex" alignItems="baseline">
          {isOffer && (
            <Badge borderRadius="full" pe="2" colorScheme="teal">
              offer
            </Badge>
          )}
          <Box
            color={useColorModeValue("gray.500", "gray.100")}
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={isOffer ? "2" : "0"}
          >
            {category} category
          </Box>
        </Box>

        <Box
          color={useColorModeValue("gray.900", "gray.100")}
          mt="1"
          fontWeight="semibold"
          as="h4"
          textAlign="start"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box
          color={useColorModeValue("gray.900", "gray.100")}
          textAlign="start"
        >
          {formattedPrice}
          <Box
            color={useColorModeValue("gray.600", "gray.400")}
            as="span"
            fontSize="sm"
          >
            $
          </Box>
        </Box>

        {reviewCount ? (
          <Box display="flex" mt="auto" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i > rating ? "gray.300" : "blue.400"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviewCount} reviews
            </Box>
          </Box>
        ) : (
          <Box as="span" ms="auto" color="gray.600" fontSize="sm">
            no reviews
          </Box>
        )}
      </VStack>
    </Box>
  );
}
