import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import Link from 'next/link';

export const Breadcrumbs: React.FC = ({}) => {
  return (
    <Breadcrumb position={'absolute'}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href={process.env.BACKEND_URL + '/'}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
