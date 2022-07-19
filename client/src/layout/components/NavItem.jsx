import { HStack, Icon, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ icon, title, path, ...rest }) => {
  const COLOR = useColorModeValue('gray.900', 'gray.50')
  const BG_COLOR = useColorModeValue('gray.50', 'gray.800')

  return (
    <Link
      as={NavLink}
      to={path}
      textDecoration="none"
      width="full"
      _focus={{ boxShadow: ' none' }}
      _hover={{
        textDecoration: 'none',
      }}
      {...rest}
    >
      {({ isActive }) => (
        <HStack
          spacing="4"
          borderRight={isActive ? '2px' : 'none'}
          bg={isActive ? BG_COLOR : 'transparent'}
          borderColor={isActive ? 'blue.500' : 'transparent'}
          color={isActive ? 'blue.500' : COLOR}
          _hover={{
            color: 'blue.500',
          }}
          pl="4"
          py={2}
        >
          {icon && <Icon fontSize="18px" as={icon} />}
          <Text margin={0} fontWeight="medium" fontSize="14px">
            {title}
          </Text>
        </HStack>
      )}
    </Link>
  )
}

export default NavItem
