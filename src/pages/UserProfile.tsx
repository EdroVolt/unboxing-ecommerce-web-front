import { useState } from "react";
import "./UserProfile.css";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Box,
  ButtonGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import BackdropExample from "../components/common/Modal";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "300px",
  md: "450px",
  lg: "750px",
  xl: "1100px",
  "2xl": "1270px",
};
const theme = extendTheme({ breakpoints });

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Nesma",
    email: "nesmataha91@gmail.com",
    password: "123nesma",
    phoneNumber: "01060981970",
    government: "Kafr Elsheikh",
    city: "Balteem",
    street: "Elwafaa",
  });

  const formateDate = () => {
    return {
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      phoneNumber: userInfo.phoneNumber,
      address: {
        government: userInfo.government,
        city: userInfo.city,
        street: userInfo.street,
      },
    };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Box
        width="70vw"
        margin="auto"
        padding="1em"
        p={3}
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
              <FormControl>
                <FormLabel htmlFor="passowrd" marginBottom="1em">
                  Password:
                </FormLabel>
                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      id="password"
                      name="password"
                      variant="filled"
                      type="password"
                      placeholder="Password"
                      value={userInfo.password}
                      onChange={handleChange}
                    />

                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </FormControl>
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
                <Box display="flex">
                  <InputGroup size="md">
                    <Input
                      id="government"
                      name="government"
                      variant="filled"
                      placeholder="Government"
                      value={userInfo.government}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
                  </InputGroup>
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
                    <Input
                      id="city"
                      name="city"
                      variant="filled"
                      placeholder="City"
                      value={userInfo.city}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <EditIcon className="editIcon" />
                    </InputRightElement>
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
                      value={userInfo.street}
                      onChange={handleChange}
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
                >
                  Cancel
                </Button>
              </ButtonGroup>
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
