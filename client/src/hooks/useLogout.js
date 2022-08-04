import { useToast } from '@chakra-ui/react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { profile } from '../atoms/authAtom'
import axios from '../helpers/axios'

export const useLogout = () => {
  let navigate = useNavigate()
  let toast = useToast()

  // eslint-disable-next-line
  const [_, setProfileData] = useRecoilState(profile)

  return useMutation(async () => {
    return axios
      .post('/logout', {
        withCredentials: false,
      })
      .then((res) => {
        if (res.status === 200) {
          setProfileData({})
          toast({
            status: 'success',
            variant: 'top-accent',
            position: 'top-right',
            description: res.data.data.message,
          })
          navigate('/login', { replace: true })
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
  })
}
