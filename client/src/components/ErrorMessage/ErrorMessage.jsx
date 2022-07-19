import { Heading, Image, VStack } from '@chakra-ui/react'

const ErrorMessage = ({ error }) => {
  return (
    <VStack spacing={6}>
      <Image
        w={300}
        h={300}
        src={`${process.env.PUBLIC_URL}/images/error_message.svg`}
        alt={error}
      />
      <Heading size="lg">{error}</Heading>
    </VStack>
  )
}

export default ErrorMessage
