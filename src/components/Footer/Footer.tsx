import emailjs, { send } from "emailjs-com";

import {
  Box,
  chakra,
  Container,
  Link,
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
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { Logo } from "../../Logo";
import { useDispatch, useSelector } from "react-redux";
import {
  getMeAPI,
  getUserDetailsAPI,
} from "../../store/actionCreator/userActionCreator";
import { EditIcon, EmailIcon } from "@chakra-ui/icons";

interface Footerprops {
  isAuth: boolean;
  userDetails: { userId: string; userEmail: string } | {};
}
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

export default function Footer(props: Footerprops) {
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
    e.preventDefault();
    send("service_2t90r1h", "template_7gs4ezf", toSend, "5vg6rvpudykTlzC2i")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
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

  const userDetails = { ...props.userDetails };
  const dispatch: any = useDispatch();
  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getMeAPI());
  }, []);
  return (
    <Box
      bg={useColorModeValue("gray.300", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      // position="fixed"
      // right="0"
      // left="0"
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo
                width={"50%"}
                height={"30%"}
                color={useColorModeValue("gray.700", "white")}
              />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 Unposing Team Templates. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
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
            <ListHeader>Company</ListHeader>
            <Link href={"/aboutUs"}>About us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Account</ListHeader>
            <Link href={`/${userDetails.userId}`}>Your Account</Link>
            <Link href={"/categories"}>Visit Out Categories</Link>
            <Link href="/offers">Visit Our Offers</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>will recieve greatfully your feedback</ListHeader>
            <form onSubmit={onSubmit}>
              <Input
                type="hidden"
                name="contact_number"
                onChange={handleChange}
              />
              <FormLabel>Name</FormLabel>
              <Input
                aria-label="Name"
                type="text"
                name="from_name"
                value={toSend.from_name}
              />
              <FormLabel>Email</FormLabel>
              <Input
                aria-label="Message"
                type="email"
                name="reply_to"
                value={toSend.reply_to}
              />
              <FormLabel>Message</FormLabel>
              <Textarea
                aria-label="messages"
                name="message"
                onChange={handleChange}
              />
              <IconButton
                aria-label="Email"
                icon={<EmailIcon />}
                type="submit"
                value="Send"
              />{" "}
            </form>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
