import CardBook from './CardBook'

const PaginationBooks = ({books}) => {
   try{
      
      return (
         <div className=" layout-grid-cards mb-6 mt-6">
            {books.map(book => {
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

