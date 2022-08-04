// client/e940f660-b417-4df8-aeee-aea2fad0fa86/campaign-brief

import { useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import axios from '../../helpers/axios'

export const useCreateCampaignList = (clientId) => {
  const toast = useToast()
  return useMutation(
    (values) => {
      return axios({
        method: 'POST',
        url: `/client/${clientId}/campaign-brief`,
        data: values,
        withCredentials: false,
      })
        .then((res) => {
          console.log(res.data)
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
