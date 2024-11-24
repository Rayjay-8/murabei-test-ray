'use client'

import { Bookstype } from '@/types/schemas';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';



interface CardBookProps {
  book: Bookstype
}

const CardBook:React.FC<CardBookProps> = ({book}) => {

  return (
    <div className=' w-[200px] h-[400px] '>
      <Link href={`/book/${book.id}`}>
        <Image src={book.isbn13 ? `https://covers.openlibrary.org/b/isbn/${book.isbn13}-M.jpg` : "/nf.png"} width={200} height={200} alt="Picture of the author" className='border rounded-md w-[200px] h-[300px]'></Image>
        <h2 className='text-lg overflow-ellipsis-3-linhas'>{book.title}</h2>
        <span className='text-red-500 text-sm overflow-ellipsis-1-linhas'>{book.author}</span>
      </Link>
    </div>
  )
}

export default CardBook