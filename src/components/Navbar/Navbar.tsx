import { ReactNode, useState, useEffect } from "react";

import React from "react";
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
  getAllProductsByCategoryAPI,
  getAllProductsByNameAndCategoryAPI,
  getAllProductsByNameAPI,
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
import "./Navbar.css";
import { allowedNodeEnvironmentFlags } from "process";

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
  let user = useSelector((state: any) => state.user.user);

  const [searchFor, setSearchFor] = useState("");
  const [searchValue, setSearchedCategory] = useState<CategoryType>({
    _id: "1",
    name: "all",
    image: "ff",
  });
  const userSetedGovernment = governments[2].data?.find((a) => {
    return a.governorate_name_en == user?.government;
  });
  const userSetedcity = cities[2].data?.find((a) => {
    return a.city_name_en == user?.city;
  });
  const [userGovernment, setgovernment] = useState<any | undefined>({
    id: userSetedGovernment?.id,
    governorate_name_ar: userSetedGovernment?.governorate_name_ar,
    governorate_name_en: userSetedGovernment?.governorate_name_en,
  });
  const [governmentsCities, setGovernmentsCities] = useState<
    Array<any> | undefined
  >([
    {
      id: userSetedcity?.id,
      governorate_id: userSetedcity?.governorate_id,
      city_name_ar: userSetedcity?.city_name_ar,
      city_name_en: userSetedcity?.city_name_en,
    },
  ]);
  const [userCity, setUserCites] = useState<any | undefined>({
    id: userSetedcity?.id,
    governorate_id: userSetedcity?.governorate_id,
    city_name_ar: userSetedcity?.city_name_ar,
    city_name_en: userSetedcity?.city_name_en,
  });
  const categories = useSelector(
    (store: StoreType) => store.category.categories
  );
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

  return (
    <>
      <Box bg={"gray.900"} color={"white"} py={"1"} mb={"2"}>
        <Flex
          alignItems={"center"}
          px={"10"}
          width="100%"
          justifyContent={"left"}
        >
          <Box>
            <Flex alignItems={"center"}>
              <Link to={home}>
                <Text
                  className="brand"
                  color={"yellow.400"}
                  fontSize="5xl"
                  fontWeight={"bold"}
                  letterSpacing="0.05em"
                  me={"2"}
                >
                  Unboxing
                </Text>
              </Link>
              <Box display="flex" me={5} alignItems="start">
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
                              {isAuth ? user?.address?.government : "sign in"},
                            </Box>

                            <Box>{isAuth ? user?.address?.city : null}</Box>
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
                  bg={"gray.200"}
                  color="black"
                  borderRadius={"none"}
                  fontWeight="700"
                  rightIcon={
                    <ChevronDownIcon
                      ml={"100%"}
                      alignContent={"start"}
                      color={"black"}
                      width={"100%"}
                    />
                  }
                >
                  {searchValue?.name || "Category"}
                </MenuButton>

                <MenuList bg={"gray.300"} color={"black"}>
                  <MenuItem
                    key={"all"}
                    id={""}
                    name={"all"}
                    onClick={(e: any) => {
                      setSearchedCategory({
                        _id: undefined,
                        name: "All",
                        image: "all.jpg",
                      });
                    }}
                  >
                    All
                  </MenuItem>
                  {categories.map((category: CategoryType) => {
                    return (
                      <>
                        <MenuItem
                          key={category.name}
                          id={category._id?.toString()}
                          name={category.name}
                          onClick={(e: any) => {
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
                type="text"
                textColor={"black"}
                border="none"
                borderRadius={0}
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
                  if (searchFor && searchValue._id)
                    dispatch(
                      getAllProductsByNameAndCategoryAPI(
                        searchFor,
                        searchValue._id!
                      )
                    );
                  else if (!searchFor && searchValue._id)
                    dispatch(getAllProductsByCategoryAPI(searchValue._id!));
                  else if (searchFor && !searchValue._id)
                    dispatch(getAllProductsByNameAPI(searchValue._id!));
                  else dispatch(getAllProductsAPI());
                  navigate("/products");
                }}
              >
                <SearchIcon></SearchIcon>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Flex>
            <Box alignSelf={"center"} fontSize="18" mx={4} role="button">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={isAuth ? "/wishlist" : "/"}
              >
                {isAuth ? "Wishlist" : null}
              </NavLink>
            </Box>
            <Box alignSelf={"center"} fontSize="18" mx={4}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={"/products"}
              >
                Products
              </NavLink>
            </Box>
            <Box alignSelf={"center"} fontSize="18" mx={4}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={isAuth ? "orders" : "/"}
              >
                {isAuth ? "Orders" : null}
              </NavLink>
            </Box>
            <Box
              _hover={{ border: "black", borderWidth: "2" }}
              width={20}
              alignSelf={"center"}
              mx={4}
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to={isAuth ? "/cart" : "/login"}
              >
                <HStack>
                  <Text fontSize={"18"}>Cart</Text>
                  <svg
                    fill={"silver"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width={"22"}
                    height={"30"}
                  >
                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                  </svg>
                </HStack>
              </NavLink>
            </Box>
            {isAuth ? (
              <Menu
                onOpen={onMenuOpen}
                onClose={onMenuClose}
                isOpen={isMenuOpen}
              >
                <HStack>
                  <MenuButton
                    px={2}
                    mx={4}
                    py={2}
                    overflowY={"hidden"}
                    transition="all 0.2s"
                    borderRadius="md"
                    maxH={"80%"}
                    display="flex"
                    width={150}
                    onMouseOver={onMenuOpen}
                    _hover={{
                      bg: "gray.600",
                    }}
                  >
                    <Text fontSize={18} color="gold" fontWeight={"bold"}>
                      Hello 👋
                    </Text>
                    <Text fontSize={18}>{isAuth ? user?.name : null}</Text>
                    <ChevronDownIcon />
                  </MenuButton>
                </HStack>
                <MenuList
                  zIndex={30}
                  minH={"29%"}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bgColor={useColorModeValue("gray.300", "gray.900")}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.900", "gray.300")}
                >
                  <Box justifyContent={"start"} px={5} textAlign={"start"}>
                    <MenuItem p={0} width={20} fontSize={11}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active" : "inactive"
                        }
                        to={isAuth ? "/profile" : "/login"}
                      >
                        <Text fontSize={"xl"} fontWeight="bold">
                          {isAuth ? "Account" : "Login"}
                        </Text>
                      </NavLink>
                    </MenuItem>
                    {isAuth ? (
                      <>
                        <Text
                          fontSize={18}
                          color={"red.500"}
                          fontWeight="bold"
                          rounded="md"
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
                            Logout
                          </NavLink>
                        </Text>
                      </>
                    ) : null}
                  </Box>
                </MenuList>
              </Menu>
            ) : null}

            {!isAuth ? (
              <Box alignSelf={"center"}>
                <Button
                  color={"gray.900"}
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
              </Box>
            ) : null}
            <ColorModeSwitcher
              justifySelf="flex-end"
              alignSelf={"center"}
              _hover={{
                color: "gray.900",
                bg: "gray.300",
              }}
            />
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
                      placeholder={user?.address?.government}
                      textAlign={"center"}
                    >
                      {governments[2].data?.map((government) => {
                        return (
                          <option key={government.id} value={government.id}>
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
                      placeholder={user?.address?.city}
                      textAlign={"center"}
                    >
                      {governmentsCities?.map((newCity) => {
                        return (
                          <option key={newCity.id} value={newCity.id}>
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
