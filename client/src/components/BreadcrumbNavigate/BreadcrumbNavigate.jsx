import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const BreadcrumbNavigate = ({ to, inactive, active }) => {
  return (
    <Breadcrumb spacing="8px" separator={<FiChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to={to}>
          {inactive}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem color="blue.500" isCurrentPage>
        <BreadcrumbLink href="#">{active}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default BreadcrumbNavigate
