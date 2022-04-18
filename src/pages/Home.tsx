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

export default function Home() {
  const offers = [
    {
      id: "1",
      name: "offer 1",
      images: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"],
      price: 55,
      offer: true,
      numOfReviews: 10,
    },
    {
      id: "2",
      name: "offer 2",
      images: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"],
      price: 100,
      offer: true,
      numOfReviews: 25,
    },
    {
      id: "3",
      name: "offer 3",
      images: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"],
      price: 250,
      offer: true,
      numOfReviews: 0,
    },
    {
      id: "4",
      name: "offer 4",
      images: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"],
      price: 25,
      offer: true,
      numOfReviews: 50,
    },
    {
      id: "5",
      name: "offer 5",
      images: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"],
      price: 333,
      offer: true,
      numOfReviews: 6,
    },
  ];

  const user = useSelector((store: StoreType) => store.auth.user);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(singInUserAPI("edro11@gamil.com", "12345678"));
  }, []);

  const topProducts = [
    {
      id: "1",
      name: "offer 1",
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      price: 55,
      offer: false,
      numOfReviews: 10,
    },
    {
      id: "2",
      name: "offer 2",
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      price: 100,
      offer: false,
      numOfReviews: 25,
    },
    {
      id: "3",
      name: "offer 3",
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      price: 250,
      offer: false,
      numOfReviews: 0,
    },
    {
      id: "4",
      name: "offer 4",
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      price: 25,
      offer: false,
      numOfReviews: 50,
    },
    {
      id: "5",
      name: "offer 5",
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      price: 333,
      offer: false,
      numOfReviews: 6,
    },
  ];
  return (
    <Container maxW="9xl">
      <Carousel>
        <Image
          objectFit="contain"
          src="https://img.freepik.com/free-vector/realistic-christmas-sale-banner-with-red-page_1361-3133.jpg?w=2000"
          alt="Dan Abramov"
        />
        <Image
          objectFit="contain"
          src="https://img.freepik.com/free-vector/realistic-christmas-sale-banner-with-red-page_1361-3133.jpg?w=2000"
          alt="Dan Abramov"
        />
        <Image
          objectFit="contain"
          src="https://img.freepik.com/free-vector/realistic-christmas-sale-banner-with-red-page_1361-3133.jpg?w=2000"
          alt="Dan Abramov"
        />
      </Carousel>

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
      <SimpleGrid minChildWidth="240px" columns={5} spacing={6} marginTop={3}>
        {offers.map((item) => (
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
      </SimpleGrid>

      <Heading
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
      </SimpleGrid>
    </Container>
  );
}
