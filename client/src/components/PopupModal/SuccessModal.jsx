import {
    Button,
    css,
    Flex,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react";
import * as React from "react";
import Success from "./images/success.png";

const SuccessModal = ({ isOpen, onClose }) => {
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
                    <img src={Success} alt="success-icon" />
                    <Heading color="#59AB9E" size="md" margin="15px 0">
                        Success!
                    </Heading>
                    {/* <Text
                      css={css({
                        color: "#757998",
                        marginBottom: "30px",
                      })}
                    >
                      {description}
                    </Text> */}
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
                            padding: "30px 0",
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
                            background: "#59AB9E !important",
                            color: "white",
                            padding: "30px 0",
                        })}
                        onClick={onClose}
                    >
                        OK!
                    </Button>
                </Flex>
            </ModalContent>
        </Modal>
    );
};

export default SuccessModal;
