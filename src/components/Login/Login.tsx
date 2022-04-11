import {
  Box,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "./login.css";
import * as Yup from "yup";
import { BiShowAlt } from "react-icons/bi";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum"),
});
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik: { errors: any; touched: any; isValid: any; dirty: any }) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <>
            <Box className="container">
              <Form className="form__login" style={{ width: "350px" }}>
                <Heading className="title" as="h1" size="md">
                  Sign in
                </Heading>
                <Text className="text" style={{ marginBottom: "60px" }}>
                  Sign in using your Unboxing account
                </Text>
                <Box className="form-group">
                  <Field
                    name="email"
                    type="tex"
                    placeholder="Email"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </Box>

                <Box className="form-group">
                  <InputGroup size="md">
                    <Field
                      name="password"
                      placeholder="Password"
                      type={passwordShown ? "text" : "password"}
                      className={
                        "form-control" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <InputRightElement width="4.5rem">
                      <BiShowAlt
                        className="social-icon"
                        onClick={togglePassword}
                        size="20px"
                      />
                    </InputRightElement>
                  </InputGroup>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </Box>
                <Button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn form_button" : "form_button"}
                  disabled={!(dirty && isValid)}
                >
                  Sign In
                </Button>
                <Button className="form_button">Create an account</Button>
              </Form>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};
export default Login;
