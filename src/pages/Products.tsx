import { Grid, HStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/common/Card/Card";
import ProductType from "../models/Product.model";
import { getAllProductsAPI } from "../store/actionCreator/productActionCreator";
import { StoreType } from "../store/store";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/spinner";

export default function Products() {
  const dispatch: any = useDispatch();
  const [page, setPage] = useState(1);
  const products = useSelector((store: StoreType) => store?.product?.products);

  useEffect(() => {
    dispatch(getAllProductsAPI(page));
  }, [page]);

  return (
    <>
      {!products.length ? (
        <Spinner position={"absolute"} right={"50vw"} top={"25vh"} size="xl" />
      ) : (
        <>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(5, 1fr)",
            ]}
            gap={6}
            ml={6}
            mr={6}
          >
            <>
              {products?.map((product: ProductType) => {
                return (
                  <>
                    <Link key={product._id} to={`/products/${product._id}`}>
                      <Card
                        key={product._id}
                        imageUrl={product?.images[0]}
                        title={product?.name}
                        // rating={product.rating}
                        reviews={product?.reviews}
                        isOffer={product?.offer}
                        formattedPrice={product?.price + ""}
                        // reviewCount={product?.numOfReviews}
                        category={product?.category?.name}
                      ></Card>
                    </Link>
                  </>
                );
              })}
            </>
          </Grid>

          <HStack w={"full"} my="10" px="6">
            <Button
              bg="blue.400"
              color={"white"}
              disabled={page === 1 ? true : false}
              onClick={() => {
                if (page === 1) setPage(1);
                else setPage(page - 1);
              }}
            >
              {"< Prev"}
            </Button>
            <Button
              bg="gray.400"
              color={"white"}
              // disabled={page === numOfPages ? true : false}
              onClick={() => {
                // if (page === numOfPages) setPage(numOfPages);
                setPage(page + 1);
              }}
            >
              {"Next >"}
            </Button>
          </HStack>
        </>
      )}
    </>
  );
}
