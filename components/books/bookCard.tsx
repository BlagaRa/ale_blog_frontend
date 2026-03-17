import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface BookProps {
  book: {
    title: string;
    image: string | null;
    gen: string;
    id: string;
  }
}

function BookCard({book}:BookProps) {
  return (
    <div className='flex flex-col items-center border-2'>
      <Image
        src={book.image || "/contact.jpg"}
        alt={book.title}
        width={450}
        height={450}
        className="object-full w-full h-full" 
        priority
      />
      <div className='w-full items-center flex flex-col gap-2 bg-white  mx-auto  px-5  py-4'>
        <p className='text-center font-lora uppercase text-sm  '>
            {book.gen.replace("_", " ")}
        </p>
        <h1 className='text-center text-xl font-serif'>
          {book.title}
        </h1>
        <Link
        href={`/books/bookId?bookId=${book.id}`}
        className='text-center font-lora underline cursor-pointer '>
          Read More
        </Link>
      </div>
      
    </div>
  )
}

export default BookCard