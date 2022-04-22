import { useEffect, useState } from "react";
import SmallCard from "../components/common/SmallCard/SmallCard";
import { Grid, Heading, useColorModeValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../store/store";
import {
  getMeAPI,
  getMyCartAPI,
  getMyWishListAPI,
} from "../store/actionCreator/userActionCreator";
import { Spinner } from "@chakra-ui/spinner";

export default function WishList() {
  const dispatch: any = useDispatch();

  let user = useSelector((store: StoreType) => store.user.user);

  useEffect(() => {
    dispatch(getMeAPI());
  }, []);

  useEffect(() => {
    if (!user) dispatch(getMeAPI());
    else if (user?.wishList?.products.length) {
      setEmpty(false);
      setnotEmpty(true);
      console.log(user?.wishList?.products);
    } else {
      setEmpty(true);
      setnotEmpty(false);
    }
  }, [user]);

  useEffect(() => {
    if (!user?.wishList?.products?.length && user?._id)
      dispatch(getMyWishListAPI());
  }, [user]);

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const setTotalCountF = () => {
    let productsCount = 0;
    user?.wishList?.products?.map((product: any) => {
      productsCount += product.count;
      return setTotalCount(productsCount);
    });
  };

  const [empty, setEmpty] = useState(false);
  const [notEmpty, setnotEmpty] = useState(true);

  return (
    <div>
      <>
        {!user ? (
          <Spinner
            position={"absolute"}
            right={"50vw"}
            top={"25vh"}
            size="xl"
          />
        ) : (
          <>
            {notEmpty && (
              <>
                <Heading
                   fontSize={"3xl"}
                   fontFamily={"body"}
                   fontWeight={"bold"}
                   // eslint-disable-next-line react-hooks/rules-of-hooks
                   color={useColorModeValue("yellow.500", "white")}
                   ml={{ sm: "10", md: "90" }}
                   mb={10}
                >
                  Wish List
                </Heading>
                <Grid
                  templateColumns={{
                    sm: "repeate(1, 1fr)",
                    md: "repeat(2, 1fr)",
                  }}
                >
                  {user?.wishList?.products?.map((product: any) => {
                    return (
                      <SmallCard
                        _id={product.product._id}
                        name={product.product.name}
                        count={product.count}
                        categoryName={product.categoryName}
                        images={product.images}
                        price={product.product.price}
                        color={product.color}
                        discount={product.product.discount}
                        buttonName=" Add to Cart "
                      />
                    );
                  })}
                </Grid>
              </>
            )}
            {empty && (
              <Heading textAlign={"center"} color={"gray.300"} mt={30}>
                Your wishList is Empty
              </Heading>
            )}
          </>
        )}
      </>
    </div>
  );
}
