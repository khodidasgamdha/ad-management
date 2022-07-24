import { useQuery, useMutation } from 'react-query'
import axios from '../../helpers/axios'

export const useGetClientDetails = (id) => {
  return useQuery(['client', id], async () => {
    return axios
      .get(`/client/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data.data.client
        }
      })
      .catch((err) => {
        throw err.response.data.message
      })
  })
}

export const useGetClientDetailsOnClick = () => {
  return useMutation((values) =>
    axios({
      method: 'GET',
      url: `/client/${values.id}`,
      withCredentials: true,
    })
      .then((res) => {
          console.log(res);
        if (res.status === 200) {
          return res.data.data
        }
      })
      .catch((err) => {
        return err.response
      })
  )
}
