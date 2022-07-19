import {
  Button,
  Checkbox,
  Divider,
  Grid,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Fragment } from 'react'

const NotificationUpdate = () => {
  return (
    <Fragment>
      <VStack align="stretch">
        <Text fontSize="xl" fontWeight="600" color="gray.500">
          Notifications
        </Text>
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <Text color="gray.400">Notify me when:</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text color="gray.400">Email</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text color="gray.400">In-App</Text>
          </GridItem>
          <GridItem colSpan={6}></GridItem>
        </Grid>
        <Divider w="full" border="2px" />
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <Text color="gray.400">New comment I’m @mentioned in</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox
              aria-label="New comment I’m @mentioned in email"
              defaultChecked
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox
              aria-label="New comment I’m @mentioned in app"
              defaultChecked
            />
          </GridItem>
          <GridItem colSpan={6}></GridItem>
        </Grid>

        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <Text color="gray.400">New comment on subscribed board</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox
              aria-label="New comment on subscribed board email"
              defaultChecked
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox
              aria-label="New comment on subscribed board app"
              defaultChecked
            />
          </GridItem>
          <GridItem colSpan={6}></GridItem>
        </Grid>

        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <Text color="gray.400">Added to a new board</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox aria-label="Added to a new board email" defaultChecked />
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox aria-label="Added to a new board app" defaultChecked />
          </GridItem>
          <GridItem colSpan={6}></GridItem>
        </Grid>

        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <Text color="gray.400">File added to subscribed board</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox
              aria-label="File added to subscribed board email"
              defaultChecked
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox
              aria-label="File added to subscribed board app"
              defaultChecked
            />
          </GridItem>
          <GridItem colSpan={6}></GridItem>
        </Grid>

        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <Text color="gray.400">New user is added</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox aria-label="New user is added email" defaultChecked />
          </GridItem>
          <GridItem colSpan={1}>
            <Checkbox aria-label="New user is added app" defaultChecked />
          </GridItem>
          <GridItem colSpan={6}></GridItem>
        </Grid>
        <Divider w="full" border="2px" />
      </VStack>
      <Button mt={4} size="sm" px={14} rounded="full">
        Update
      </Button>
    </Fragment>
  )
}

export default NotificationUpdate
