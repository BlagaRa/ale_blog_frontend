'use client'
import BookCard from '@/components/books/bookCard';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useBookStore } from '@/store/booksStore';
import { useEffect } from 'react'; // AI UITAT SĂ IMPORȚI useEffect

const BOOK_TYPES = [
  "ALL_BOOKS",
  "ROMANCE",
  "ACTION",
  "FICTION",
  "THRILLER",
  "PERSONAL_DEVELOPMENT",
  "FOR_KIDS",
  "HISTORICAL",
  "HORROR"
];

function Blog() {
  const searchParams = useSearchParams();

  // 1. Trebuie să extragi getBooks și isLoading din store!
  const { books, getBooks, isLoading } = useBookStore();
  
  // 2. Trebuie să apelezi getBooks când se încarcă pagina
  useEffect(() => {
    if (books.length === 0) {
      getBooks();
    }
  }, [books.length, getBooks]);

  const rawType = searchParams.get('type') || "ALL_BOOKS";
  let currentType = rawType.toUpperCase();

  if (currentType === "ROMANTIC") currentType = "ROMANCE";

  const filteredBooks = books.filter((book) => 
    currentType === "ALL_BOOKS" || book.gen === currentType
  );

  return (
    <div className='mt-20'>
      <h1 className='font-serif bg-bfirst text-4xl text-center py-5 border-t-2 border-b-2'>{currentType.replace('_'," ")}</h1>
      
      <div className='bg-bsecond flex flex-row'>
        <div className='flex flex-1 flex-col font-lora text-md bg-accent p-8 gap-1 border-r-2 border-black'>
          {BOOK_TYPES.map((tipe) => (
            <Link
              key={tipe}
              href={tipe === "ALL_BOOKS" ? "/blog" : `/blog?type=${tipe.toLowerCase()}`}
              className={`text-start cursor-pointer hover:text-highli transition-all duration-200 relative
                ${tipe === currentType
                  ? "underline text-highli pl-6 before:content-['-'] before:absolute before:left-0"
                  : "pl-0"}
              `}
            >
              {tipe.replace("_", " ")}
            </Link>
          ))}
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 flex-3 gap-4 p-4 lg:gap-10 lg:p-10'>
          {isLoading ? (
             <div className='col-span-full py-20 text-center font-lora text-xl'>
               Se încarcă biblioteca...
             </div>
          ) : filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              // Am corectat aici! Nu mai scrie <BookCard book={{ id: book.id ... }} />
              <BookCard key={book.id} book={{
                id:book.id,
                image:book.image || '/contact.jpg',
                gen:book.gen,
                title:book.title
              }} />
            ))
          ) : (
            <div className='col-span-full py-20 text-center'>
              <p className='font-lora text-xl italic opacity-70'>
                Want to be the first author featured in this genre? Send us your book and get a dedicated review on my blog.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;


/*

<BookCard key={book.id} book={{
                id:book.id,
                image:book.image || '/contact.jpg',
                gen:book.gen,
                title:book.title
              }} />
*/