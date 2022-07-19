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
import { FiRefreshCw, FiServer } from 'react-icons/fi'
import { useMemo } from 'react'
import Datatable from '../../components/Datatable'
import { useGetConfigList } from '../../hooks/config-management/useGetConfigList'
import Actions from './components/Actions'
import CreateConfigModal from './components/CreateConfigModal'

const ConfigManagement = () => {
  const { data, isLoading, isFetching, refetch } = useGetConfigList()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Key',
        accessor: 'key',
      },
      {
        Header: 'Value',
        accessor: 'value',
        Cell: (data) => {
          return <Text>{JSON.stringify(data.row.original.value, null, 2)}</Text>
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

  return (
    <VStack alignItems="stretch" spacing={6}>
      <HStack alignItems="center" justifyContent="space-between">
        <Heading color="gray.600" fontWeight="500" size="lg">
          Config management
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
            leftIcon={<FiServer />}
            onClick={onOpen}
          >
            Create config
          </Button>
        </HStack>
      </HStack>
      <Divider />
      <Datatable data={data ? data.configs : []} columns={columns} />
      <CreateConfigModal isOpen={isOpen} onClose={onClose} />
    </VStack>
  )
}

export default ConfigManagement
