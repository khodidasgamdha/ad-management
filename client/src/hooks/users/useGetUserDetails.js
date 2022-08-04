import { useQuery } from 'react-query'
import axios from '../../helpers/axios'

export const useGetUserDetails = (id) => {
  return useQuery(['user', id], async () => {
    return axios
      .get(`/user/${id}`, {
        withCredentials: false,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data.data.user
        }
      })
      .catch((err) => {
        throw err.response.data.message
      })
  })
}
