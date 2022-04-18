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
} from "@chakra-ui/react";
import React from "react";

export default function BackdropExample() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  //confirmDelete()

  return (
    <>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Delete Account
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader fontFamily="sans-serif">
            <Icon marginRight=".5 rem" /> Confirmation Request:
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontStyle="oblique" fontFamily="sans-serif">
              Do you really want to delete your precious account?
            </Text>
          </ModalBody>
          <Box display="flex" margin="auto">
            <ModalFooter>
              {/* use confirmDelete instead onclose */}
              <Button
                colorScheme="blue"
                width="10rem"
                boxShadow="xl"
                onClick={onClose}
              >
                Yes
              </Button>
            </ModalFooter>
            <ModalFooter>
              <Button width="10rem" boxShadow="xl" onClick={onClose}>
                No
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
