'use server'

import { fetchBooks } from '@/services/books'
import CardBook from './CardBook'
import { useState } from 'react';
import { Button } from './ui/button';


const PaginationBooks = async () => {
   // const [currentPage, setCurrentPage] = useState(1);

   const books = await fetchBooks(1)

  return (
   <div className=" layout-grid-cards">
      {books.data.map(book => {
         return <CardBook key={book.id} book={book}/>
      })}

      {/* <Button onClick={() => setCurrentPage(e => e + 1)}>
         next
      </Button> */}
    </div>
  )
}

export default PaginationBooks

