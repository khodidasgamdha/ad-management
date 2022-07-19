import { Modal, ModalOverlay } from '@chakra-ui/react'

const ChakraModal = ({ children, isOpen, onClose, size, ...rest }) => {
  return (
    <Modal
      isCentered
      size={size}
      motionPreset="scale"
      scrollBehavior="inside"
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      {...rest}
    >
      <ModalOverlay />
      {children}
    </Modal>
  )
}

export default ChakraModal
