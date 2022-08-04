import { useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import axios from '../../helpers/axios'

export const useChangePassword = () => {
  const toast = useToast()
  return useMutation(
    (values) => {
      return axios({
        method: 'PUT',
        url: '/user/me/password',
        data: {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        },
        withCredentials: false,
      })
        .then((res) => {
          if (res.status === 200) {
            return res.data.data
          }
        })
        .catch((err) => {
          throw err.response.data.message
        })
    },
    {
      onError: (error, variables, context) => {
        console.log(error)
        toast({
          isClosable: true,
          status: 'error',
          variant: 'top-accent',
          position: 'top-right',
          description: error,
        })
      },
    }
  )
}
