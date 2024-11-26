'use client'

import { BookstypeComplete } from '@/types/schemas'
import React from 'react'
import Image from 'next/image'
import DeleteBookButton from './DeleteBook'

interface CardBookProps {
   book: BookstypeComplete
 }

const BookPage:React.FC<CardBookProps> = ({book}) => {
  return (
    <div className='container mx-auto mt-6'>
         <Image src={book.isbn13 ? `https://covers.openlibrary.org/b/isbn/${book.isbn13}-M.jpg` : "/nf.png"} width={200} height={200} alt="Picture of the author" className='border rounded-md w-[200px] h-[300px]'></Image>
         <h2 className='text-lg overflow-ellipsis-3-linhas'>{book.title}</h2>
         <h2>overview</h2>
         <span className='text-gray-500 text-sm overflow-ellipsis-1-linhas'>{book.overview}</span>
         <span className='text-red-500 text-sm overflow-ellipsis-1-linhas'>{book.author}</span>
         <span className='text-red-500 text-sm overflow-ellipsis-1-linhas'>{book.dimensions}</span>
         <span className='text-red-500 text-sm overflow-ellipsis-1-linhas'>{book.price}</span>

         <DeleteBookButton id={book.id}>Delete Book</DeleteBookButton>
    </div>
  )
}

export default BookPage
