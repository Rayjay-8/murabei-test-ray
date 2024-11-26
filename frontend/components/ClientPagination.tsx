'use client'
import {
   Pagination,
   PaginationContent,
   PaginationLink,
   PaginationItem,
   PaginationPrevious,
   PaginationNext,
   PaginationEllipsis,
} from '@/components/ui/pagination';
import BookPage from '@/components/BookPage';
import { PaginationWithLinks } from './ui/pagination-with-links';

interface ClientPaginationProps {
   currentPage: number;
   totalPages: number;
   onPageChange: (page: number) => void;
}

export const ClientPagination: React.FC<ClientPaginationProps> = ({ currentPage, totalPages, onPageChange, pageSize }) => {
   const maxPagesToShow = pageSize;
   const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
   const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

   const pages = [];
   for (let i = startPage; i <= endPage; i++) {
       pages.push(i);
   }

   return (

    // <PaginationWithLinks
    //     page={currentPage}
    //     pageSize={maxPagesToShow}
    //     totalCount={totalPages}
    // />
       <Pagination>
           <PaginationContent>
               <PaginationItem>
                   <PaginationPrevious href="#bottom" onClick={() => onPageChange(Math.max(currentPage - 1, 1))} />
               </PaginationItem>
               {startPage > 1 && (
                   <PaginationItem>
                       <PaginationEllipsis />
                   </PaginationItem>
               )}
               {pages.map((page) => (
                   <PaginationItem key={page}>
                       <PaginationLink href="#bottom" isActive={page === currentPage} onClick={() => onPageChange(page)}>
                           {page}
                       </PaginationLink>
                   </PaginationItem>
               ))}
               {endPage < totalPages && (
                   <PaginationItem>
                       <PaginationEllipsis />
                   </PaginationItem>
               )}
               <PaginationItem>
                   <PaginationNext href="#bottom" onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} />
               </PaginationItem>
           </PaginationContent>
       </Pagination>
   );
};