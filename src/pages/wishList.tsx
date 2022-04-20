import { useEffect, useState } from "react";
import SmallCard from "../components/common/SmallCard/SmallCard";
import {  Grid, Heading, useColorModeValue } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../store/store";
import { getMeAPI, getMyCartAPI } from "../store/actionCreator/userActionCreator";

export default function WishList() {
  const dispatch: any = useDispatch();

  const products = useSelector((store: StoreType) => store.user.user.wishList);
  const cart = useSelector((store: StoreType) => store.user.cart);
  let user = useSelector((store: StoreType) => store.user.user);


  useEffect(() => {
    if (!user) dispatch(getMeAPI());
    
  }, []);
  useEffect(()=>{
    if(!products?.length && user?._id) dispatch(getMyCartAPI())
    // console.log(cart)
  },[user])

  
  const [totalCount, setTotalCount]=useState(0)
  const [totalPrice, setTotalPrice]=useState(0)

  const setTotalCountF = () => {
    let productsCount = 0;
    products?.products?.map((product:any) => {
      productsCount += product.count;
      return setTotalCount(productsCount);
    });
  };



  return (
    <div>
      <Heading
        fontSize={"3xl"}
        fontFamily={"body"}
        color={useColorModeValue("yellow.500", "white")}
       ml={{sm:"10",md:"90"}}

      >

        Wish List
      </Heading>
    <Grid templateColumns={{sm: "repeate(1, 1fr)" ,md:"repeat(2, 1fr)"}} >
      {products?.products?.map((product:any) => {
        return (
          <SmallCard
          _id={product.product._id}
            name={product.name}
            count={product.count}
            categoryName={product.categoryName}
            images={product.images}
            price={product.price}
            color={product.color}
            discount={product.dicount}
            buttonName=" Add to Cart "
          />
        );
      })}
    </Grid>
    </div>
  );
}
