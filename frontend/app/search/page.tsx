'use server'

import PaginationBooks from "@/components/PaginationBooks";
import SearchBar from "@/components/SearchBar";
import { fetchBooksByType } from "@/services/books";
import { BookSearchType } from "@/types/schemas";

interface SearchPageProps {
   searchParams: {search: string, type: BookSearchType}
}

const Page = async ({searchParams}:SearchPageProps) => {

   const searchparamsdefault = {
      search: searchParams.search ?? "",
      type: searchParams.type ?? "book"
   }

   if(!searchparamsdefault.search){
    return <div className="container mx-auto mt-6">
          <h1 className="text-lg bold mb-6">the search bar is empty</h1>
      <hr />
    </div>
   }

   const books = await fetchBooksByType(searchparamsdefault.search, searchparamsdefault.type)

   return (
    <div className="container mx-auto mt-6">
      <h1 className="text-lg bold mb-6">Search</h1>
      <SearchBar defaultsearch={searchparamsdefault.search} defaulttype={searchparamsdefault.type}/>

      
      {books?.length ? <>
         <h2 className="mt-6">{books?.length} results founds</h2>
         <PaginationBooks books={books}/>
        
         </> : <div className="mt-6">No results.<hr /></div>} 
    </div>)
}

export default Page