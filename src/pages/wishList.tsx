import { useEffect, useState } from "react";
import SmallCard from "../components/common/SmallCard/SmallCard";
import { Grid, Heading, useColorModeValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../store/store";
import {
  getMeAPI,
  getMyCartAPI,
} from "../store/actionCreator/userActionCreator";

export default function WishList() {
  const dispatch: any = useDispatch();

  const products = useSelector((store: StoreType) => store.user.user.wishList);
  const cart = useSelector((store: StoreType) => store.user.cart);
  let user = useSelector((store: StoreType) => store.user.user);

  useEffect(() => {
    if (!user) dispatch(getMeAPI());
  }, []);
  useEffect(() => {
    if (!products?.length && user?._id) dispatch(getMyCartAPI());
    // console.log(cart)
  }, [user]);

  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const setTotalCountF = () => {
    let productsCount = 0;
    products?.products?.map((product: any) => {
      productsCount += product.count;
      return setTotalCount(productsCount);
    });
  };

  const[empty, setEmpty]=useState(false)
  const[notEmpty, setnotEmpty]=useState(true)
 
  useEffect(()=>{
    if(!products.products?.length){
     setEmpty(true)
     setnotEmpty(false)
      console.log(products.products.length)
    }
  },[products])

  return (
    <div>
      {notEmpty && 
      <><Heading
          fontSize={"3xl"}
          fontFamily={"body"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("yellow.500", "white")}
          ml={{ sm: "10", md: "90" }}
        >
          Wish List
        </Heading><Grid templateColumns={{ sm: "repeate(1, 1fr)", md: "repeat(2, 1fr)" }}>
            {products?.products?.map((product: any) => {
              return (
                <SmallCard
                  _id={product.product._id}
                  name={product.name}
                  count={product.count}
                  categoryName={product.categoryName}
                  images={product.images}
                  price={product.product.price}
                  color={product.color}
                  discount={product.product.discount}
                  buttonName=" Add to Cart " />
              );
            })}
          </Grid></>}
        {empty && (
          <Heading textAlign={"center"} color={"gray.300"} mt={30}>
            Your Cart is Empty
          </Heading>
        )}
    </div>
  );
}
