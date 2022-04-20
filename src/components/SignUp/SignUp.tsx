import React, { useState } from "react";
// import { Navigate } from 'react-router-dom';
// import  Redirect  from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./signup.css";
import {
  Box,
  Button,
  Container,
  Heading,
  InputGroup,
  InputRightElement,
  // Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiShowAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { createUserAPI } from "../../store/actionCreator/userActionCreator";
import { home, login } from "../../router/routePaths";
import { Navigate } from "react-router";
import Login from "../Login/Login";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  return (
    <Formik
      initialValues={{
        FullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        FullName: Yup.string().required("Full Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
        phoneNumber: Yup.string()
          .length(10, "Phone Number must be correct")
          .required("Phone Number is required"),
      })}
      onSubmit={(fields): any => {
        console.log(fields);
        dispatch(
          createUserAPI({
            name: fields.FullName,
            email: fields.email,
            password: fields.password,
            phoneNumber: fields.phoneNumber,
          })
        );
        navigate(-1);
      }}
      render={({ errors, touched }) => (
        <>
          <Container maxW="450px">
           
            <Form
              className="signup_form"
              style={{ padding: "2rem" }}
               // eslint-disable-next-line react-hooks/rules-of-hooks
              // borderColor={useColorModeValue("gray.200", "gray.600")}
            >
              <Heading className="title" as="h1" size="md" textAlign="center">
                Sign Up
              </Heading>
              <Text className="text" textAlign={"center"}>
                Create Unboxing account
              </Text>
              <Box className="form-group">
                <Field
                  name="FullName"
                  type="text"
                  placeholder="Full Name"
                  className={
                    "form-control" +
                    (errors.FullName && touched.FullName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="FullName"
                  component="div"
                  className="error"
                />
              </Box>
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
                <ErrorMessage name="email" component="div" className="error" />
              </Box>
              <Box className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  value="+02"
                  style={{ width: "14%", display: "flex", float: "left" }}
                  disabled
                />
                <Field
                  name="phoneNumber"
                  type="number"
                  style={{ width: "85%" }}
                  placeholder="PhoneNumber"
                  className={
                    "form-control" +
                    (errors.phoneNumber && touched.phoneNumber
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="phoneNumber"
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
                      (errors.password && touched.password ? " is-invalid" : "")
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
              <Box className="form-group">
                <InputGroup size="md">
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                </InputGroup>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="error"
                />
              </Box>
              <Box className="form-group">
                <Button
                  type="submit"
                  bg="blue.600"
                  className="btn btn-primary mr-2 form_button"
                >
                  Register
                </Button>
                <Button type="reset" bg="red.600" className="rest">
                  Reset
                </Button>
              </Box>
              <Text className="text">
                Already have an account?
                <Link to={login} style={{ color: "blue", cursor: "pointer" }}>
                  {" "}
                  Sign in
                </Link>
              </Text>
            </Form>
          </Container>
        </>
      )}
    />
  );
};

export default SignUp;
