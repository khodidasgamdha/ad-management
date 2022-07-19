import { useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'
import axios from '../../helpers/axios'

export const useCreateClone = () => {
  const toast = useToast()

  const queryClient = useQueryClient()

  return useMutation(
    (values) => {
      return axios({
        method: 'POST',
        url: `/client/${values.clientId}/campaign-brief/${values.campaignBriefId}/clone`,
        withCredentials: true,
      })
        .then((res) => {
          return res.data.data
        })
        .catch((err) => {
          throw err.response.data.message
        })
    },
    {
      onSuccess: (data, variables, context) => {
        toast({
          isClosable: true,
          status: 'success',
          variant: 'top-accent',
          position: 'top-right',
          title: 'Success',
          description: data?.message,
        })
        queryClient.invalidateQueries(['campaign', variables.clientId])
      },
      onError: (error, variables, context) => {
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
