import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsAPI } from "../../store/actionCreator/productActionCreator";
import { StoreType } from "../../store/store";

export default function ProductsList() {
  const products = useSelector((store: StoreType) => store?.product?.products);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAPI());
  }, []);

  return (
    <>
      <TableContainer width="85%" ml="14.5%">
        <Table variant="simple" colorScheme="gray" width="100%">
          <Thead>
            <Tr>
              <Th fontSize="xl">Image</Th>
              <Th fontSize="xl">Name</Th>
              <Th fontSize="xl">Description</Th>
              <Th fontSize="xl">Price</Th>
              <Th fontSize="xl">Sizes Count</Th>
              <Th fontSize="xl">Category Name</Th>
              <Th fontSize="xl">Discount</Th>
              <Th fontSize="xl">Offer</Th>
              <Th fontSize="xl">Operations</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((product: any) => {
              return (
                <Tr
                  key={product._id}
                  _hover={{ bg: "gray.100", color: "black" }}
                >
                  <Td>{product?.images[0]}</Td>
                  <Td>{product?.name}</Td>
                  <Td>{product?.description}</Td>
                  <Td>{product?.price}</Td>
                  <Td>{product?.sizeCount.xl}</Td>
                  <Td>{product?.category?.name}</Td>
                  <Td>{product?.discount}</Td>
                  <Td>
                    {product?.offer === true ? (
                      <CheckIcon color="green" />
                    ) : (
                      <CloseIcon color="red" />
                    )}
                  </Td>
                  <Td>
                    <Link to={`/products/${product?._id}`}>
                      <Button mr={2}>Edit</Button>
                    </Link>
                    <Button>Delete</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <Button mt={4}>Add New Product</Button> */}
    </>
  );
}
