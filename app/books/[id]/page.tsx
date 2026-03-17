'use client'
import { useBookStore } from '@/store/booksStore';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'



function BookPage() {
  const {books}=useBookStore();
  const searchParams=useSearchParams();
  const router = useRouter();
  const currentBookId = searchParams.get('bookId')||null;
  const currentBook=books.find(book=>book.id===currentBookId);
  useEffect(() => {
    if (!currentBook) {
      router.push('/blog'); 
    }
  }, [currentBook, router]);

  if (!currentBook) {
    return null; 
  }
  return (
    <div className='mt-20 flex flex-col md:flex-row gap-10 justify-center align-center bg-bsecond'>
      <div className='flex-1 bg-accent w-full border-r-2 border-t-2 flex flex-col items-center p-4'>
        <div className='flex flex-row justify-between w-full'>
          <p className='font-lora opacity-60 text-sm'>Posted on: {currentBook.createdAt.toLocaleString()}</p>
          <p className=' self-end text-right bg-highli font-bold rounded-lg px-2 border-2 font-sans '>{currentBook.gen}</p>
        </div>
        
        <h1 className='font-serif text-4xl mb-2 font-bold'>{currentBook.title}</h1>
        <Image
          src={currentBook.image || "/contact.jpg"}
          alt="logo"
          width={290}
          height={100}
          className="object-contain border-4 border-highli mb-3" 
          priority
        />
        <div className='flex flex-row gap-1'>
          {[...Array(5)].map((_,index)=>{
            const isFilled=currentBook && currentBook.review &&index<currentBook.review.stars;
            return (
              <BookOpen 
                key={index} 
                size={24} 
                className={`${
                  isFilled 
                    ? ' text-highli' 
                    : 'text-gray-300 opacity-50' 
                } transition-colors duration-300`}
              />
            )
          })}
        </div>
        
        <p className='text-sm text-center p-4 italic font-lora'>
          &quot;{currentBook.description}&quot;
        </p>
        <p className='font-lora text-md text-right pr-4 w-full font-bold'>
          {currentBook.author}
        </p>

        <p className='self-start font-lora text-sm opacity-80'>Published in: {currentBook.writtenAt.toLocaleString()}</p>
      </div>
      <div className='flex-2 w-full p-10 flex flex-col items-center'>
        <h1 className='font-bold text-3xl lg:text-5xl font-lora '>
          {currentBook.title}
        </h1>
        <p className='self-end text-xl italic font-lora mb-10'>
          By {currentBook.author}
        </p>
          {currentBook.review 
          ?
          <div>
            <p className='font-lora text-md'>
              {currentBook.review.description}
            </p>
          </div>
          
          :<p className='font-lora text-md'>
              I am sorry but this book does not have a review yet!
          </p> }
      </div>
    </div>
  )
}

export default BookPage;