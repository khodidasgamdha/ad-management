import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import axios from 'axios'
import { Form, Formik } from 'formik'
import { InputControl, SubmitButton } from 'formik-chakra-ui'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import { profile } from '../../atoms/authAtom'
import Loading from '../../components/Loading'

const Login = () => {
  const [isLoading, setIsLoading] = useState(true)
  // eslint-disable-next-line
  const [profileData, setProfileData] = useRecoilState(profile)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: `${process.env.REACT_APP_API_URL}`,
      url: '/user/me',
      withCredentials: false,
    })
      .then((response) => {
        if (response.status === 200) {
          setProfileData(response.data.data.user)
          window.location = '/'
        }
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
      })

    return () => {
      setIsLoading(true)
    }
  }, [setProfileData])

  let toast = useToast()

  const handleSubmit = async (values, { setSubmitting }) => {
    return await axios({
      method: 'POST',
      baseURL: `${process.env.REACT_APP_API_URL}`,
      url: '/login',
      data: {
        email: values.email,
        password: values.password,
      },
      withCredentials: false,
    })
      .then((response) => {
        if (response.status === 200) {
            localStorage.setItem("jwt", response.data.data.tokens.jwt)
            localStorage.setItem("jwtRefresh", response.data.data.tokens.jwtRefresh)
          toast({
            isClosable: true,
            status: 'success',
            variant: 'top-accent',
            position: 'top-right',
            title: 'Success',
            description: 'You have been logged in',
          })
          window.location = '/'
        }
      })
      .catch((error) => {
        toast({
          isClosable: true,
          status: 'error',
          variant: 'top-accent',
          position: 'top-right',
          description: error.response?.data?.message || 'Something goes wrong!',
        })
      })
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Flex align={'center'} bg="gray.50" justify={'center'} minH={'100vh'}>
      <Stack
        spacing={4}
        w={'full'}
        overflow="hidden"
        maxW="container.lg"
        bg={'white'}
        rounded={'xl'}
        boxShadow={'lg'}
        my={12}
      >
        <HStack justifyContent="space-between">
          <Flex p={12} flex={1} align={'center'} justify={'center'}>
            <VStack alignItems="start">
              <Image
                src={`${process.env.PUBLIC_URL}/images/Logo.png`}
                height="33px"
                mb="45px"
              />
              <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontWeight="700" fontFamily="serif">
                  Welcome to Kedet.
                </Heading>
                <Text color="gray.500" fontWeight="500">
                  Please sign in to your Kedet account to continue.
                </Text>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email()
                      .required()
                      .label('Email address'),
                    password: Yup.string()
                      .min(3)
                      .max(20)
                      .required()
                      .label('Password'),
                  })}
                  onSubmit={handleSubmit}
                >
                  {({ dirty, isValid, isSubmitting }) => (
                    <VStack as={Form} w="full" alignItems="start">
                      <Stack w="full" spacing={3} autoComplete="off">
                        <InputControl
                          name="email"
                          label="Email address"
                          inputProps={{
                            type: 'email',
                            placeholder: 'Enter your email',
                          }}
                        />
                        <InputControl
                          name="password"
                          label="Password"
                          colorScheme="pink"
                          inputProps={{
                            type: 'password',
                            placeholder: 'Enter your password',
                          }}
                        />
                      </Stack>
                      <SubmitButton
                        disabled={!(dirty && isValid) || isSubmitting}
                        variant="solid"
                        colorScheme="blue"
                        borderRadius={0}
                        px="14"
                      >
                        Log In
                      </SubmitButton>
                    </VStack>
                  )}
                </Formik>
              </Stack>
            </VStack>
          </Flex>
          <Flex flex={1} justify={'end'}>
            <Box overflow="hidden">
              <Image
                alt={'Login Image'}
                objectFit="cover"
                src={`${process.env.PUBLIC_URL}/images/login-bg.webp`}
              />
            </Box>
          </Flex>
        </HStack>
      </Stack>
    </Flex>
  )
}

export default Login
