import { Text } from '@chakra-ui/react'
import React from 'react'

const RolesView = ({ roles }) => {
  return roles.map((role, index) => {
    return <Text key={index}>{role}</Text>
  })
}

export default RolesView
