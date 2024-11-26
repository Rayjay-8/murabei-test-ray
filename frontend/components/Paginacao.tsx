'use client'
import React, { useEffect, useMemo, useState } from 'react';

import { fetchBooks } from '@/services/books';

import CardBook from '@/components/CardBook';

import { ClientPagination } from './ClientPagination';



const Paginacao = () => {

    const [books, setBooks] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const pageSize = 12

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const { data, total } = await fetchBooks(currentPage, pageSize);
                setBooks(data);
                setTotalPages(Math.max(Math.ceil(total / 9), 1));
            } catch (error) {
                console.error('Failed to load books:', error);
            }
        };

        loadBooks();
        
    }, [currentPage]);

    
    
  return (
    <div className='mt-6 mb-6'>
        <div className='layout-grid-cards mb-12 '>
          {books.map(book => {return <CardBook key={book.id} book={book}/>})}
        </div>
        {/* <PaginacaoFIlho totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}
        {totalPages > 1 && (<ClientPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} pageSize={pageSize}/>)}
        <a id="bottom"></a>
    </div>
  )
}

export default Paginacao
