//imports
import {
    Box,
    ButtonGroup,
    Center,
    FormLabel,
  } from "@chakra-ui/react";
  import { Field, Formik } from "formik";
  import {
    InputControl,
    SubmitButton,
    ResetButton,
  } from "formik-chakra-ui";
  import React from "react";
  
  import { onSubmit, ProductFormProps, ProductSchema } from './Validations'
  
  export default function FormCategory({
    image,
    name,

    eventHandler,
  }: ProductFormProps) {
  
   const initialValues={
          image:image,
          name: name,
  }
  
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, values, errors }) => (
          <Center>
            <Box
              width={{ sm: "100%", md: "50%" }}
              mb={5}
              as="form"
              onSubmit={handleSubmit as any}
            >
              <FormLabel htmlFor="product-name" mt={5}>
                Category name
              </FormLabel>
              <InputControl id="name" placeholder="Product name" name="name" />

             
              <FormLabel htmlFor="product-image" mt={5}>
                Product Image
              </FormLabel>
              <Field
                id="product-image"
                placeholder="Product image"
                name="image"
                type="file"
              />
              <ButtonGroup display="block" mt={4}>
                <SubmitButton
                  colorScheme="gray"
                  pr={20}
                  pl={20}
                  onClick={() => {
                    eventHandler(values);
                  }}
                >
                  Submit
                </SubmitButton>
                <ResetButton colorScheme="gray" ml={4} pr={10} pl={10}>
                  Reset
                </ResetButton>
              </ButtonGroup>
            </Box>
          </Center>
        )}
      </Formik>
    );
  }
  