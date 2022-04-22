import {
  ChakraProvider,
  Box,
  //  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { extendTheme } from "@chakra-ui/react";
// import Card from "./common/Card/Card";
import { Provider } from "react-redux";
import Store from "../store/store";

// import Router from "../router/routes";
import "./app.css";

import Router from "../router/routes";
import NotFound from "../pages/NotFound";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

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
  <Provider store={Store}>
    <ChakraProvider theme={theme}>
      {/* <Grid minH="100vh" p={3}> */}
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      {/* <NotFound /> */}

      <Router />
    </ChakraProvider>
  </Provider>
);
