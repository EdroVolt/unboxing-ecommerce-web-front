import { useEffect, useState } from "react";
import "./UserProfile.css";
import cities from "./../components/common/cities.json";
import governments from "./../components/common/governments.json";

import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Box,
  ButtonGroup,
  InputRightElement,
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import BackdropExample from "../components/common/Modal";
import { extendTheme } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../store/store";

import {
  changeUserPasswordAPI,
  editUserAPI,
  getMeAPI,
} from "../store/actionCreator/userActionCreator";
import UserType from "../models/User.model";
import { singInUserAPI } from "../store/actionCreator/authActionCreator";
import React from "react";

const breakpoints = {
  sm: "300px",
  md: "450px",
  lg: "750px",
  xl: "1100px",
  "2xl": "1270px",
};
const theme = extendTheme({ breakpoints });

interface government {
  id: string;
  governorate_name_ar: string;
  governorate_name_en: string;
}
interface city {
  id: string;
  governorate_id: string;
  city_name_ar: string;
  city_name_en: string;
}
const UserProfile = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((store: StoreType) => store.user.user);
  const [oldPassword, setOldPassword] = useState("");
  const [newassword, setnewPassword] = useState("");
  const [citiesOfGovernment, setCitiesOfGovernment] = useState<
    Array<city> | undefined
  >([
    {
      id: "1",
      governorate_id: "1",
      city_name_ar: "15 مايو",
      city_name_en: "15 May",
    },
  ]);
  const dispatch: any = useDispatch();

  const [userInfo, setUserInfo] = useState<UserType>({
    name: user?.name,
    email: user?.email,
    password: user?.password,
    phoneNumber: user?.phoneNumper,
    address: { ...user?.address },
  });
  const [userGovernment, setgovernment] = useState<government | undefined>({
    id: "3",
    governorate_name_ar: "الأسكندرية",
    governorate_name_en: "Alexandria",
  });

  const formateDate = (): UserType => {
    return {
      _id: user._id,
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo?.password,
      phoneNumber: userInfo.phoneNumber,
      address: {
        government: userInfo.address?.government || "none",
        city: userInfo.address?.city || "none",
        street: userInfo.address?.street || "none",
      },
    };
  };

  useEffect(() => {
    dispatch(getMeAPI());
  }, []);

  useEffect(() => {
    setUserInfo({
      name: user?.name,
      email: user?.email,
      password: user?.password,
      phoneNumber: user?.phoneNumper,
      address: { ...user?.address },
    });
  }, [user]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Box
        width="90vw"
        maxW="1270"
        margin="auto"
        padding="1em"
        p={3}
        mb="5"
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
      >
        <Box
          className="boxStyle"
          display={{
            sm: "block",
            md: "block",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
        >
          <Box
            width="30vw"
            w={{
              sm: "100%",
              md: "100%",
              lg: "30vw",
              xl: "30vw",
              "2xl": "30vw",
            }}
          >
            {/* full name */}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              marginBottom="1.5em"
            >
              <FormControl>
                <FormLabel htmlFor="full-name" marginBottom="1em">
                  Full Name:
                </FormLabel>

                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      id="full-name"
                      name="name"
                      variant="filled"
                      placeholder="Full Name"
                      value={userInfo.name}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>
            </Stack>

            {/* email */}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              marginBottom="1.5em"
            >
              <FormControl>
                <FormLabel htmlFor="email" marginBottom="1em">
                  Email address:
                </FormLabel>

                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      id="email"
                      name="email"
                      variant="filled"
                      type="email"
                      placeholder="Email"
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>
            </Stack>

            {/* password */}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              marginBottom="1.5em"
            >
              Change Password:
              <FormControl>
                <FormLabel htmlFor="passowrd" marginBottom="1em"></FormLabel>
                Old Password
                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      id="password"
                      name="password"
                      variant="filled"
                      type="password"
                      placeholder="Password"
                      value={oldPassword}
                      onChange={(e) => {
                        setOldPassword(e.target.value);
                      }}
                    />

                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>{" "}
              <FormControl>
                <FormLabel htmlFor="passowrd" marginBottom="1em"></FormLabel>
                New Password
                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      id="password"
                      name="password"
                      variant="filled"
                      type="password"
                      placeholder="Password"
                      value={newassword}
                      onChange={(e) => {
                        setnewPassword(e.target.value);
                      }}
                    />

                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>
              <Button
                colorScheme="blue"
                width="10rem"
                boxShadow="xl"
                alignSelf={"flex-end"}
                w={{
                  sm: "auto",
                  md: "auto",
                  lg: "10rem",
                  xl: "10rem",
                  "2xl": "10rem",
                }}
                onClick={() => {
                  dispatch(
                    changeUserPasswordAPI(user?._id, newassword, oldPassword)
                  )
                    .then(() => {
                      toast({
                        title: `password has been changed successfully`,
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                    })
                    .catch((e: Error) => {
                      toast({
                        title: `${e.name}`,
                        description: " you didn't write the right password",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                      });
                    });
                }}
              >
                confirm
              </Button>
            </Stack>

            {/* phone number */}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              marginBottom="1.5em"
            >
              <FormControl>
                <FormLabel htmlFor="tel" marginBottom="1em">
                  Phone Number:
                </FormLabel>

                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      type="tel"
                      name="phoneNumber"
                      variant="filled"
                      placeholder="Phone Number"
                      value={userInfo.phoneNumber}
                      onChange={handleChange}
                    />

                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>
            </Stack>
          </Box>
          <Box
            width="30vw"
            w={{
              sm: "100%",
              md: "100%",
              lg: "30vw",
              xl: "30vw",
              "2xl": "30vw",
            }}
          >
            {/* address */}
            {/* government */}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              marginBottom="1.5em"
            >
              <FormControl>
                <FormLabel htmlFor="government" marginBottom="1em">
                  Government:
                </FormLabel>
                <Box>
                  <Select
                    onChange={(e) => {
                      const newgovernment = governments[2].data?.find(
                        (h) => h.id == e.target.value
                      );
                      setgovernment(newgovernment);

                      setCitiesOfGovernment(
                        cities[2].data?.filter((a) => {
                          return a.governorate_id == newgovernment?.id;
                        })
                      );

                      setUserInfo({
                        ...userInfo,
                        address: {
                          city: user?.address?.city,
                          street: user?.address?.street,
                          government: governments[2].data?.find(
                            (h) => h.id == e.target.value
                          )?.governorate_name_en,
                        },
                      });
                    }}
                    placeholder={userInfo.address?.government}
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
              </FormControl>
            </Stack>

            {/* city */}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              marginBottom="1.5em"
            >
              <FormControl>
                <FormLabel htmlFor="city" marginBottom="1em">
                  City:
                </FormLabel>
                <Box display="flex">
                  <InputGroup size="md">
                    <Select
                      onChange={(e) => {
                        setUserInfo({
                          ...userInfo,
                          address: {
                            city: cities[2].data?.find(
                              (a) => a.id == e.target.value
                            )?.city_name_en,
                            street: user?.address?.street,
                            government: userInfo?.address?.government,
                          },
                        });
                      }}
                      placeholder={user?.address?.city}
                      textAlign={"center"}
                    >
                      {citiesOfGovernment?.map((newCity) => {
                        return (
                          <option key={newCity.id} value={newCity.id}>
                            {newCity.city_name_en}
                          </option>
                        );
                      })}
                    </Select>
                  </InputGroup>
                </Box>
              </FormControl>
            </Stack>

            {/* street */}
            <Stack
              direction="row"
              spacing={4}
              align="center"
              marginBottom="3.5em"
            >
              <FormControl>
                <FormLabel htmlFor="street" marginBottom="1em">
                  Street:
                </FormLabel>
                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      id="street"
                      name="street"
                      variant="filled"
                      placeholder="Street"
                      value={userInfo.address?.street}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          address: {
                            city: userInfo?.address?.city,
                            street: e?.target?.value,
                            government: userInfo?.address?.government,
                          },
                        })
                      }
                    />
                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>
            </Stack>
            <Stack align="center">
              <ButtonGroup variant="outline" spacing="6">
                <Button
                  onClick={() => {
                    dispatch(
                      editUserAPI({
                        ...formateDate(),
                      })
                    );
                  }}
                  colorScheme="blue"
                  width="10rem"
                  boxShadow="xl"
                  w={{
                    sm: "auto",
                    md: "auto",
                    lg: "10rem",
                    xl: "10rem",
                    "2xl": "10rem",
                  }}
                >
                  Save
                </Button>
                <Button
                  width="10rem"
                  boxShadow="xl"
                  w={{
                    sm: "auto",
                    md: "auto",
                    lg: "10rem",
                    xl: "10rem",
                    "2xl": "10rem",
                  }}
                  onClick={onOpen}
                >
                  Cancel
                </Button>
              </ButtonGroup>{" "}
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    if you click ok all changes will dicresed
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={() => {
                        dispatch(editUserAPI(user));
                        onClose();
                      }}
                    >
                      ok
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Stack>
          </Box>
        </Box>
        <Stack direction="row" spacing={4} align="center" marginTop="1.5rem">
          <BackdropExample />
        </Stack>
      </Box>
    </>
  );
};

export default UserProfile;
