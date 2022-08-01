import {
  Button,
  css,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import Error from "./images/error.png";

const ErrorModal = ({ isOpen, onClose, description }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalBody
          css={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <img src={Error} alt="success-icon" />
          <Heading color="#EA4762" size="md" margin="15px 0">
          Oh dear...
          </Heading>
          <Text
            css={css({
              color: "#757998",
              marginBottom: "30px",
            })}
          >
            { description }
          </Text>
        </ModalBody>
        <Flex>
          <Button
            css={css({
              width: "50%",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              background: "rgba(167, 169, 189, 0.3) !important",
              color: "#757998",
              padding:"30px 0"
            })}
            onClick={onClose}
          >
            Go Back
          </Button>
          <Button
            css={css({
              width: "50%",
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0",
              borderBottomLeftRadius: "0",
              background: "#FF6073 !important",
              color: "white",
              padding:"30px 0"
            })}
            onClick={onClose}
          >
            Edit
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
