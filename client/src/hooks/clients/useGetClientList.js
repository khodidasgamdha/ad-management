import { useQuery } from 'react-query'
import axios from '../../helpers/axios'

export const useGetClientList = () => {
  return useQuery(['client'], async () => {
    return axios
      .get('/client', {
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
