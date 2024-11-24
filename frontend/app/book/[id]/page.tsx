'use server'

import BookPage from "@/components/BookPage"
import CardBook from "@/components/CardBook"
import { Button } from "@/components/ui/button"
import { fetchBook } from "@/services/books"



const Page = async ({params}: any ) => {
   console.log(params)
   const book = await fetchBook(params.id)
  return (
    <div>
      <BookPage book={book}/>
      
      
    </div>
  )
}

export default Page
