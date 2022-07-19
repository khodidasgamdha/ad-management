import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Actions = ({ to, row }) => {
  return (
    <HStack>
      <Tooltip hasArrow placement="top" label="View" aria-label="view">
        <IconButton
          as={Link}
          size="sm"
          variant="ghost"
          aria-label="View details"
          icon={<FiEye />}
          to={to || `/config/${row.id}`}
        />
      </Tooltip>
    </HStack>
  )
}

export default Actions
