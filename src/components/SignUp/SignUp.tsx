import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signup.css";
import {
  Box,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BiShowAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { createUserAPI } from "../../store/actionCreator/userActionCreator";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const toast = useToast();

  const dispatch: any = useDispatch();
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
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
        phoneNumber: Yup.string()
          .length(10, "Phone Number must be correct")
          .required("Phone Number is required"),
      })}
      onSubmit={(fields) => {
        console.log(fields);
        try {
          dispatch(
            createUserAPI({
              name: fields.FullName,
              email: fields.email,
              password: fields.password,
              phoneNumber: fields.phoneNumber,
            })
          );
          toast({
            title: "account created.",
            description: `lets start with us a new journey ${fields.FullName}`,
            status: "success",
            duration: 20000,
            isClosable: true,
          });
          navigate("/login");
        } catch {
          toast({
            title: "email is already registered.",
            description: "this email is already signed",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }}
      render={({ errors, touched }) => (
        <>
          <Form className="signup_form">
            <Heading className="title" as="h1" size="md">
              Sign Up
            </Heading>
            <Text className="text">Create Unboxing account</Text>
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
              <ErrorMessage name="FullName" component="div" className="error" />
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
              <ErrorMessage name="password" component="div" className="error" />
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
                <InputRightElement width="4.5rem">
                  <BiShowAlt
                    className="social-icon"
                    onClick={togglePassword}
                    size="20px"
                  />
                </InputRightElement>
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
                className="btn btn-primary mr-2 form_button"
              >
                Register
              </Button>
              <Button
                type="reset"
                style={{ backgroundColor: "red" }}
                className="rest"
              >
                Reset
              </Button>
            </Box>
            <Text className="text">Already have an account? Sign in</Text>
          </Form>
        </>
      )}
    />
  );
};

export default SignUp;
