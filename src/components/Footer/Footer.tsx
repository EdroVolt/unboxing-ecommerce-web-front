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
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import { Logo } from "../../Logo";
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
  const userDetails = { ...props.userDetails };
  const isAuth = props.isAuth;
  const [guestEmail, setGuestEmail] = useState<string>("");
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
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                onChange={(e) => {
                  setGuestEmail(e.target.value);
                }}
                value={isAuth ? userDetails.userEmail : guestEmail}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
