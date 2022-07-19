import { Box, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import MobileNavbar from './components/MobileNavbar'
import Sidebar from './components/Sidebar'
import SidebarDrawer from './components/SidebarDrawer'

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  var BORDER_COLOR = useColorModeValue('gray.100', 'gray.800')
  var BG_COLOR = useColorModeValue('white', 'gray.900')
  var COLOR = useColorModeValue('gray.900', 'gray.50')

  return (
    <Box minH="100vh" color={COLOR} bg={BG_COLOR}>
      <Sidebar
        borderColor={BORDER_COLOR}
        backgroundColor={BG_COLOR}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <SidebarDrawer isOpen={isOpen} onClose={onClose} />
      <MobileNavbar
        onOpen={onOpen}
        borderColor={BORDER_COLOR}
        backgroundColor={BG_COLOR}
      />
      <Box ml={{ base: 0, md: 60 }} px="6" py="4">
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
