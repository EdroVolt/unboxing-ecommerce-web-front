import { Grid, Link } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Card from "../components/common/Card/Card"

export default function Products(){
    const [products, setProducts] = useState([
        {
          name: "Watch",
          count: 6,
          categoryName: "Electronics",
          images: "",
          price: 500,
          color: "black",
          isOffer: false,
          reviewCount:5,
          rating:5
        },
        {
          name: "Watch",
          count: 6,
          categoryName: "Electronics",
          images: "",
          price: 500,
          color: "blue",
          isOffer: true,
          reviewCount:4,
          rating:3

        },
        {
          name: "Watch",
          count: 6,
          categoryName: "Electronics",
          images: "",
          price: 500,
          color: "red",
          isOffer: false,
          reviewCount:3,
          rating:2

        },
        {
            name: "Watch",
            count: 6,
            categoryName: "Electronics",
            images: "",
            price: 500,
            color: "red",
            isOffer: false,
            reviewCount:3,
            rating:2
  
          },
          {
            name: "Watch",
            count: 6,
            categoryName: "Electronics",
            images: "",
            price: 500,
            color: "red",
            isOffer: false,
            reviewCount:3,
            rating:2
  
          },
      ])

      return (
          <Grid templateColumns="repeat(5, 1fr)" gap={6} ml={6} mr={6}>
              {products.map((product) => {
                  return <><Card
                      //   imageUrl={product.images} 
                      title={product.name}
                      rating={product.rating}
                      isOffer={product.isOffer}
                      category={product.categoryName}
                      formattedPrice={product.price + ""}
                      reviewCount={product.reviewCount}
                  ></Card></>
              })}
          </Grid>
      )


}