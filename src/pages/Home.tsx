import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Card from "../components/common/Card/Card";
import Carousel from "../components/common/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../store/store";
import { useEffect } from "react";
import { singInUserAPI } from "../store/actionCreator/authActionCreator";
import { editUserAPI } from "../store/actionCreator/userActionCreator";
import { getAllOfferProductsAPI } from "../store/actionCreator/productActionCreator";
import { Link } from "react-router-dom";

export default function Home() {
  const offers = useSelector((store: StoreType) => store.product.products);
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (!offers.length) dispatch(getAllOfferProductsAPI());
  }, []);

  return (
    <>
      <Box position={"relative"} marginTop={-8} height="93vh">
        <Box
          as="video"
          src="/assets/cover1.mp4"
          height="100%"
          autoPlay
          loop
          muted
          objectFit="cover"
          sx={{
            aspectRatio: "16/4",
          }}
        />
        <Text
          position={"absolute"}
          top={["20%", "20%", "30%", "30%"]}
          display={"block"}
          left="0"
          right="0"
          textAlign="center"
          fontSize="4.5rem"
          color="white"
          textShadow="2px 2px 2px black"
          fontWeight="extrabold"
          zIndex={5}
          fontFamily="monospace"
          fontStyle="italic"
        >
          Shopping, No Stopping ...
          <Text
            display={["none", "none", "none", "block"]}
            fontSize={"6rem"}
            color="gray.100"
            fontFamily={"'Inspiration', cursive !important"}
            ms="850"
          >
            "Unboxing"
          </Text>
        </Text>
      </Box>
      <Container maxW="8xl">
        <Heading
          as="h2"
          size="2xl"
          marginTop={5}
          marginBottom={25}
          textAlign="left"
          textTransform="uppercase"
          color="secondary.100"
          isTruncated
          borderBottom="2px solid #aaa"
          padding="25px 0"
        >
          Offers
        </Heading>
        <SimpleGrid minChildWidth="240px" columns={5} spacing={6} marginY={3}>
          {offers
            .reverse()
            .slice(0, 10)
            .map((item: any, i: number) => (
              <Link key={i} to={`/products/${item._id}`}>
                <Box mx="auto">
                  <Card
                    title={item.name}
                    imageUrl={item.images[0]}
                    formattedPrice={item.price + ""}
                    category="electronics"
                    isOffer={item.offer}
                    // reviewCount={item.numOfReviews}
                    reviews={item.reviews}
                    // rating={3}
                  />
                </Box>
              </Link>
            ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
