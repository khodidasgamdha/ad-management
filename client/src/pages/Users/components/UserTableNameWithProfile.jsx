import { HStack, Avatar, Text } from '@chakra-ui/react'

const UserTableNameWithProfile = ({ data }) => {
  const user = data.row.original
  return (
    <HStack align="center">
      <Avatar
        size="sm"
        src={user.other_info?.profile_pic_url}
        name={user.name}
      />
      <Text>{user.name}</Text>
    </HStack>
  )
}

export default UserTableNameWithProfile
