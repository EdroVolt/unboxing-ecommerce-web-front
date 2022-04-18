//imports
import {
  Box,
  ButtonGroup,
  Center,
  FormLabel,
  Grid,
  NumberInput,
  Radio,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import {
  InputControl,
  SubmitButton,
  RadioGroupControl,
  TextareaControl,
  SelectControl,
  ResetButton,
} from "formik-chakra-ui";
import React, { useEffect, useState } from "react";

import { onSubmit, ProductFormProps, ProductSchema } from "./vaidation";

export default function ProductForm({
  image,
  name,
  price,
  discription,
  categoryName,
  xlCount,
  lCount,
  mdCount,
  sCount,
  xsCount,
  offer,
  discount,
  eventHandler,
}: ProductFormProps) {
  const initialValues = {
    image: image,
    name: name,
    price: price,
    discription: discription,
    categoryName: categoryName,
    xlCount: xlCount,
    lCount: lCount,
    mdCount: mdCount,
    sCount: sCount,
    xsCount: xsCount,
    offer: offer,
    discount: discount,
  };

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
              Product name
            </FormLabel>
            <InputControl id="name" placeholder="Product name" name="name" />

            <FormLabel htmlFor="product-discription" mt={5}>
              Product Discription
            </FormLabel>
            <TextareaControl
              id="product-discription"
              placeholder="Product name"
              name="discription"
            />
            <FormLabel htmlFor="product-price" mt={5}>
              Product price
            </FormLabel>
            <InputControl id="product-Price" name="price" />
            <FormLabel htmlFor="categoryName" mt={5}>
              Category Name
            </FormLabel>
            <SelectControl
              name="select"
              selectProps={{ placeholder: "Select option" }}
            >
              <option value="option1">Option 1</option>
            </SelectControl>
            <FormLabel htmlFor="sizeCount" mt={5}>
              Sizes Count
            </FormLabel>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} ml={6} mr={6}>
              <NumberInput>
                <span>XL</span>
                <InputControl name="xlCount" />
              </NumberInput>
              <NumberInput>
                <span>L</span>
                <InputControl name="lCount" />
              </NumberInput>
              <NumberInput>
                <span>md</span>
                <InputControl name="mdCount" />
              </NumberInput>
              <NumberInput>
                <span>S</span>
                <InputControl name="sCount" />
              </NumberInput>
              <NumberInput>
                <span>XS</span>
                <InputControl name="xsCount" />
              </NumberInput>
            </Grid>
            <FormLabel htmlFor="product-discount" mt={5}>
              Product discount
            </FormLabel>
            <NumberInput>
              <InputControl id="discount" name="discount" />
            </NumberInput>
            <RadioGroupControl name="favoriteColor" label=" Product offer">
              <Radio value="#ff0000" mr={4}>
                False
              </Radio>
              <Radio value="#00ff00" mr={4}>
                True
              </Radio>
            </RadioGroupControl>
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
