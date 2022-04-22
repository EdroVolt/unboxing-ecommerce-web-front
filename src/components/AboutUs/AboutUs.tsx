import { Box, Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
// import bgimg from "assets/yas.svg";
// import dartIcon from "assets/darts-svgrepo-com.svg";
// import hearIcon from "assets/love-svgrepo-com.svg";
// import teamIcon from "assets/team-svgrepo-com.svg";

export const AboutUs = () => {
  return (
    <Box width={"100%"} height={"100vh"} mt={-7} bgColor={"red.100"}>
      {/* paraghraph section */}
      <HStack>
        <Box width={"50%"}>
          <VStack alignItems={"center"}>
            <HStack align={"start"}>
              <Text color={"#7B848C"} fontWeight={"extrabold"} fontSize={"7xl"}>
                ABOUT
              </Text>
              <Text
                color={"#B0B9BF"}
                borderColor={"blue.900"}
                border={"2px"}
                borderWidth={"2"}
                fontWeight={"extrabold"}
                fontSize={"7xl"}
              >
                Us
              </Text>
            </HStack>
            <Text fontSize={"50%"}>A Group Of Passion Driven People</Text>
          </VStack>
          <VStack
            alignItems={"start"}
            alignContent={"start"}
            mt={"10%"}
            ml={"25%"}
          >
            <Box>
              <Image src={"assets/darts-svgrepo-com.svg"} width={10}></Image>
              <Text fontSize={10}> Our Target Audience </Text>
              <Text fontSize={8}>
                Everybody Thinks There's Something Missing, Hopefully We Have A
                Hint About It
              </Text>
            </Box>
            <Box>
              <Image src={"assets/love-svgrepo-com.svg"} width={10}></Image>
              <Text fontSize={10}> Why People Prefer Us </Text>
              <Text fontSize={8}>
                Because We Will Search With You For Everything You Need
              </Text>
            </Box>
            <Box
              marginTop={"20%"}
              borderWidth={1}
              padding={"3%"}
              borderRadius={"2xl"}
              borderColor={"white"}
            >
              <Image src={"assets/team-svgrepo-com.svg"} width={10}></Image>
              <Text fontSize={10}> Follow Our Best Developers Team </Text>
              <VStack alignItems={"self-start"}>
                <Link fontWeight={"bold"} href="https://github.com/mennarefaat">
                  Menna Refaat
                </Link>
                <Link fontWeight={"bold"} href="https://github.com/EdroVolt">
                  {" "}
                  Ahmed Edrees
                </Link>
                <Link fontWeight={"bold"} href="https://github.com/Nesma91">
                  Nesma Taha
                </Link>
                <Link fontWeight={"bold"} href="https://github.com/rana2020701">
                  Rana Magdy
                </Link>
                <Link
                  fontWeight={"bold"}
                  href="https://github.com/yasmenMohammed1"
                >
                  Yasmen Abodabash
                </Link>
              </VStack>
            </Box>
          </VStack>
        </Box>

        {/* end paragraph section */}
        {/* start image section */}
        <Image width={"50%"} src={"assets/yas.svg"}></Image>
      </HStack>
      {/* end image section */}
    </Box>
  );
};
