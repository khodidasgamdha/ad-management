import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  VStack,
  HStack,
  useToast,
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { InputControl, TextareaControl, SubmitButton } from 'formik-chakra-ui'
import * as Yup from 'yup'
import ChakraModal from '../../../components/ChakraModal'
import instance from '../../../helpers/axios'

const CreateConfigModal = ({ isOpen, onClose }) => {
  const toast = useToast()

  const initialValues = {
    key: '',
    value: '',
  }

  const validationSchema = Yup.object().shape({
    key: Yup.string().required().label('Key'),
    value: Yup.string().required().label('Value'),
  })

  const onSubmit = async (values, actions) => {
    await instance({
      method: 'POST',
      url: '/config',
      data: {
        key: values.key,
        value: JSON.parse(values.value),
      },
    })
      .then((response) => {
        if (response.status === 200) {
          toast({
            isClosable: true,
            title: 'Success',
            status: 'success',
            variant: 'top-accent',
            position: 'top-right',
            description: response.data.data.message,
          })
          actions.resetForm()
          onClose()
        }
      })
      .catch((error) => {
        toast({
          isClosable: true,
          title: 'Error',
          status: 'error',
          variant: 'top-accent',
          position: 'top-right',
          description: error.response.data.message,
        })
      })
  }

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalContent>
        <ModalHeader>Create config</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={0}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, isSubmitting }) => (
              <Form autoComplete="off">
                <VStack alignItems="stretch" spacing={4}>
                  <InputControl name="key" label="Key" />
                  <TextareaControl name="value" label="Value" />
                </VStack>
                <ModalFooter px={0}>
                  <HStack>
                    <Button
                      size="sm"
                      colorScheme="red"
                      variant="ghost"
                      onClick={onClose}
                    >
                      Close
                    </Button>
                    <SubmitButton
                      size="sm"
                      colorScheme="blue"
                      disabled={!(dirty && isValid) || isSubmitting}
                    >
                      Create config
                    </SubmitButton>
                  </HStack>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default CreateConfigModal
