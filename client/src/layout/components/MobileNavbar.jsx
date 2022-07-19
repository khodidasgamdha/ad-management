import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiChevronDown, FiLogOut, FiMenu, FiUser, FiBell } from 'react-icons/fi'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { profile } from '../../atoms/authAtom'
// import ToggleThemeMode from '../../components/ToggleThemeMode/ToggleThemeMode'
import { useLogout } from '../../hooks/useLogout'

const MobileNavbar = ({ onOpen, borderColor, backgroundColor, ...rest }) => {
  const profileState = useRecoilValue(profile)
  const navigate = useNavigate()
  const { mutate, isLoading } = useLogout()

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={backgroundColor}
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <HStack spacing={4}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="large"
          fontWeight="semibold"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/Logo.png`}
            height="33px"
          />
        </Text>
      </HStack>

      <HStack spacing={2}>
        <IconButton
          variant="ghost"
          aria-label="Notifications"
          icon={<FiBell />}
        />
        {/* <ToggleThemeMode /> */}
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack spacing={3}>
                <Avatar
                  src={
                    profileState.other_info?.profile_pic_url &&
                    `${process.env.REACT_APP_API_URL}/uploads/${profileState.other_info?.profile_pic_url}`
                  }
                  name={profileState.name}
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                >
                  <Text fontWeight="semibold" fontSize="sm">
                    {profileState.name}
                  </Text>
                  <Text fontSize="xs" color="gray">
                    War Room Inc.
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={backgroundColor} borderColor={borderColor}>
              <MenuItem
                icon={<FiUser />}
                onClick={() => {
                  navigate('/settings')
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                closeOnSelect={false}
                color="red.600"
                _hover={{ color: 'red.500' }}
                onClick={mutate}
                disabled={isLoading}
                icon={isLoading ? <Spinner size="sm" /> : <FiLogOut />}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default MobileNavbar
