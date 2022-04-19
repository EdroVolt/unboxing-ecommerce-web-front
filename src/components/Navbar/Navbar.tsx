import { ReactNode, useState, useEffect } from "react";
import React from "react";
import "./Navbar.css";
import { Logo } from ".././../Logo";
import cities from "./../common/cities.json";
import { Link } from "react-router-dom";
import governments from "./../common/governments.json";
import {
  Center,
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Image,
  Select,
  VStack,
  StackDivider,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalHeader,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

import CategoryType from "../../models/Category.model";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../store/store";
import { getAllCategoriesAPI } from "../../store/actionCreator/categoryActionCreator";
import {
  editUserAPI,
  getMeAPI,
} from "../../store/actionCreator/userActionCreator";
import { getAllProductsByNameAndCategoryAPI } from "../../store/actionCreator/productActionCreator";
import {
  orders,
  products,
  wishList,
  profile,
  home,
  login,
  cart,
} from "../../router/routePaths";
import { Navigate, useNavigate } from "react-router";
import { any, object, string } from "prop-types";

interface city {
  id: string;
  governorate_id: string;
  city_name_ar: string;
  city_name_en: string;
}
interface government {
  id: string;
  governorate_name_ar: string;
  governorate_name_en: string;
}
export default function Navbar({ isAuthenticated }: any) {
  const [page, setPage] = useState(1);
  const [userGovernment, setgovernment] = useState<government | undefined>({
    id: "3",
    governorate_name_ar: "الأسكندرية",
    governorate_name_en: "Alexandria",
  });
  const categories = useSelector(
    (store: StoreType) => store.category.categories
  );
  const user = useSelector((store: StoreType) => store.user.user);
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  const dispatch: any = useDispatch();

  const [searchValue, setSearchedCategory] = useState<CategoryType>({
    _id: "1",
    name: "shoes",
    image: "ff",
  });
  const [searchFor, setSearchFor] = useState("");
  const svgColor = useColorModeValue("black", "white");

  const [governmentsCities, setGovernmentsCities] = useState<
    Array<city> | undefined
  >([
    {
      id: "1",
      governorate_id: "1",
      city_name_ar: "15 مايو",
      city_name_en: "15 May",
    },
  ]);
  const [userCity, setUserCites] = useState<city | undefined>({
    id: "1",
    governorate_id: "1",
    city_name_ar: "15 مايو",
    city_name_en: "15 May",
  });
  const navigate = useNavigate();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  useEffect(() => {
    dispatch(getAllCategoriesAPI(page));
    dispatch(getMeAPI());
    console.log(isAuthenticated);
  }, []);
  console.log(user);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} p={0} m={0}>
        <Flex h={16} alignItems={"center"} width="100%" justifyContent={"left"}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box>
            <Flex>
              <Logo width={["20%", "20%", "20%", "10%"]} mr={"3"} />
              <Box display="flex" alignItems="start">
                <VStack
                  justifyContent={"center"}
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                >
                  <Box textAlign={"start"}>
                    <Box>Deliver To</Box>
                    <HStack>
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        // fill-rule="evenodd"
                        // clip-rule="evenodd"
                        fill={svgColor}
                      >
                        <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                      </svg>
                      {/* government choosing */}
                      <Box>
                        <VStack>
                          <Button variant="link" onClick={onModalOpen}>
                            <Box>{userGovernment?.governorate_name_en},</Box>

                            <Box>{userCity?.city_name_en}</Box>
                          </Button>
                        </VStack>
                      </Box>
                      {/* ending government */}
                      {/* starting city chooding */}
                    </HStack>
                  </Box>
                </VStack>
                <Spacer />
              </Box>
            </Flex>
          </Box>
          <Box
            marginRight={["20%", "20%"]}
            className="parent"
            bg="white"
            borderColor="black"
            borderWidth={"3"}
            width={["70%", "70%"]}
            borderRadius="none"
            _focus={{ borderColor: "blue.400" }}
          >
            <InputGroup>
              <Menu>
                <MenuButton
                  placholder={"categories"}
                  as={Button}
                  borderRadius="none"
                  bg={"lightgray"}
                  rightIcon={
                    <ChevronDownIcon
                      ml={"100%"}
                      alignContent={"start"}
                      color={"black"}
                      width={"100%"}
                    />
                  }
                >
                  {searchValue.name}
                </MenuButton>

                <MenuList>
                  {categories.map((category: CategoryType) => {
                    return (
                      <>
                        <MenuItem
                          key={category.name}
                          id={category._id?.toString()}
                          name={category.name}
                          onClick={(e) => {
                            setSearchedCategory({
                              _id: category._id?.toString(),
                              name: category.name,
                              image: "aa",
                            });
                          }}
                        >
                          {category.name}
                        </MenuItem>
                      </>
                    );
                  })}
                </MenuList>
              </Menu>

              <Input
                type="search"
                textColor={"black"}
                onChange={(e) => {
                  setSearchFor(e.target.value);
                }}
                placeholder=""
              />
              <InputRightElement
                color={"black"}
                as={Button}
                bg="none"
                cursor={"pointer"}
                onClick={() => {
                  dispatch(
                    getAllProductsByNameAndCategoryAPI(
                      searchFor,
                      searchValue._id!
                    )
                  );
                  navigate("/products");
                }}
              >
                <SearchIcon></SearchIcon>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Flex>
            <Menu onOpen={onMenuOpen} onClose={onMenuClose} isOpen={isMenuOpen}>
              <HStack>
                <MenuButton
                  px={2}
                  mx={4}
                  py={2}
                  overflowY={"hidden"}
                  transition="all 0.2s"
                  borderRadius="md"
                  maxH={"80%"}
                  textAlign={"center"}
                  borderWidth="1px"
                  onMouseOver={onMenuOpen}
                  _focus={{
                    boxShadow: "outline",
                    borderWidth: "1",
                    borderColor: "white",
                  }}
                >
                  <Text fontSize={11}>
                    {" "}
                    "Hello",{isAuthenticated ? user?.name : null}
                  </Text>{" "}
                  <Text fontSize={13} fontWeight={"bold"}>
                    Account&Lists
                  </Text>
                  <ChevronDownIcon />
                </MenuButton>
              </HStack>
              <MenuList
                zIndex={30}
                minH={"29%"}
                bgColor={useColorModeValue("white", "dark")}
              >
                <HStack justifyContent={"center"} textAlign={"center"}>
                  <Box>
                    <Text fontWeight={"bold"} fontSize={16}>
                      Your list
                    </Text>
                    <MenuItem fontSize={11}>
                      <Link to={isAuthenticated ? "/wishlist" : "/login"}>
                        {isAuthenticated ? "visit your list" : "sign in"}
                      </Link>
                    </MenuItem>
                  </Box>
                  <MenuDivider color={"black"} bgColor={"black"}></MenuDivider>{" "}
                  <Box>
                    <Text fontWeight={"bold"} fontSize={16}>
                      Your Accounts
                    </Text>
                    <MenuItem fontSize={11}>
                      <Link to={isAuthenticated ? "/profile" : "/login"}>
                        {isAuthenticated ? "account" : "sign in"}
                      </Link>
                    </MenuItem>
                  </Box>
                </HStack>
              </MenuList>
            </Menu>
            <Box alignSelf={"center"} mx={4}>
              <Link to={isAuthenticated ? "/wishlist" : "/"}>
                {isAuthenticated ? "wishlist" : null}
              </Link>
            </Box>
            <Box alignSelf={"center"} mx={4}>
              <Link to={orders}> Orders</Link>
            </Box>
            <Box
              _hover={{ border: "black", borderWidth: "2" }}
              width={20}
              alignSelf={"center"}
              mx={4}
            >
              <HStack>
                <svg
                  fill={svgColor}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width={"70"}
                  height={"40"}
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <Link to={isAuthenticated ? "/cart" : "/login"}>cart</Link>
              </HStack>
            </Box>
          </Flex>
        </Flex>

        <Box borderRadius={"full"}>
          <Modal
            closeOnOverlayClick={true}
            isOpen={isModalOpen}
            onClose={onModalClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader bgColor={"lightgray"}>
                Choose your delivery location
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                Delivery options and delivery speeds may vary for different
                locations
              </ModalBody>
              {localStorage.getItem("token") ? (
                <Box>
                  <Link to="#">Manage your address book</Link>
                  <Flex>
                    <Divider />
                    <Text justifyContent={"center"} alignSelf={"center"}>
                      Or
                    </Text>
                    <Divider />
                  </Flex>
                  <Box>
                    <Select
                      onChange={(e) => {
                        const newgovernment = governments[2].data?.find(
                          (h) => h.id == e.target.value
                        );
                        setgovernment(newgovernment);

                        setGovernmentsCities(
                          cities[2].data?.filter((a) => {
                            return a.governorate_id == newgovernment?.id;
                          })
                        );
                        dispatch(
                          editUserAPI({
                            ...user,
                            address: {
                              ...user?.address,

                              government: userGovernment,
                            },
                          })
                        );
                      }}
                      placeholder="Select option"
                      textAlign={"center"}
                    >
                      {governments[2].data?.map((government) => {
                        return (
                          <option value={government.id}>
                            {government.governorate_name_en}
                          </option>
                        );
                      })}
                    </Select>
                  </Box>
                  {/* statring choosing a city based on government */}
                  <Box>
                    <Select
                      onChange={(e) => {
                        setUserCites(
                          cities[2].data?.filter(
                            (a) => a.id == e.target.value
                          )[0]
                        );
                        console.log(
                          cities[2].data?.find((a) => (a.id = e.target.value))
                        );
                        onModalClose();

                        dispatch(
                          editUserAPI({
                            ...user,
                            address: {
                              ...user?.address,
                              city: userCity,
                            },
                          })
                        );
                      }}
                      placeholder="Select option"
                      textAlign={"center"}
                    >
                      {governmentsCities?.map((newCity) => {
                        return (
                          <option value={newCity.id}>
                            {newCity.city_name_en}
                          </option>
                        );
                      })}
                    </Select>
                  </Box>
                </Box>
              ) : (
                <Button>ok</Button>
              )}
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </>
  );
}

export function Navbar2({ isAuthenticated }: any) {
  console.log(isAuthenticated);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
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

      {isAuthenticated === false ? (
        <>
          <Link to={profile}>Profile</Link>
          <Link to={products}>products</Link>
          <Link to={login}>Login</Link>
        </>
      ) : (
        <>
          <Link to={home}>home</Link>
          <Link to={orders}>Order</Link>
          <Link to={wishList}>WishList</Link>
          <Link to={cart}>Cart</Link>{" "}
          <button onClick={() => logoutHandler()}>Logout</button>
        </>
      )}
    </>
  );
}
