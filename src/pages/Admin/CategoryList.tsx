
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
import { useState } from "react";

export default function CategoryList() {
  const [categories, setCategory] = useState([
    {
      name: "watch",
      image: "",
    },
  ]);

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
            {categories.map((category) => {
              return (
                <Tr _hover={{ bg: "gray.100", color: "black" }}>
                  <Td>{category.image}</Td>
                  <Td>{category.name}</Td>
                  <Td>
                    <Button mr={2}>Edit</Button>
                    <Button>Delete</Button>
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
