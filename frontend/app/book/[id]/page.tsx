'use server'

import BookPage from "@/components/BookPage"
import CardBook from "@/components/CardBook"
import { Button } from "@/components/ui/button"
import { fetchBook } from "@/services/books"


const Page = async ({params}: any ) => {

  if (!params?.id) {
    return <div>Livro não encontrado.</div>
  }

  try {
    const book = await fetchBook(params.id)
    return (
      <div>
        <BookPage book={book} />
      </div>
    )
  } catch (error) {
    console.error("Erro ao buscar o livro:", error)
    return <div className=" container mx-auto w-full mt-12">
       <h1>😔 Oops!</h1>
        <p>
          Não conseguimos carregar as informações do livro no momento.
          <br />
          Por favor, tente novamente mais tarde.
        </p>

    </div>
  }
}

export default Page
