'use server'

import CardBook from "@/components/CardBook";
import SearchBar from "@/components/SearchBar";
import { fetchBooksByType } from "@/services/books";
import { BookSearchType } from "@/types/schemas";

// import React from 'react'
// import { useSearchParams } from "next/navigation";

interface SearchPageProps {
   searchParams: {search: string, type: BookSearchType}
}
 

const Page = async ({searchParams}:SearchPageProps) => {

   console.log(searchParams)

   const searchparamsdefault = {
      search: searchParams.search ?? "",
      type: searchParams.type ?? "book"
   }

    const books = await fetchBooksByType(searchparamsdefault.search, searchparamsdefault.type)

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-lg bold mb-6">Search</h1>

      <SearchBar defaultsearch={searchparamsdefault.search} defaulttype={searchparamsdefault.type}/>

      <div className="mt-6  layout-grid-cards">
      {books.map(book => {
        return <CardBook key={book.id} book={book}/>
      })}

</div>

      {/* <span>{type}</span>
      <span>{search}</span> */}

     
      
    </div>)
}

export default Page
