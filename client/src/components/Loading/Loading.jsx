import { Box, Flex, Spinner, Text, VStack } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Box bg="gray.100" h="100vh" overflow="hidden">
      <Flex h="full" align="center" justify="center">
        <VStack spacing={4}>
          <Spinner color="blue.500" size="lg" />
          <Text>Loading...</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export default Loading
