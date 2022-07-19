import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react'
import { For } from 'react-haiku'
import DetailsTab from './DetailsTab'
import NotificationUpdate from './NotificationUpdate'
import PasswordUpdate from './PasswordUpdate'

const Settings = () => {
  return (
    <VStack alignItems="stretch" spacing={6}>
      <Heading color="gray.600" fontWeight="500" size="lg">
        Settings
      </Heading>
      <Tabs w="full" size="sm" colorScheme="blue">
        <TabList>
          <For
            each={['Personal Details', 'Password', 'Notifications']}
            render={(tab, index) => (
              <Tab key={index} whiteSpace="nowrap">
                {tab}
              </Tab>
            )}
          />
        </TabList>

        <TabPanels>
          <TabPanel>
            <DetailsTab />
          </TabPanel>
          <TabPanel>
            <PasswordUpdate />
          </TabPanel>
          <TabPanel>
            <NotificationUpdate />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}

export default Settings
