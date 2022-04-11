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
  InputLeftElement,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { CalendarIcon, EditIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import BackdropExample from "../components/common/Modal";
import { useMediaQuery } from "usehooks-ts";

const UserProfile = () => {
  const desktop = useMediaQuery("(min-width: 1280px)");
  const tabletIpadsPortrait = useMediaQuery("(min-width: 1230px)");
  const tabletIpadsLowResolution = useMediaQuery("(min-width: 850px)");
  const phone = useMediaQuery("(min-width: 470px)");

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
      {desktop ? (
        <Box
          width="70vw"
          margin="auto"
          padding="1em"
          p={3}
          borderWidth={1}
          borderRadius={8}
          boxShadow="dark-lg"
        >
          <Box className="boxStyle">
            <Box width="30vw">
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
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <CalendarIcon
                          w={5}
                          h={3}
                          color="gray.300"
                          boxShadow="lg"
                          marginRight="1rem"
                        />
                      }
                    />
                    <Box display="flex">
                      <Input
                        id="full-name"
                        name="name"
                        variant="filled"
                        placeholder="Full Name"
                        value={userInfo.name}
                        onChange={handleChange}
                        width="26.5vw"
                      />
                      <Button>
                        <EditIcon />
                      </Button>
                    </Box>
                  </InputGroup>
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
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <EmailIcon
                          w={5}
                          h={3}
                          color="gray.300"
                          boxShadow="lg"
                          marginRight="1rem"
                        />
                      }
                    />
                    <Box display="flex">
                      <Input
                        id="email"
                        name="email"
                        variant="filled"
                        type="email"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={handleChange}
                        width="26.5vw"
                      />
                      <Button>
                        <EditIcon />
                      </Button>
                    </Box>
                  </InputGroup>
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
                    <Input
                      id="password"
                      name="password"
                      variant="filled"
                      type="password"
                      placeholder="Password"
                      value={userInfo.password}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                  <InputGroup>
                    <Stack direction="row" spacing={6} align="center">
                      <PhoneIcon color="gray.300" boxShadow="lg" />
                      <Box display="flex">
                        <Input
                          type="tel"
                          name="phoneNumber"
                          variant="filled"
                          placeholder="Phone Number"
                          value={userInfo.phoneNumber}
                          onChange={handleChange}
                          width="20rem"
                        />
                        <Button>
                          <EditIcon />
                        </Button>
                      </Box>
                    </Stack>
                  </InputGroup>{" "}
                </FormControl>
              </Stack>
            </Box>
            <Box width="30vw">
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
                    <Input
                      id="government"
                      name="government"
                      variant="filled"
                      placeholder="Government"
                      value={userInfo.government}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                    <Input
                      id="city"
                      name="city"
                      variant="filled"
                      placeholder="City"
                      value={userInfo.city}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                    <Input
                      id="street"
                      name="street"
                      variant="filled"
                      placeholder="Street"
                      value={userInfo.street}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
                  </Box>
                </FormControl>
              </Stack>
              <Stack align="center">
                <ButtonGroup variant="outline" spacing="6">
                  <Button colorScheme="blue" width="10rem" boxShadow="xl">
                    Save
                  </Button>
                  <Button width="10rem" boxShadow="xl">
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
      ) : (
        <Box
          width="70vw"
          margin="auto"
          padding="1em"
          p={3}
          borderWidth={1}
          borderRadius={8}
          boxShadow="dark-lg"
        >
          {tabletIpadsLowResolution ? (
            <Box className="boxStyle">
              <Box width="30vw">
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
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={
                          <CalendarIcon
                            w={5}
                            h={3}
                            color="gray.300"
                            boxShadow="lg"
                            marginRight="1rem"
                          />
                        }
                      />
                      <Box display="flex">
                        <Input
                          id="full-name"
                          name="name"
                          variant="filled"
                          placeholder="Full Name"
                          value={userInfo.name}
                          onChange={handleChange}
                          width="26.5vw"
                        />
                        <Button>
                          <EditIcon />
                        </Button>
                      </Box>
                    </InputGroup>
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
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={
                          <EmailIcon
                            w={5}
                            h={3}
                            color="gray.300"
                            boxShadow="lg"
                            marginRight="1rem"
                          />
                        }
                      />
                      <Box display="flex">
                        <Input
                          id="email"
                          name="email"
                          variant="filled"
                          type="email"
                          placeholder="Email"
                          value={userInfo.email}
                          onChange={handleChange}
                          width="26.5vw"
                        />
                        <Button>
                          <EditIcon />
                        </Button>
                      </Box>
                    </InputGroup>
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
                      <Input
                        id="password"
                        name="password"
                        variant="filled"
                        type="password"
                        placeholder="Password"
                        value={userInfo.password}
                        onChange={handleChange}
                      />
                      <Button>
                        <EditIcon />
                      </Button>
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
                    <InputGroup>
                      <Stack direction="row" spacing={6} align="center">
                        <PhoneIcon color="gray.300" boxShadow="lg" />
                        <Box display="flex">
                          <Input
                            type="tel"
                            name="phoneNumber"
                            variant="filled"
                            placeholder="Phone Number"
                            value={userInfo.phoneNumber}
                            onChange={handleChange}
                            width="20rem"
                          />
                          <Button>
                            <EditIcon />
                          </Button>
                        </Box>
                      </Stack>
                    </InputGroup>{" "}
                  </FormControl>
                </Stack>
              </Box>
              <Box width="30vw">
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
                      <Input
                        id="government"
                        name="government"
                        variant="filled"
                        placeholder="Government"
                        value={userInfo.government}
                        onChange={handleChange}
                      />
                      <Button>
                        <EditIcon />
                      </Button>
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
                      <Input
                        id="city"
                        name="city"
                        variant="filled"
                        placeholder="City"
                        value={userInfo.city}
                        onChange={handleChange}
                      />
                      <Button>
                        <EditIcon />
                      </Button>
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
                      <Input
                        id="street"
                        name="street"
                        variant="filled"
                        placeholder="Street"
                        value={userInfo.street}
                        onChange={handleChange}
                      />
                      <Button>
                        <EditIcon />
                      </Button>
                    </Box>
                  </FormControl>
                </Stack>
                {tabletIpadsPortrait ? (
                  <Stack align="center">
                    <ButtonGroup variant="outline" spacing="6">
                      <Button colorScheme="blue" width="10rem" boxShadow="xl">
                        Save
                      </Button>
                      <Button width="10rem" boxShadow="xl">
                        Cancel
                      </Button>
                    </ButtonGroup>
                  </Stack>
                ) : (
                  <Stack align="center" marginTop="10rem" marginRight="5rem">
                    <ButtonGroup variant="outline" spacing="6">
                      <Button colorScheme="blue" width="10rem" boxShadow="xl">
                        Save
                      </Button>
                      <Button width="10rem" boxShadow="xl">
                        Cancel
                      </Button>
                    </ButtonGroup>
                  </Stack>
                )}
              </Box>
            </Box>
          ) : (
            <Box className="boxStyleResponsive">
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
                    <Input
                      id="full-name"
                      name="name"
                      variant="filled"
                      placeholder="Full Name"
                      value={userInfo.name}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                    <Input
                      id="email"
                      name="email"
                      variant="filled"
                      type="email"
                      placeholder="Email"
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                    <Input
                      id="password"
                      name="password"
                      variant="filled"
                      type="password"
                      placeholder="Password"
                      value={userInfo.password}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                    <PhoneIcon
                      color="gray.300"
                      boxShadow="lg"
                      marginTop="0.5rem"
                    />
                    <Input
                      type="tel"
                      name="phoneNumber"
                      variant="filled"
                      placeholder="Phone Number"
                      value={userInfo.phoneNumber}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
                  </Box>
                </FormControl>
              </Stack>

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
                    <Input
                      id="government"
                      name="government"
                      variant="filled"
                      placeholder="Government"
                      value={userInfo.government}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                    <Input
                      id="city"
                      name="city"
                      variant="filled"
                      placeholder="City"
                      value={userInfo.city}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
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
                    <Input
                      id="street"
                      name="street"
                      variant="filled"
                      placeholder="Street"
                      value={userInfo.street}
                      onChange={handleChange}
                    />
                    <Button>
                      <EditIcon />
                    </Button>
                  </Box>
                </FormControl>
              </Stack>
              {tabletIpadsPortrait ? (
                <Stack align="center">
                  <ButtonGroup variant="outline" spacing="6">
                    <Button colorScheme="blue" width="10rem" boxShadow="xl">
                      Save
                    </Button>
                    <Button width="10rem" boxShadow="xl">
                      Cancel
                    </Button>
                  </ButtonGroup>
                </Stack>
              ) : (
                <Box>
                  {phone ? (
                    <Stack align="center">
                      <ButtonGroup variant="outline" spacing="6">
                        <Button colorScheme="blue" width="10rem" boxShadow="xl">
                          Save
                        </Button>
                        <Button width="10rem" boxShadow="xl">
                          Cancel
                        </Button>
                      </ButtonGroup>
                    </Stack>
                  ) : (
                    <Stack align="center">
                      <ButtonGroup variant="outline" spacing="6">
                        <Button colorScheme="blue" boxShadow="xl">
                          Save
                        </Button>
                        <Button boxShadow="xl">Cancel</Button>
                      </ButtonGroup>
                    </Stack>
                  )}
                </Box>
              )}
            </Box>
          )}
          <Stack direction="row" spacing={4} align="center" marginTop="1.5rem">
            <BackdropExample />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default UserProfile;
