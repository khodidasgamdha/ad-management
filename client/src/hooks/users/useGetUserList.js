import { useQuery } from 'react-query'
import axios from '../../helpers/axios'

export const useGetUserList = () => {
  return useQuery(['users'], async () => {
    return axios
      .get('/user', {
        withCredentials: false,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data.data
        }
      })
      .catch((err) => {
        return err.response
      })
  })
}
