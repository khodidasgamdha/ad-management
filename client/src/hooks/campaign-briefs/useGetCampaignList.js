import { useQuery } from 'react-query'
import axios from '../../helpers/axios'

export const useGetCampaignList = (clientId) => {
  return useQuery(['campaign', clientId], async () => {
    return axios
      .get(`/client/${clientId}/campaign-brief`, {
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
