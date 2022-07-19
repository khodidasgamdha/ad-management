import {
  Badge,
  Button,
  Divider,
  Heading,
  HStack,
  IconButton,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { FiRefreshCw, FiUser } from 'react-icons/fi'
import Datatable from '../../components/Datatable'
import { useGetUserList } from '../../hooks/users/useGetUserList'
import { TEXT_COLOR } from '../../layout/constant/MenuList'
import Actions from './components/Actions'
import CreateUserModal from './components/CreateUserModal'
import RolesView from './components/RolesView'
import UserTableNameWithProfile from './components/UserTableNameWithProfile'

const Users = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: (data) => <UserTableNameWithProfile data={data} />,
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Rotes',
        accessor: 'roles',
        Cell: (data) => {
          return <RolesView roles={data.row.original.access_info.roles} />
        },
      },
      {
        Header: 'State',
        accessor: 'state',
        Cell: (data) => {
          return (
            <Badge
              variant="subtle"
              colorScheme={
                data.row.original.state === 'ACTIVE'
                  ? 'green'
                  : data.row.original.state === 'INACTIVE'
                  ? 'red'
                  : data.row.original.state === 'ON_HOLD'
                  ? 'yellow'
                  : 'blue'
              }
            >
              {data.row.original.state}
            </Badge>
          )
        },
      },
      {
        Header: () => <Text>Actions</Text>,
        accessor: 'actions',
        Cell: (data) => {
          return <Actions row={data.row.original} />
        },
      },
    ],
    []
  )

  const { data, isLoading, refetch, isFetching } = useGetUserList()

  return (
    <VStack alignItems="stretch" spacing={6}>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading color={TEXT_COLOR} fontWeight="500" size="lg">
          Users
        </Heading>
        <HStack>
          <Tooltip
            hasArrow
            placement="left"
            label="Refresh"
            aria-label="Refresh"
          >
            <IconButton
              size="sm"
              variant="ghost"
              disabled={isFetching || isLoading}
              onClick={refetch}
              icon={isFetching ? <Spinner size="sm" /> : <FiRefreshCw />}
            />
          </Tooltip>
          <Button
            size="sm"
            isLoading={isFetching || isLoading}
            loadingText="Fetching..."
            disabled={isFetching || isLoading}
            leftIcon={<FiUser />}
            colorScheme="blue"
            onClick={onOpen}
          >
            Create user
          </Button>
        </HStack>
      </HStack>
      <Divider />
      <Datatable data={data ? data.users : []} columns={columns} />
      <CreateUserModal isOpen={isOpen} onClose={onClose} />
    </VStack>
  )
}

export default Users
