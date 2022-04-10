import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

interface IUserState {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  address?: {
    government: string;
    city: string;
    street: string;
  };
}

export default function Profile({
  name,
  email,
  password,
  phoneNumber,
  address = {
    government: "",
    city: "",
    street: "",
  },
}: IUserState) {
  const [userInfo, setUserInfo] = useState({
    name: "Nesma",
    email: "nesmataha91@gmail.com",
    password: "123nesma",
    phoneNumber: "01060981970",
    address: {
      government: "Kafr Elsheikh",
      city: "Balteem",
      street: "Elwafaa",
    },
  });

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setUserInfo(event.target.value);
  };
  return (
    <>
      <HStack spacing="2%" marginTop="5%">
        <Box w="20%" h="100%">
          <Image
            borderRadius="50px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            width="150px"
          />
        </Box>
        <Box w="35%" h="100%">
          {/* full name */}
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="first-name">Full Name:</FormLabel>
              <Input
                id="first-name"
                variant="filled"
                placeholder="First name"
                value={userInfo.name}
                onChange={handleChange}
              />
              <Button
                size="md"
                height="45px"
                width="80px"
                letterSpacing="1.5px"
                border="2px"
                borderRadius="15px"
                borderColor="green.500"
                marginLeft="30px"
              >
                Edit
              </Button>
            </FormControl>
          </Stack>

          {/* email */}
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="email">Email address:</FormLabel>
              <Input
                id="email"
                variant="filled"
                type="email"
                value={userInfo.email}
                onChange={handleChange}
              />
              <Button
                size="md"
                height="45px"
                width="80px"
                letterSpacing="1.5px"
                border="2px"
                borderRadius="15px"
                borderColor="green.500"
                marginLeft="30px"
              >
                Edit
              </Button>
            </FormControl>
          </Stack>

          {/* password */}
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="passowrd">Password:</FormLabel>
              <Input
                id="password"
                variant="filled"
                type="password"
                value={userInfo.password}
                onChange={handleChange}
              />
              <Button
                size="md"
                height="45px"
                width="80px"
                letterSpacing="1.5px"
                border="2px"
                borderRadius="15px"
                borderColor="green.500"
                marginLeft="30px"
              >
                Edit
              </Button>
            </FormControl>
          </Stack>

          {/* phone number */}
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="tel">Phone Number:</FormLabel>
              <InputGroup>
                <Stack direction="row" spacing={6} align="center">
                  <PhoneIcon color="gray.300" />
                  <Input
                    type="tel"
                    variant="filled"
                    placeholder="Phone number"
                    value={userInfo.phoneNumber}
                    onChange={handleChange}
                  />
                  <Button
                    size="md"
                    height="45px"
                    width="80px"
                    letterSpacing="1.5px"
                    border="2px"
                    borderRadius="15px"
                    borderColor="green.500"
                    marginLeft="30px"
                  >
                    Edit
                  </Button>
                </Stack>
              </InputGroup>{" "}
            </FormControl>
          </Stack>
        </Box>
        <Box w="35%" h="100%">
          {/* address */}

          <Heading as="h4" size="md">
            Address:{" "}
          </Heading>

          {/* government */}
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="government">Government:</FormLabel>
              <Input
                id="government"
                variant="filled"
                placeholder="government"
                value={userInfo.address?.government}
                onChange={handleChange}
              />
              <Button
                size="md"
                height="45px"
                width="80px"
                letterSpacing="1.5px"
                border="2px"
                borderRadius="15px"
                borderColor="green.500"
                marginLeft="30px"
              >
                Edit
              </Button>
            </FormControl>
          </Stack>

          {/* city */}
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="city">City:</FormLabel>
              <Input
                id="city"
                variant="filled"
                placeholder="city"
                value={userInfo.address?.city}
                onChange={handleChange}
              />
              <Button
                size="md"
                height="45px"
                width="80px"
                letterSpacing="1.5px"
                border="2px"
                borderRadius="15px"
                borderColor="green.500"
                marginLeft="30px"
              >
                Edit
              </Button>
            </FormControl>
          </Stack>

          {/* street */}
          <Stack direction="row" spacing={4} align="center">
            <FormControl>
              <FormLabel htmlFor="street">Street:</FormLabel>
              <Input
                id="street"
                variant="filled"
                placeholder="street"
                value={userInfo.address?.street}
                onChange={handleChange}
              />
              <Button
                size="md"
                height="45px"
                width="80px"
                letterSpacing="1.5px"
                border="2px"
                borderRadius="15px"
                borderColor="green.500"
                marginLeft="30px"
              >
                Edit
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </HStack>
    </>
  );
}
