import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import{ 
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,

  }from'@chakra-ui/react'
import {useState} from 'react'
 

export default function ProductsList(){

    const [products, setProducts]=useState(
        [{
            name:"watch",
            description:"watch product",
            count:"5",
            sizeCount: {
                xs: 3,
                s: 4,
                md: 2,
                l: 1,
                xl: 5,
            },
            categoryId:"electronics",
            ingredients:["stell","steel"],
            images:[""],
            price:500,
            discount:20,
            offer:true,
   
        
        }]
    )

 return(  
   <>
    <TableContainer  width='85%' ml="14.5%">
    <Table variant='simple' colorScheme='gray' width='100%'>
      <Thead>
        <Tr>
          <Th  fontSize="xl">Image</Th>
          <Th  fontSize="xl">Name</Th>
          <Th  fontSize="xl">Description</Th>
          <Th  fontSize="xl">Price</Th>
          <Th  fontSize="xl">Sizes Count</Th>
          <Th  fontSize="xl">Category Name</Th>
          <Th  fontSize="xl">Discount</Th>
          <Th  fontSize="xl">Offer</Th>
          <Th  fontSize="xl">Operations</Th>
        </Tr>
      </Thead>
      <Tbody>
            {products.map((product)=>{
                return (
                    <Tr _hover={{bg:"gray.100", color: "black"}} >
                    <Td >{product.images[0]}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.description}</Td>
                    <Td >{product.price}</Td>
                    <Td >{product.sizeCount.xl}</Td>
                    <Td >{product.categoryId}</Td>
                    <Td >{product.discount}</Td>
                    <Td >{product.offer===true?<CheckIcon color="green"/>:<CloseIcon color="red"/>}</Td>
                    <Td >
                        <Button mr={2} >Edit</Button>
                        <Button>Delete</Button>
                    </Td>
        </Tr>
                )
            })}

      </Tbody>
    </Table>
  </TableContainer>
  {/* <Button mt={4}>Add New Product</Button> */}
  </>
  )
}