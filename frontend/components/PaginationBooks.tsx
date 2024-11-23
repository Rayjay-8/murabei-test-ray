

import { fetchBooks } from '@/services/books'
import CardBook from './CardBook'


const PaginationBooks = async () => {

   const data = await fetchBooks()

  return (
   <div className="flex gap-2">
      {data.data.map(e => {
         return <CardBook title={e.title} author={e.author}/>
      })}
    </div>
  )
}

export default PaginationBooks

