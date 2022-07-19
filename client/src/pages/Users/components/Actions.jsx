import { Button, HStack } from '@chakra-ui/react'
import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Actions = ({ to, row }) => {
  return (
    <HStack>
      <Button
        as={Link}
        size="sm"
        variant="outline"
        aria-label="View details"
        icon={<FiEye />}
        to={to || `/user/${row.id}`}
      >
        View/Edit
      </Button>
      <Button size="sm" variant="outline" colorScheme="red">
        Delete
      </Button>
    </HStack>
  )
}

export default Actions
