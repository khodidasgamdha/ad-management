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
  VStack,
} from '@chakra-ui/react'
import { useEffect, useMemo } from 'react'
import { FiRefreshCw, FiUsers } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Datatable from '../../components/Datatable'
import { useGetClientList } from '../../hooks/clients/useGetClientList'
import Actions from './components/Actions'

const Clients = () => {
  const { data, isLoading, isFetching, refetch } = useGetClientList()

  const navigate = useNavigate();

  useEffect(() => {
    refetch()
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Description',
        accessor: 'description',
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

  return (
    <VStack alignItems="stretch" spacing={6}>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading color="gray.600" fontWeight="500" size="lg">
          Clients
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
            // isLoading={isFetching || isLoading}
            // loadingText="Fetching..."
            // disabled={isFetching || isLoading}
            leftIcon={<FiUsers />}
            onClick={() => navigate("/client/new")}
          >
            Create client
          </Button>
        </HStack>
      </HStack>
      <Divider />
      <Datatable data={data ? data.clients : []} columns={columns} />
    </VStack>
  )
}

export default Clients
