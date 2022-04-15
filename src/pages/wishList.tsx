import { useEffect, useState } from "react";
import SmallCard from "../components/common/SmallCard/SmallCard";
import {  Grid, Heading, useColorModeValue } from "@chakra-ui/react";

export default function WishList() {
  const [products, setProducts] = useState([
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images: "",
      price: 500,
      color: "red",
    },
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images: "",
      price: 500,
      color: "red",
    },
    {
      name: "Watch",
      count: 6,
      categoryName: "Electronics",
      images: "",
      price: 500,
      color: "red",
    },
  ]);
  const [totalCount, setTotalCount]=useState(0)
  const [totalPrice, setTotalPrice]=useState(0)

  const setTotalCountF=() =>{
   let  productsCount=0;
   products.map((product)=>{
     console.log(product.count)
    productsCount+=product.count
    console.log(productsCount)
    return setTotalCount(productsCount)
   })
  }

  const setTotalPriceF=() =>{
    let  productsPrice=0;
    products.map((product)=>{
      console.log(product.price)
     productsPrice+=product.price
     console.log(productsPrice)
     return setTotalCount(productsPrice)
    })
   }

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
      {products.map((product) => {
        return (
          <SmallCard
            name={product.name}
            count={product.count}
            categoryName={product.categoryName}
            images={product.images}
            price={product.price}
            color={product.color}
            buttonName=" Add to Cart "
          />
        );
      })}
    </Grid>
    </div>
  );
}
