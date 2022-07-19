import {Drawer,DrawerContent } from '@chakra-ui/react'
import Sidebar from './Sidebar'

const SidebarDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer
      autoFocus={false}
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size="full"
      isFullHeight
    >
      <DrawerContent>
        <Sidebar onClose={onClose} />
      </DrawerContent>
    </Drawer>
  )
}

export default SidebarDrawer
