import { HStack, Radio, VStack, useToast } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import {
  CheckboxContainer,
  CheckboxControl,
  InputControl,
  RadioGroupControl,
  SubmitButton,
} from 'formik-chakra-ui'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useRecoilValue } from 'recoil'
import BreadcrumbNavigate from '../../../components/BreadcrumbNavigate/BreadcrumbNavigate'
import ErrorMessage from '../../../components/ErrorMessage'
import { Roles, States } from '../../../constant'
import instance from '../../../helpers/axios'
import { useGetUserDetails } from '../../../hooks/users/useGetUserDetails'
import UpdatePassword from '../components/UpdatePassword'
import { profile } from '../../../atoms/authAtom'

const UserDetails = () => {
  const { id } = useParams()
  const toast = useToast()

  const userProfileDetails = useRecoilValue(profile)

  const { data, isLoading, error } = useGetUserDetails(id)

  const initialValues = {
    name: data?.name || '',
    email: data?.email || '',
    roles: data?.access_info.roles || '',
    state: data?.state || '',
    clients: data?.access_info.clients.map((c) => c.id) || '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required().label('Name'),
    email: Yup.string().email().required().label('Email address'),
    roles: Yup.array().required().min(1).label('Roles'),
    clients: Yup.array().min(1).label('Clients'),
  })

  const onSubmit = async (values, action) => {
    await instance({
      method: 'PUT',
      url: `/user/${id}`,
      data: values,
    })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          toast({
            isClosable: true,
            status: 'success',
            variant: 'top-accent',
            position: 'top-right',
            title: 'Success',
            description: 'User updated successfully',
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return isLoading ? (
    'Loading...'
  ) : (
    <VStack alignItems="stretch">
      <BreadcrumbNavigate inactive="Users" active="Details" to="/users" />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <VStack alignItems="stretch">
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, isSubmitting }) => (
              <Form>
                <VStack alignItems="stretch" spacing={6}>
                  <HStack
                    spacing={{ base: 0, lg: 4 }}
                    flexDirection={{ base: 'column', lg: 'row' }}
                  >
                    <InputControl label="Name" name="name" />
                    <InputControl label="Email address" name="email" />
                  </HStack>

                  <CheckboxContainer
                    stackProps={{
                      direction: 'row',
                      spacing: 2,
                      padding: 0,
                    }}
                    name="roles"
                    label="Roles"
                  >
                    {Roles.map((role) => (
                      <CheckboxControl
                        key={role.id}
                        colorScheme="blue"
                        name="roles"
                        id={role.value}
                        value={role.value}
                      >
                        {role.title}
                      </CheckboxControl>
                    ))}
                  </CheckboxContainer>

                  <RadioGroupControl name="state" label="State">
                    {States.map((state) => (
                      <Radio
                        key={state.id}
                        colorScheme="blue"
                        value={state.value}
                      >
                        {state.title}
                      </Radio>
                    ))}
                  </RadioGroupControl>

                  <CheckboxContainer
                    stackProps={{
                      direction: 'row',
                      spacing: 2,
                      padding: 0,
                    }}
                    name="clients"
                    label="Clients"
                  >
                    {userProfileDetails?.access_info?.clients.map((client) => (
                      <CheckboxControl
                        key={client.id}
                        colorScheme="blue"
                        name="clients"
                        id={client.id}
                        value={client.id}
                      >
                        {client.name}
                      </CheckboxControl>
                    ))}
                  </CheckboxContainer>

                  <HStack justifyContent="end">
                    <SubmitButton
                      disabled={!(dirty && isValid) || isSubmitting}
                      variant="solid"
                      colorScheme="blue"
                    >
                      Update detail
                    </SubmitButton>
                  </HStack>
                </VStack>
              </Form>
            )}
          </Formik>
          <UpdatePassword />
        </VStack>
      )}
    </VStack>
  )
}

export default UserDetails
