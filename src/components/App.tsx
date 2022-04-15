import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  //  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { extendTheme } from "@chakra-ui/react";
import Home from "../pages/Home";
import "./app.css";
import Card from "./common/Card/Card";
import { AboutUs } from "./AboutUs/AboutUs";
import Router from "../router/routes";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    default: {
      100: "#B0B9BF",
      200: "#7B848C",
    },
    primary: {
      100: "#F2A7A7",
      200: "#F28599",
    },
    secondary: {
      100: "#BF9A56",
      200: "#735026",
      300: "#26190D",
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      {/* <Grid minH="100vh" p={3}> */}
      <ColorModeSwitcher justifySelf="flex-end" />
      <Router />
    </Box>
  </ChakraProvider>
);
