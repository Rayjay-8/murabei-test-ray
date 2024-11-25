'use client'
import React, { useEffect, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
} from '@/components/ui/pagination';
import { fetchBooks } from '@/services/books';
import BookPage from '@/components/BookPage';
import CardBook from '@/components/CardBook';

interface CustomPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const maxPagesToShow = 15;
    const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={() => onPageChange(Math.max(currentPage - 1, 1))} />
                </PaginationItem>
                {startPage > 1 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}
                {pages.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink href="#" isActive={page === currentPage} onClick={() => onPageChange(page)}>
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
                    <PaginationNext href="#" onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};


const Paginacao = () => {
  const [books, setBooks] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const { data, total } = await fetchBooks(currentPage);
                setBooks(data);
                setTotalPages(Math.max(Math.ceil(total / 9), 1));
            } catch (error) {
                console.error('Failed to load books:', error);
            }
        };

        loadBooks();
    }, [currentPage]);

  return (
    <div>
        <div className='layout-grid-cards'>
          {books.map(book => {return <CardBook key={book.id} book={book}/>})}
        </div>
        {totalPages > 1 && (<CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />)}
    </div>
  )
}

export default Paginacao
