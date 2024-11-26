import CardBook from './CardBook'
import { Bookstype } from '@/types/schemas';

const PaginationBooks = ({books}:{books:Bookstype[]}) => {
   try{
      
      return (
         <div className=" layout-grid-cards mb-6 mt-6">
            {books.map(book => {
               return <CardBook key={book.id} book={book}/>
            })}
         </div>
      )
   }catch(err){
      console.log(err)
      return (
         <div>Error!</div>
      )
   }
}

export default PaginationBooks

