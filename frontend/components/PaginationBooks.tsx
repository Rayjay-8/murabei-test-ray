'use server'

import { fetchBooks } from '@/services/books'
import CardBook from './CardBook'

const PaginationBooks = async () => {
   try{
      const books = await fetchBooks(1)
      return (
         <div className=" layout-grid-cards">
            {books.data.map(book => {
               return <CardBook key={book.id} book={book}/>
            })}
         </div>
      )
   }catch(err){
      return (
         <div>Error!</div>
      )
   }
}

export default PaginationBooks

