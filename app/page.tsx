'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import BookCard from '../components/books/bookCard'
import {  BookOpenText, ChevronDown } from "lucide-react";
import LogoIcons from "@/components/ui/LogoIcons";

export default function Home() {
  const images = [
    '/heroSection1.jpg',
    '/heroSection2.jpg', 
    '/heroSection3.jpg'
  ];

  const books = [
  {
    id: "7b1a2c3d-e4f5-4g6h-8i9j-0k1l2m3n4o5p",
    title: "Mândrie și Prejudecată",
    image: "/heroSection1.jpg",
    description: "O poveste clasică despre maniere, educație și căsătorie în societatea aristocrată britanică de la începutul secolului al XIX-lea.",
    gen: "ROMANCE",
    buyLink: "https://amazon.com/example1",
    writtenAt: new Date("1813-01-28"),
    author: "Jane Austen",
    createdAt: new Date(),
  },
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
    title: "Dracula",
    image: "/heroSection1.jpg",
    description: "Celebrul roman epistolar care a definit mitul vampirului modern, prezentând lupta dintre bine și rău prin jurnalul lui Jonathan Harker.",
    gen: "HORROR",
    buyLink: "https://amazon.com/example2",
    writtenAt: new Date("1897-05-26"),
    author: "Bram Stoker",
    createdAt: new Date(),
  },
  {
    id: "9f8e7d6c-5b4a-3f2e-1d0c-b9a8f7e6d5c4",
    title: "Sherlock Holmes: Studiu în Roșu",
    image: "/heroSection1.jpg",
    description: "Prima apariție a legendarului detectiv Sherlock Holmes și a doctorului Watson, investigând o crimă misterioasă într-o casă părăsită.",
    gen: "THRILLER", // sau FICTION/ACTION depinde de ce ai in Enum
    buyLink: "https://amazon.com/example3",
    writtenAt: new Date("1887-11-01"),
    author: "Arthur Conan Doyle",
    createdAt: new Date(),
  },
  {
    id: "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
    title: "Marele Gatsby",
    image: "/heroSection1.jpg",
    description: "O critică a visului american, plasată în perioada jazz-ului, urmărind obsesia misteriosului Jay Gatsby pentru frumoasa Daisy Buchanan.",
    gen: "HISTORICAL",
    buyLink: "https://amazon.com/example4",
    writtenAt: new Date("1925-04-10"),
    author: "F. Scott Fitzgerald",
    createdAt: new Date(),
  },
  {
    id: "f4g5h6i7-j8k9-l0m1-n2o3-p4q5r6s7t8u9",
    title: "Cele 7 deprinderi ale persoanelor eficace",
    image: "/heroSection1.jpg",
    description: "O carte fundamentală pentru dezvoltarea personală, oferind o abordare bazată pe principii pentru rezolvarea problemelor personale și profesionale.",
    gen: "PERSONAL_DEVELOPMENT",
    buyLink: "https://amazon.com/example5",
    writtenAt: new Date("1989-08-15"),
    author: "Stephen R. Covey",
    createdAt: new Date(),
  }
];

  // AICI AM ADAUGAT CELE 4 INTREBARI NOI
  const faqData = [
    { 
      q: "Are you giving books for free?", 
      a: "No, sometimes not, but sometimes yes! You have to check the newsletter for giveaways." 
    },
    { 
      q: "How can I collaborate with you?", 
      a: "You can send me an email through the contact form above and I'll get back to you." 
    },
    { 
      q: "Do you review all genres?", 
      a: "I mostly focus on Romance and Fantasy, but I'm open to anything that catches my eye!" 
    },
    { 
      q: "What is your rating system?", 
      a: "I use a standard 5-star rating system. 5 stars mean I absolutely loved it and couldn't put it down, while 1 star means it wasn't for me." 
    },
    { 
      q: "Do you accept ARCs (Advance Reader Copies)?", 
      a: "Yes, I am currently open to accepting physical and digital ARCs, especially for Fantasy and Romance titles." 
    },
    { 
      q: "Where else can I find you?", 
      a: "I am very active on Instagram and TikTok posting daily bookish content! Check the links in the footer." 
    },
    { 
      q: "What is your all-time favorite book?", 
      a: "That is the hardest question ever! But if I had to choose, I would probably say 'Pride and Prejudice' or 'Fourth Wing'." 
    }
  ];

  const lastThreeBooks = [...books]
  .sort((a, b) => b.writtenAt.getTime() - a.writtenAt.getTime())
  .slice(0, 3);

  const [activeFaq, setActiveFaq] = useState<number|null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);


  return (
    <div className='mt-20 flex flex-col '>

        {/* The hero part */}
      <div className='flex flex-col md:flex-row justify-center items-center w-full px-4 bg-bsecond pb-30'>
        <div className='flex-1 text-center sm:mt-10'>
          <h1 className='text-5xl text-accent font-lora'>Welcome!</h1>
          <h2 className='mt-4 text-4xl font-serif font-bold  min-h-15'>
            <Typewriter
              words={['the story never ends here', 'your journey begins now', 'discover new worlds']}
              loop={0} 
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <p className="font-serif  text-xl my-6 max-w-lg mx-auto">
            Whether you’re searching for an enemies-to-lovers story, vampire and witch sagas, spicy romances, tales of young love or revenge...
          </p>
          <button className='btn-primary'>
            Go to my blog
          </button>
        </div>

        <div className="flex-1 w-full py-10 flex justify-center items-center">
          <div className="relative w-112.5 h-137.5 border-8 border-accent rounded-md overflow-hidden">
            {images.map((src, index) => (
              <Image
                key={src}
                fill
                alt="hero"
                src={src}
                className={`
                  object-cover transition-opacity duration-1000 ease-in-out
                  ${index === currentImage ? 'opacity-100' : 'opacity-0'}
                `}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>

        {/* The second part */}
      <div className='flex flex-col items-center bg-bfirst py-20 gap-12 pb-40'>
        <h1 className='flex-1 text-xl font-serif mb-10'>LET’S GET TO KNOW EACH OTHER A BIT BETTER</h1>
        <p className='font-lora text-3xl text-accent'>I am so happy you are here</p>
        
        {/* AICI AM SCHIMBAT NUMELE IN ALESSIA BOOK BLOG */}
        <p className='max-w-xl font-lora text-center md:max-w-4xl'>
           Everyone is welcome at <strong>Alessia Book Blog</strong>. Since 2012,
           I’ve made sure that this space is an inclusive place for 
           all book lovers, authors and creatives to feel like they 
           belong. This will always be a safe place for you. Don’t 
           be shy to send a message if you need help. Your local book
           lover with over a decade of literature expertise and knowledge
           is here to help with requests, guide readers of all ages, and 
           figure out what book is next on your TBR.
        </p>

          <div className='flex gap-10'>
            <button className='font-sans bg-accent text-xl font-bold border-2 border-first text-white px-6 py-2 hover:bg-white hover:text-accent hover:border-accent cursor-pointer transition-all duration-300 ease-in-out'>
              My Story
            </button>
            <button className='font-sans bg-accent text-xl font-bold border-2 border-first text-white px-6 py-2 hover:bg-white hover:text-accent hover:border-accent cursor-pointer transition-all duration-300 ease-in-out'>
              Services
            </button>
          </div>
      </div>

        {/* The third part */}
      <div className='bg-bsecond flex-col py-20 items-center gap-12 px-12 w-full'>
            <p className='text-4xl md:text-6xl font-serif text-accent text-center mb-10'>
              Last read!
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mx-auto'>
              {lastThreeBooks.map((x)=>{
                return <BookCard book={x} key={x.id}/>
              })}
            </div>
            <div className='flex flex-col items-center mt-20 gap-5'>
              <button className='btn-primary '>
                More Books
              </button>
              <BookOpenText
              size={40}
              className=' my-10 mb-20 cursor-pointer text-accent hover:text-highli active:opacity-80 '
              />
              <p className='font-serif text-center text-xl max-w-xl md:max-w-2xl'>
                “Reading is escape, and the opposite of escape; it’s a way to make contact with reality after a day of making things up, and it’s a way of making contact with someone else’s imagination after a day that’s all too real.”</p>
              <p className='font-sans text-sm text-accent'
              >—  Nora Ephron  —</p>
            </div>
          </div>
          <LogoIcons/>
          
            <div className='bg-bfirst flex flex-col gap-4 items-center flex-1 py-20'>
              <h1 className='font-serif text-2xl font-bold mb-5'>
                Contact me!
              </h1>
              <p className='font-serif text-xl'>
                Have any questions or want to colaborate?
              </p>
              <button className='btn-primary'>
                GET IN TOUCH
              </button>
          </div>

          <div className='bg-bsecond flex flex-row py-20 px-10  gap-15 '>
            <div className='flex-1'>
              <p className='font-serif font-bold text-5xl md:text-6xl leading-tight text-accent mx-auto'>
                Frequently asked <br/> questions
              </p>
            </div>
              <div className='flex-2 flex flex-col gap-2 px-0 md:px-20'>
                {faqData.map((item, index) => (
                  <div key={index} className='flex flex-col  '>
                    <button 
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className='cursor-pointer bg-white px-6 py-4 w-full text-start text-xl font-lora flex justify-between items-center transition-colors hover:bg-gray-50'
                    >
                      {item.q}
                      <span className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                        <ChevronDown  size={20} className="text-first"/>
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-white ${activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className='py-6  pr-6 border-t text-lg font-lora text-first bg-white pl-20'>
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          
    </div>
  );
}