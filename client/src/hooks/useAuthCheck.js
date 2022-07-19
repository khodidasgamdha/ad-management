import { useQuery } from 'react-query'
import { profile } from '../atoms/authAtom'
import { useRecoilState } from 'recoil'
import instance from '../helpers/axios'

export const useAuthCheck = () => {
  // eslint-disable-next-line
  const [profileData, setProfileData] = useRecoilState(profile)

  return useQuery('authCheck', () => {
    return instance({
      method: 'GET',
      url: '/user/me',
    })
      .then((res) => {
        if (res.status === 200) {
          setProfileData(res.data.data.user)
          return true
        } else {
          throw new Error('Not authorized')
        }
      })
      .catch((err) => {
        console.log(err.response)
        throw err
      })
  })
}
