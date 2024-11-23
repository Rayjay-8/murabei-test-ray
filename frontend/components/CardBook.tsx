'use client'

import Image from 'next/image'
import React from 'react';


interface CardBookProps {
  title: string;
  author: string;
}

const CardBook:React.FC<CardBookProps> = ({title, author}) => {
  return (
    <div className=' w-[200px] h-[300px] '>
      <Image src="/asd.png" width={200} height={200} alt="Picture of the author" className='border rounded-md'></Image>
      <h2 className='text-lg'>{title}</h2>
      <span className='text-red-500 text-sm'>{author}</span>
    </div>
  )
}

export default CardBook