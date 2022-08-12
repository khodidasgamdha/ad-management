import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Text,
    Tooltip,
    IconButton,
    Box,
} from "@chakra-ui/react";
import {
    FiChevronsLeft,
    FiChevronLeft,
    FiChevronsRight,
    FiChevronRight,
} from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { useTable, usePagination, useSortBy } from "react-table";

const Datatable = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 },
            autoResetHiddenColumns: false,
            autoResetSortBy: false
        },
        useSortBy,
        usePagination
    );

    return (
        <>
            <TableContainer>
                <Table {...getTableProps()} variant="simple" size="sm">
                    <Thead backgroundColor="blue.50" height="55px">
                        {headerGroups.map((headerGroup) => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                        onClick={() =>
                                            column.toggleSortBy(
                                                !column.isSortedDesc
                                            )
                                        }
                                    >
                                        <Box
                                            display="flex"
                                            justifyContent="space-between"
                                        >
                                            {column.render("Header")}
                                            <FaSort />
                                        </Box>
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody height="70px" {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map((cell, index) => {
                                        return (
                                            <Td
                                                style={
                                                    index === 0
                                                        ? {
                                                              whiteSpace:
                                                                  "nowrap",
                                                              maxWidth: 600,
                                                              overflow:
                                                                  "hidden",
                                                              textOverflow:
                                                                  "ellipsis",
                                                          }
                                                        : {}
                                                }
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render("Cell")}
                                            </Td>
                                        );
                                    })}
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
            {/* Pagination */}
            <Flex justifyContent="space-between" m={4} alignItems="center">
                <Flex>
                    <Tooltip label="First Page">
                        <IconButton
                            size="sm"
                            variant="ghost"
                            onClick={() => gotoPage(0)}
                            isDisabled={!canPreviousPage}
                            background={
                                !canPreviousPage
                                    ? "#F8F9FA !important"
                                    : "#79A9FF !important"
                            }
                            icon={
                                <FiChevronsLeft
                                    color={
                                        !canPreviousPage ? "#A7A9BD" : "#FFFFFF"
                                    }
                                    h={3}
                                    w={3}
                                />
                            }
                            mr={4}
                        />
                    </Tooltip>
                    <Tooltip label="Previous Page">
                        <IconButton
                            size="sm"
                            variant="ghost"
                            onClick={previousPage}
                            isDisabled={!canPreviousPage}
                            background={
                                !canPreviousPage
                                    ? "#F8F9FA !important"
                                    : "#79A9FF !important"
                            }
                            icon={
                                <FiChevronLeft
                                    color={
                                        !canPreviousPage ? "#A7A9BD" : "#FFFFFF"
                                    }
                                    h={6}
                                    w={6}
                                />
                            }
                        />
                    </Tooltip>
                </Flex>
                <Flex alignItems="center">
                    <Text flexShrink="0">
                        Page{" "}
                        <Text fontWeight="bold" as="span">
                            {pageIndex + 1}
                        </Text>{" "}
                        of{" "}
                        <Text fontWeight="bold" as="span">
                            {pageOptions.length}
                        </Text>
                    </Text>
                </Flex>
                <Flex>
                    <Tooltip label="Next Page">
                        <IconButton
                            size="sm"
                            variant="ghost"
                            onClick={nextPage}
                            isDisabled={!canNextPage}
                            background={
                                !canNextPage
                                    ? "#F8F9FA !important"
                                    : "#79A9FF !important"
                            }
                            icon={
                                <FiChevronRight
                                    color={!canNextPage ? "#A7A9BD" : "#FFFFFF"}
                                    h={6}
                                    w={6}
                                />
                            }
                        />
                    </Tooltip>
                    <Tooltip label="Last Page">
                        <IconButton
                            size="sm"
                            variant="ghost"
                            onClick={() => gotoPage(pageCount - 1)}
                            isDisabled={!canNextPage}
                            background={
                                !canNextPage ? "#F8F9FA" : "#79A9FF !important"
                            }
                            icon={
                                <FiChevronsRight
                                    color={!canNextPage ? "#A7A9BD" : "#FFFFFF"}
                                    h={3}
                                    w={3}
                                />
                            }
                            ml={4}
                        />
                    </Tooltip>
                </Flex>
            </Flex>
        </>
    );
};

export default Datatable;
