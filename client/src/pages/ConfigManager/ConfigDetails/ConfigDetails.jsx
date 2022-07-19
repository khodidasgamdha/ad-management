import { useToast, VStack, HStack, Radio } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import {
  InputControl,
  TextareaControl,
  RadioGroupControl,
  SubmitButton,
} from 'formik-chakra-ui'
import { useParams } from 'react-router-dom'
import BreadcrumbNavigate from '../../../components/BreadcrumbNavigate/BreadcrumbNavigate'
import { useGetConfinDetails } from '../../../hooks/config-management/useGetConfinDetails'
import instance from '../../../helpers/axios'
import { States } from '../../../constant'
import ErrorMessage from '../../../components/ErrorMessage'
import Loading from '../../../components/Loading'

const ConfigDetails = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useGetConfinDetails(id)

  const toast = useToast()

  const initialValues = {
    key: data?.key || '',
    value: JSON.stringify(data?.value) || '',
    state: data?.state || '',
  }

  const validationSchema = Yup.object().shape({
    key: Yup.string().required().label('Key'),
    value: Yup.string().required().label('Value'),
  })

  const onSubmit = async (values, actions) => {
    await instance({
      method: 'PUT',
      url: `/config/${id}`,
      data: {
        key: values.key,
        state: values.state,
        value: JSON.parse(values.value),
      },
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
            description: 'Config updated successfully',
          })
        }
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return isLoading ? (
    <Loading />
  ) : (
    <VStack alignItems="stretch">
      <BreadcrumbNavigate
        inactive="Config management"
        active="Details"
        to="/config"
      />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
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
                <HStack justifyContent="end">
                  <SubmitButton
                    colorScheme="blue"
                    disabled={!(dirty && isValid) || isSubmitting}
                  >
                    Update config
                  </SubmitButton>
                </HStack>
              </VStack>
            </Form>
          )}
        </Formik>
      )}
    </VStack>
  )
}

export default ConfigDetails
