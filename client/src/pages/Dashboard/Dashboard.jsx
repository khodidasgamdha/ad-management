import {
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { profile } from '../../atoms/authAtom'
import { useGetDashboardComments } from '../../hooks/dashboard/useGetDashboardComments'
import { Comments } from './components/Comments'

const Dashboard = () => {
  const { name, access_info: { clients } } = useRecoilValue(profile)

  useEffect(() => {
    if(clients?.[0]?.id) {
        mutate();
    }
}, [clients?.[0]?.id]);

  const { mutate, data} = useGetDashboardComments();

  return (
    <Grid h="200px" templateColumns="repeat(12, 1fr)" gap={4}>
      <GridItem colSpan={8}>
        <VStack align="stretch">
          <Heading color="gray.600" fontWeight="500" size="lg">
            Welcome back, {name}.
          </Heading>
        </VStack>
      </GridItem>
      <GridItem colSpan={12} mt={5}>
        <Comments data={data?.comments} />
      </GridItem>
      {/* <GridItem
        mt={5}
        colSpan={4}
        p={4}
        border="1px"
        borderColor="blue.500"
        rounded="lg"
        height={300}
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
      </GridItem> */}
    </Grid>
  )
}

export default Dashboard
