import {
  Heading,
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react'
import { FiHome } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const _404 = () => {
  const navigate = useNavigate()

  return (
    <Box h="100vh">
      <HStack h="full" justifyContent="center" alignItems="center">
        <VStack spacing={6}>
          <Image
            width={300}
            src={`${process.env.PUBLIC_URL}/images/page_not_found.svg`}
            alt="naruto"
            loading="lazy"
          />
          <Heading>Oops!</Heading>
          <VStack spacing={0}>
            <Text>We're sorry.</Text>
            <Text>The page you were looking for doesn't exist anymore</Text>
          </VStack>
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<FiHome />}
            onClick={() => navigate('/')}
          >
            Back to home
          </Button>
        </VStack>
      </HStack>
    </Box>
  )
}

export default _404
