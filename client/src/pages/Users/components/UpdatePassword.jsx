import { HStack, useToast, VStack } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { InputControl, SubmitButton } from 'formik-chakra-ui'
import instance from '../../../helpers/axios'

const UpdatePassword = () => {
  const { id } = useParams()
  const toast = useToast()

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    newPassword: Yup.string().required().label('New Password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required()
      .label('Confirm Password'),
  })

  const onSubmit = async (values, action) => {
    await instance({
      method: 'PUT',
      url: `/user/${id}/password`,
      data: values,
      withCredentials: false,
    })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          action.setSubmitting(false)
          action.resetForm()
          toast({
            isClosable: true,
            status: 'success',
            variant: 'top-accent',
            position: 'top-right',
            title: 'Success',
            description: 'Passwrord updated successfully',
          })
        }
      })
      .catch((error) => {
        toast({
          isClosable: true,
          status: 'error',
          variant: 'top-accent',
          position: 'top-right',
          description: error.response.data.message,
        })
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form>
          <VStack alignItems="stretch" spacing={6}>
            <InputControl label="New password" name="newPassword" />
            <InputControl label="Confirm password" name="confirmPassword" />
            <HStack justifyContent="end">
              <SubmitButton
                disabled={!(dirty && isValid) || isSubmitting}
                variant="solid"
                colorScheme="blue"
              >
                Update password
              </SubmitButton>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  )
}

export default UpdatePassword
