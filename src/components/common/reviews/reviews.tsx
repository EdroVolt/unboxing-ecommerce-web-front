import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Box,
  Icon,
  Stack,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StarRating } from "./rating";

export default function ModalPopUp(props: any) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch=useDispatch()

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  //confirmDelete()

  const handlingRate = (rate: number) => {
    setRating(rate);
  };
  const addReview = () => {
    dispatch()
  };

  return (
    <>
      <Button
        variant="link"
        textAlign={"left"}
        color={"gray.500"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Review this product
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader fontFamily="sans-serif">
            <Icon marginRight=".5 rem" /> Reviewing
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontStyle="oblique" fontFamily="sans-serif">
              Add Your Comment and rate
            </Text>
          </ModalBody>
          <Box display="flex" margin="auto">
            <ModalFooter>
              <Stack spacing={3}>
                <Input
                  variant="filled"
                  placeholder="Filled"
                  type="text"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </Stack>
              {/* use confirmDelete instead onclose */}
              <StarRating rating={rating} rateHndling={handlingRate} />
            </ModalFooter>
            <ModalFooter></ModalFooter>
          </Box>
          <Button onClick={addReview}>Save</Button>
        </ModalContent>
      </Modal>
    </>
  );
}
