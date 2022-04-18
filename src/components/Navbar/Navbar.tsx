// import { ReactNode, useState, useEffect } from "react";
// import React from "react";
// import "./Navbar.css";
// import { Logo } from ".././../Logo";
// import cities from "./../common/cities.json";
// import governments from "./../common/governments.json";
// import {
//   Center,
//   Box,
//   Flex,
//   Link,
//   Avatar,
//   HStack,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   Spacer,
//   Image,
//   Select,
//   VStack,
//   StackDivider,
//   Modal,
//   ModalContent,
//   ModalOverlay,
//   ModalCloseButton,
//   ModalBody,
//   Text,
//   ModalHeader,
//   ModalFooter,
//   useColorMode,
//   Input,
//   InputLeftElement,
//   InputGroup,
//   InputRightElement,
//   border,
//   Divider,
// } from "@chakra-ui/react";
// import {
//   HamburgerIcon,
//   CloseIcon,
//   SearchIcon,
//   InfoOutlineIcon,
//   PhoneIcon,
//   ChevronDownIcon,
//   CheckIcon,
// } from "@chakra-ui/icons";
// import { ColorModeSwitcher } from "../ColorModeSwitcher";
// import axios from "axios";
// import { on } from "events";

// const Links = ["Dashboard", "Projects", "Team"];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );
// interface NavbarProps {
//   categoriesList: { name: string; id: string }[];
//   isAuth: boolean;
//   userDetails: { userName: string; userId: string; userCity: string };
// }

// export default function Navbar(props: NavbarProps) {
//   const [userGovernment, setgovernment] = useState("Egypt");
//   const categories = props.categoriesList;
//   const user = props.userDetails;
//   const {
//     isOpen: isMenuOpen,
//     onOpen: onMenuOpen,
//     onClose: onMenuClose,
//   } = useDisclosure();

//   const [searchValue, setSearchedCategory] = useState("");
//   const [searchFor, setSearchFor] = useState("");
//   const svgColor = useColorModeValue("black", "white");
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const {
//     isOpen: isModalOpen,
//     onOpen: onModalOpen,
//     onClose: onModalClose,
//   } = useDisclosure();
//   return (
//     <>
//       <Box bg={useColorModeValue("gray.100", "gray.900")} p={0} m={0}>
//         <Flex h={16} alignItems={"center"} width="100%" justifyContent={"left"}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <Box>
//             <Flex>
//               <Logo width={["20%", "20%", "20%", "10%"]} mr={"3"} />
//               <Box display="flex" alignItems="start">
//                 <VStack
//                   justifyContent={"center"}
//                   divider={<StackDivider borderColor="gray.200" />}
//                   spacing={4}
//                 >
//                   <Box textAlign={"start"}>
//                     <Box>Deliver To</Box>
//                     <HStack>
//                       <svg
//                         width="24"
//                         height="24"
//                         xmlns="http://www.w3.org/2000/svg"
//                         // fill-rule="evenodd"
//                         // clip-rule="evenodd"
//                         fill={svgColor}
//                       >
//                         <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
//                       </svg>
//                       <Box>
//                         <Button variant="link" onClick={onModalOpen}>
//                           <Box>{userGovernment}</Box>
//                         </Button>
//                       </Box>
//                     </HStack>
//                   </Box>
//                 </VStack>
//                 <Spacer />
//               </Box>
//             </Flex>
//           </Box>
//           <Box
//             marginRight={["20%", "20%"]}
//             className="parent"
//             bg="white"
//             borderColor="black"
//             borderWidth={"3"}
//             width={["70%", "70%"]}
//             borderRadius="none"
//             _focus={{ borderColor: "blue.400" }}
//           >
//             <InputGroup>
//               <Menu>
//                 <MenuButton
//                   placholder={"categories"}
//                   as={Button}
//                   borderRadius="none"
//                   bg={"lightgray"}
//                   rightIcon={
//                     <ChevronDownIcon
//                       ml={"100%"}
//                       alignContent={"start"}
//                       color={"black"}
//                       width={"100%"}
//                     />
//                   }
//                 >
//                   {searchValue}
//                 </MenuButton>

//                 <MenuList>
//                   {props.categoriesList.map((category) => {
//                     return (
//                       <>
//                         <MenuItem
//                           key={category.name}
//                           id={category.id}
//                           name={category.name}
//                           onClick={(e) => {
//                             setSearchedCategory(category.name);
//                           }}
//                         >
//                           {category.name}
//                         </MenuItem>
//                       </>
//                     );
//                   })}
//                 </MenuList>
//               </Menu>

//               <Input
//                 type="search"
//                 textColor={"black"}
//                 onChange={(e) => {
//                   setSearchFor(e.target.value);
//                 }}
//                 placeholder=""
//               />
//               <InputRightElement
//                 color={"black"}
//                 as={Button}
//                 bg="none"
//                 cursor={"pointer"}
//                 onClick={() => {
//                   axios
//                     .get(
//                       `https://www.googleapis.com/customsearch/v1?key=AIzaSyCPwfnMXpFGwFd06wW6OC54KwtyJ4hpUfE&cx=017576662512468239146:omuauf_lfve&q=` +
//                         { searchFor }
//                     )
//                     .then((data) => {
//                       console.log(data.data);
//                       console.log(searchFor);
//                     });
//                 }}
//               >
//                 <SearchIcon></SearchIcon>
//               </InputRightElement>
//             </InputGroup>
//           </Box>

//           <Flex>
//             <Menu onOpen={onMenuOpen} onClose={onMenuClose} isOpen={isMenuOpen}>
//               <HStack>
//                 <MenuButton
//                   px={2}
//                   mx={4}
//                   py={2}
//                   overflowY={"hidden"}
//                   transition="all 0.2s"
//                   borderRadius="md"
//                   maxH={"80%"}
//                   textAlign={"center"}
//                   borderWidth="1px"
//                   onMouseOver={onMenuOpen}
//                   _focus={{
//                     boxShadow: "outline",
//                     borderWidth: "1",
//                     borderColor: "white",
//                   }}
//                 >
//                   <Text fontSize={11}> Helllo,{user.userName}</Text>{" "}
//                   <Text fontSize={13} fontWeight={"bold"}>
//                     Account&Lists
//                   </Text>
//                   <ChevronDownIcon />
//                 </MenuButton>
//               </HStack>
//               <MenuList
//                 minH={"29%"}
//                 bgColor={useColorModeValue("white", "dark")}
//               >
//                 <HStack justifyContent={"center"} textAlign={"center"}>
//                   <Box>
//                     <Text fontWeight={"bold"} fontSize={16}>
//                       Your list
//                     </Text>
//                     <MenuItem fontSize={11}>create new list </MenuItem>
//                   </Box>
//                   <MenuDivider color={"black"} bgColor={"black"}></MenuDivider>{" "}
//                   <Box>
//                     <Text fontWeight={"bold"} fontSize={16}>
//                       Your Accounts
//                     </Text>
//                     <MenuItem fontSize={11}>
//                       <Link href={`/${user.userId}/profile`}>Your Account</Link>
//                     </MenuItem>
//                     <MenuItem fontSize={11}>
//                       <Link href={`/${user.userId}/orders`}>Your Orders</Link>
//                     </MenuItem>
//                     <MenuItem fontSize={11}>
//                       <Link href={`/${user.userId}/wishlist`}>
//                         Your WishList
//                       </Link>
//                     </MenuItem>
//                     <MenuItem fontSize={11}>
//                       <Link href={`/${user.userId}/addresses`}>
//                         Your addresses
//                       </Link>
//                     </MenuItem>
//                     <MenuItem fontSize={11}>
//                       <Link href={`/${user.userId}/wishList`}>Your Lists</Link>
//                     </MenuItem>
//                   </Box>
//                 </HStack>
//               </MenuList>
//             </Menu>
//             <Box alignSelf={"center"} mx={4}>
//               <Link href={`/${user.userId}/wishList`}> wishList</Link>
//             </Box>
//             <Box alignSelf={"center"} mx={4}>
//               <Link href={`/${user.userId}/Orders`}> Orders</Link>
//             </Box>
//             <Box
//               _hover={{ border: "black", borderWidth: "2" }}
//               width={20}
//               alignSelf={"center"}
//               mx={4}
//             >
//               <HStack>
//                 <svg
//                   fill={svgColor}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 576 512"
//                   width={"70"}
//                   height={"40"}
//                 >
//                   <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
//                 </svg>
//                 <Link size="6" href={`/${user.userId}/cart`}>
//                   Cart
//                 </Link>
//               </HStack>
//             </Box>
//           </Flex>
//         </Flex>

//         <Box borderRadius={"full"}>
//           <Modal
//             closeOnOverlayClick={true}
//             isOpen={isModalOpen}
//             onClose={onModalClose}
//           >
//             <ModalOverlay />
//             <ModalContent>
//               <ModalHeader bgColor={"lightgray"}>
//                 Choose your delivery location
//               </ModalHeader>
//               <ModalCloseButton />
//               <ModalBody pb={6}>
//                 Delivery options and delivery speeds may vary for different
//                 locations
//               </ModalBody>
//               {!props.isAuth ? (
//                 <Box>
//                   <Link padding={"3"}>Manage your address book</Link>
//                   <Flex>
//                     <Divider />
//                     <Text justifyContent={"center"} alignSelf={"center"}>
//                       Or
//                     </Text>
//                     <Divider />
//                   </Flex>
//                   <Box>
//                     <Select
//                       onChange={(e) => {
//                         setgovernment(e.target.value);

//                         onModalClose();
//                       }}
//                       placeholder="Select option"
//                       textAlign={"center"}
//                     >
//                       {governments[2].data?.map((city) => {
//                         return (
//                           <option value={city.governorate_name_en}>
//                             {city.governorate_name_en}
//                           </option>
//                         );
//                       })}
//                     </Select>
//                   </Box>
//                 </Box>
//               ) : (
//                 <Button>ok</Button>
//               )}
//             </ModalContent>
//           </Modal>
//         </Box>
//       </Box>
//     </>
//   );
// }

// import { profile } from 'console'
import React from 'react'
import { Link } from 'react-router-dom'
import { cart, dashboard, home, orders, products, profile, wishList } from '../../router/routePaths'

export default function Navbar({isLogged}:any) {
console.log(isLogged)
  return (
   <>
     {/* <Link to="/landing">Landing</Link> */}
    {/* <Link to={home}>Home</Link>
    <Link to={profile}>Profile</Link>
    <Link to={products}>products</Link> */}
    {/* <Link to={orders}>Order</Link>
    <Link to={wishList}>WishList</Link>
    <Link to={cart}>Cart</Link> */}
    {/* <Link to={dashboard}>Dashboard</Link> */}
    {isLogged === true ? (
    <><Link to={orders}>Order</Link><Link to={wishList}>WishList</Link><Link to={cart}>Cart</Link></>
  ) : (
    <><Link to={home}>Home</Link><Link to={profile}>Profile</Link><Link to={products}>products</Link></>
  )
}
    
   </>
  )
}
