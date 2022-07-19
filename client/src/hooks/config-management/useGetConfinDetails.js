import { useQuery } from 'react-query'
import axios from '../../helpers/axios'

export const useGetConfinDetails = (id) => {
  return useQuery(['config', id], async () => {
    return axios
      .get(`/config/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data.data.config
        }
      })
      .catch((err) => {
        throw err.response.data.message
      })
  })
}
