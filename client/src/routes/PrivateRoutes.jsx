import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { profile } from '../atoms/authAtom'
import Loading from '../components/Loading'
import instance from '../helpers/axios'

const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // eslint-disable-next-line
  const [profileData, setProfileData] = useRecoilState(profile)

  useEffect(() => {
    instance({
      method: 'GET',
      url: '/user/me',
    })
      .then((response) => {
        if (response.status === 200) {
          setProfileData(response.data.data.user)
          localStorage.setItem(
            'client',
            JSON.stringify(response.data.data.user)
          )
          setIsAuth(true)
        } else {
          setIsAuth(false)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        setIsAuth(false)
        setIsLoading(false)
      })

    return () => {
      setIsAuth(false)
      setIsLoading(true)
    }
  }, [setProfileData])

  return isLoading ? (
    <Loading />
  ) : isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoutes
