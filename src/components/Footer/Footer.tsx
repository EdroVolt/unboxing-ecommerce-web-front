import emailjs, { send } from "emailjs-com";
import { Link } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  FormLabel,
  Textarea,
  Button,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { getMeAPI } from "../../store/actionCreator/userActionCreator";
import { EmailIcon } from "@chakra-ui/icons";
import { about, home } from "../../router/routePaths";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer({ isAuth }: any) {
  let user = useSelector((state: any) => state.user.user);
  const toast = useToast();
  const [toSend, setToSend] = useState({
    from_name: user?.name,
    to_name: "admin",
    message: "",
    user_name: user?.name,
    user_id: user?._id,
    reply_to: user?.email,
  });
  const onSubmit = (e: any) => {
    user && dispatch(getMeAPI());
    send(
      "service_2t90r1h",
      "template_7gs4ezf",
      {
        from_name: user?.name || "guest",
        to_name: "admin",
        message: toSend.message,
        user_name: user?.name || toSend.user_name,
        user_id: user?._id,
        reply_to: user?.email || toSend.reply_to,
      },
      "5vg6rvpudykTlzC2i"
    )
      .then((response) => {
        toast({
          duration: 9000,
          isClosable: true,
          title: "your feadback had been sent, we will response immediately",
        });
      })
      .catch((err) => {
        toast({
          duration: 9000,
          isClosable: true,
          status: "error",
          title: "something went wrong",
        });
      });
  };

  const dispatch: any = useDispatch();
  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getMeAPI());
  }, [isAuth]);

  return (
    <Box bg={"gray.900"} color={"gray.200"}>
      <Container as={Stack} maxW={"8xl"} pt={10} pb="3">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 2fr" }}
          spacing={8}
          mb="35"
        >
          <Stack spacing={2}>
            <Box>
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
            </Box>

            <Link to={about}>About us</Link>

            <Stack direction={"row"} pt={"6"} spacing={6}>
              <SocialButton label={"Twitter"} href={"https://www.twitter.com"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"https://www.youtube.com"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instgram.com"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>
              <Text
                fontSize={24}
                lineHeight="none"
                borderLeft="4px solid pink"
                px="2"
              >
                Our Talented Team
              </Text>
            </ListHeader>
            <a
              href={`https://www.linkedin.com/in/edrovolt/`}
              target="_blank"
              rel="noreferrer"
            >
              Ahmed Edrees
            </a>
            <a
              href={"https://www.linkedin.com/in/menna-refaat"}
              target="_blank"
              rel="noreferrer"
            >
              Menna Refaat
            </a>
            <a
              href="https://www.linkedin.com/in/nesma-taha"
              target="_blank"
              rel="noreferrer"
            >
              Nesma Taha
            </a>
            <a
              href="https://www.linkedin.com/in/rana-wagdi"
              target="_blank"
              rel="noreferrer"
            >
              Rana Wagdi
            </a>
            <a
              href="https://www.linkedin.com/in/yasmen-mohammed/"
              target="_blank"
              rel="noreferrer"
            >
              Yasmen Abodabash
            </a>
          </Stack>

          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "1fr  2fr" }}
            spacing="10"
            w="full"
          >
            <ListHeader>
              <Text
                fontSize={30}
                lineHeight="none"
                borderLeft="4px solid pink"
                px="2"
              >
                Your Feedback is very appreciated
              </Text>
            </ListHeader>
            <Box>
              <Input
                type="hidden"
                name="contact_number"
                onChange={handleChange}
                m="5"
              />
              <HStack mb={"5"} w={"full"}>
                <Input
                  onChange={handleChange}
                  aria-label="Name"
                  placeholder="Name"
                  type="text"
                  w={"full"}
                  me="5"
                  name="from_name"
                  color={"gray.100"}
                  border="1px solid white"
                  px={"4"}
                  fontWeight={"bold"}
                  borderRadius={"none"}
                  value={user?.name}
                />
                <Input
                  aria-label="Email"
                  placeholder="Email"
                  type="email"
                  w={"full"}
                  onChange={handleChange}
                  ms="5"
                  fontWeight={"bold"}
                  name="reply_to"
                  color={"gray.100"}
                  borderRadius={"none"}
                  value={user?.email}
                />
              </HStack>

              <Textarea
                aria-label="messages"
                name="message"
                fontWeight={"bold"}
                borderColor={"gray.600"}
                placeholder="Message"
                onChange={handleChange}
                mb="3"
              />
              <IconButton
                aria-label="Email"
                icon={<EmailIcon />}
                type="submit"
                value="Send"
                w="100%"
                fontSize={"32"}
                color="black"
                onClick={onSubmit}
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
        <Text textAlign={"center"} fontSize={"sm"}>
          Made with 💓 by
          <Text
            className="brand"
            display={"inline-block"}
            color={"yellow.400"}
            mx="2"
            fontSize="lg"
          >
            Unboxing
          </Text>
          Team. ©2022 All rights reserved
        </Text>
      </Container>
    </Box>
  );
}
