import { useEffect, useState } from 'react';
import CardDetail from '../components/common/CardDetail/CardDetail'

export default function ProductDetail(){
    const [product, setproduct] = useState({
        name: "watch" ,
        description: "loreammmmm",
        count: 5,
        sizeCount: {
            xs: 3,
            s: 4,
            md: 2,
            l: 1,
            xl: 5,
        },
        categoryName:"Electronics",
        ingredients:["steel", "steel", "steel", "km;"],
        images:"",
        price: 550 ,
        discount: 0,
        offer: false,
        reviews:[
           { userName:"menna",
            comment:"this product requires",
            rate:4
           
           ,},
           { userName:"menna",
           comment:"this product requires",
           rate:4
          
          ,},
           { userName:"menna",
          comment:"this product requires",
          rate:4
         
         ,}

        ],
        color:"red",
    })


    //const productId=params.id


    return(
    <CardDetail 
        
    name={product.name}
    description={product.description}
    count={product.count}
    sizeCount={product.sizeCount}
    categoryName={product.categoryName}
    ingredients={product.ingredients}
    images={product.images}
    price={product.price}
    discount={product.discount}
    offer={product.offer}
    reviews={product.reviews}
    color={product.color}
    buttonName="Add To Card"
    />

    )

}