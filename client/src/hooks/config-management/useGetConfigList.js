import { useQuery } from 'react-query'
import axios from '../../helpers/axios'

export const useGetConfigList = () => {
  return useQuery(['config'], async () => {
    return axios
      .get('/config', {
        withCredentials: true,
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
