import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "../components/common/Card/Card";
import Carousel from "../components/common/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../store/store";
import { useEffect } from "react";
import { singInUserAPI } from "../store/actionCreator/authActionCreator";
import { editUserAPI } from "../store/actionCreator/userActionCreator";
import { getAllOfferProductsAPI } from "../store/actionCreator/productActionCreator";

export default function Home() {
  const offers = useSelector((store: StoreType) => store.product.products);
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (!offers.length) dispatch(getAllOfferProductsAPI());
  }, []);

  return (
    <Container maxW="9xl">
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
          .slice(0, 5)
          .map((item: any) => (
            <Box>
              <Card
                title={item.name}
                imageUrl={"http://localhost:8080/" + item.images[0]}
                formattedPrice={item.price + ""}
                category="electronics"
                isOffer={item.offer}
                reviewCount={item.numOfReviews}
                rating={3}
              />
            </Box>
          ))}
      </SimpleGrid>

      {/* <Heading
        as="h2"
        size="2xl"
        marginTop={75}
        marginBottom={25}
        textAlign="left"
        textTransform="uppercase"
        color="secondary.100"
        isTruncated
        borderBottom="2px solid #aaa"
        padding="25px 0"
      >
        Top Products
      </Heading>
      <SimpleGrid minChildWidth="240px" columns={5} spacing={6} marginTop={3}>
        {topProducts.map((item) => (
          <Box>
            <Card
              title={item.name}
              imageUrl={item.images[0]}
              formattedPrice={item.price + ""}
              category="electronics"
              isOffer={item.offer}
              reviewCount={item.numOfReviews}
              rating={3}
            />
          </Box>
        ))}
      </SimpleGrid> */}
    </Container>
  );
}
