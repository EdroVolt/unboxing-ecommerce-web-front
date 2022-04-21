import { ReactNode, useState, useEffect } from "react";

import React from "react";
import "./Navbar.css";
import { Logo } from ".././../Logo";
import cities from "./../common/cities.json";
import { NavLink, Link } from "react-router-dom";
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
  border,
  position,
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
import {
  getAllProductsAPI,
  getAllProductsByNameAndCategoryAPI,
} from "../../store/actionCreator/productActionCreator";
import {
  orders,
  products,
  wishList,
  profile,
  home,
  login,
  cart,
} from "../../router/routePaths";
import { useNavigate } from "react-router";
import { GoLocation } from "react-icons/all";

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
export default function Navbar({ isAuth }: any) {
  const [userGovernment, setgovernment] = useState<government | undefined>({
    id: "3",
    governorate_name_ar: "الأسكندرية",
    governorate_name_en: "Alexandria",
  });
  const [searchFor, setSearchFor] = useState("");
  let activeStyle = {
    textDecoration: "underline",
  };
  const [searchValue, setSearchedCategory] = useState<CategoryType>({
    _id: "1",
    name: "all",
    image: "ff",
  });
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
  const categories = useSelector(
    (store: StoreType) => store.category.categories
  );
  let user = useSelector((state: any) => state.user.user);
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  const dispatch: any = useDispatch();

  const svgColor = useColorModeValue("black", "white");
  const products = useSelector((store: StoreType) => store.product.products);
  const navigate = useNavigate();
  
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  useEffect(() => {
    dispatch(getAllCategoriesAPI());
    dispatch(getMeAPI());
    dispatch(getAllProductsAPI(1));
    console.log(isAuth);
  }, [isAuth]);

  console.log(user);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        pb={"1"}
        pt={"1"}
        mb={"2"}
      >
        <Flex alignItems={"center"} width="100%" justifyContent={"left"}>
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
                      <GoLocation /> {/* government choosing */}
                      <Box>
                        <VStack>
                          <Button variant="link" onClick={onModalOpen}>
                            <Box>
                              {isAuth
                                ? userGovernment?.governorate_name_en
                                : "sign in"}
                              ,
                            </Box>

                            <Box>{isAuth ? userCity?.city_name_en : null}</Box>
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
            alignSelf={"center"}
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
                    "Hello",{isAuth ? user?.name : null}
                  </Text>
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
                  {isAuth ? (
                    <>
                      {" "}
                      <Box>
                        <Text fontWeight={"bold"} fontSize={16}>
                          Your list
                        </Text>
                        <MenuItem fontSize={11}>
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "active" : "inactive"
                            }
                            to="/wishlist"
                          >
                            "visit your list"
                          </NavLink>
                        </MenuItem>
                      </Box>
                    </>
                  ) : null}
                  <MenuDivider color={"black"} bgColor={"black"}></MenuDivider>{" "}
                  <Box>
                    <Text fontWeight={"bold"} fontSize={16}>
                      Your Accounts
                    </Text>
                    <MenuItem fontSize={11}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "inactive"
                        }
                        to={isAuth ? "/profile" : "/login"}
                      >
                        {isAuth ? "account" : "sign in"}
                      </NavLink>
                    </MenuItem>
                    {isAuth ? (
                      <>
                        <MenuItem
                          backgroundColor={"red.700"}
                          role={"button"}
                          rounded={"2xl"}
                        >
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? "active" : "inactive"
                            }
                            to="/"
                            onClick={() => {
                              localStorage.clear();
                              window.location.reload();
                            }}
                          >
                            logout
                          </NavLink>
                        </MenuItem>
                      </>
                    ) : null}
                    <MenuItem fontSize={11}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "inactive"
                        }
                        to={isAuth ? "/profile" : "/signUp"}
                      >
                        {isAuth ? null : "signUp"}
                      </NavLink>
                    </MenuItem>
                  </Box>
                </HStack>
              </MenuList>
            </Menu>
            <Box alignSelf={"center"} mx={4} role="button">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={isAuth ? "/wishlist" : "/"}
              >
                {isAuth ? "wishlist" : null}
              </NavLink>
            </Box>
            <Box alignSelf={"center"} mx={4}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={"/products"}
              >
                products
              </NavLink>
            </Box>
            <Box alignSelf={"center"} mx={4}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={isAuth ? "orders" : "/"}
              >
                {isAuth ? "orders" : null}
              </NavLink>
            </Box>
            <Box
              _hover={{ border: "black", borderWidth: "2" }}
              width={20}
              alignSelf={"center"}
              mx={4}
            >
              {" "}
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={isAuth ? "/cart" : "/login"}
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
                  <Box> cart</Box>
                </HStack>{" "}
              </NavLink>
            </Box>
            <Box alignSelf={"center"}>
              <Button
                onClick={() => {
                  if (isAuth) {
                    localStorage.clear();
                    window.location.reload();
                  } else {
                    navigate("/login");
                  }
                }}
              >
                {isAuth ? "Logout" : "Login"}
              </Button>
              <ColorModeSwitcher justifySelf="flex-end" />
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
                  <NavLink to="#">Manage your address book</NavLink>
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
                              government: userGovernment?.governorate_name_en,
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
                              city: userCity?.city_name_en,
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
                <Button
                  onClick={() => {
                    onModalClose();
                    navigate("/login");
                  }}
                >
                  signin
                </Button>
              )}
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </>
  );
}
