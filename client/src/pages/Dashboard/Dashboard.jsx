import {
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { profile } from '../../atoms/authAtom'

const Dashboard = () => {
  const { name } = useRecoilValue(profile)

  return (
    <Grid h="200px" templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={8}>
        <VStack align="stretch">
          <Heading color="gray.600" fontWeight="500" size="lg">
            Welcome back, {name}.
          </Heading>
        </VStack>
      </GridItem>
      <GridItem
        colSpan={4}
        p={4}
        border="1px"
        borderColor="blue.500"
        rounded="lg"
      >
        <VStack align="stretch">
          <Text color="gray.700">What’s new?</Text>
          <UnorderedList fontSize="sm" color="gray.500" listStyleType="none">
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default Dashboard
