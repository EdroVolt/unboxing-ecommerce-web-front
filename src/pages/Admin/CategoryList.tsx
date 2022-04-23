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
import { getAllCategoriesAPI } from "../../store/actionCreator/categoryActionCreator";
import { StoreType } from "../../store/store";

export default function CategoryList() {
  const categories = useSelector((store:StoreType)=>store?.category.categories)
  const dispatch:any = useDispatch()

  useEffect(()=>{
    dispatch(getAllCategoriesAPI())
  },[])
  return (
    <>
      <TableContainer width="85%" ml="14.5%">
        <Table variant="simple" colorScheme="gray" width="100%">
          <Thead>
            <Tr>
              <Th fontSize="xl">Image</Th>
              <Th fontSize="xl">Name</Th>
              <Th fontSize="xl">Operations</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories?.map((category:any) => {
              return (
                <Tr _hover={{ bg: "gray.100", color: "black" }}>
                  <Td>{category.image}</Td>
                  <Td>{category.name}</Td>
                  <Td>
                    <Button mr={2}>Edit</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
