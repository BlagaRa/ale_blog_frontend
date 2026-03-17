import LogoIcons from '@/components/ui/LogoIcons'
import Image from 'next/image'
import React from 'react'

function MyStory() {
  return (
    <div className='mt-20 flex flex-col'>
      <div className='bg-bsecond flex flex-row p-12 md:p-20 md:px-24 lg:px-40 gap-10 lg:gap-20'>
        <div className='flex-2'>
          <Image
            src="/my-blog2.jpeg"
            alt="my-story"
            width={400}
            height={400}
            className="object-cover w-auto md:h-auto h-90 mt-20 md:mt-0 bg-bfirst border-4 lg:border-12 md:border-7 rounded-md border-accent" 
            priority
          />
        </div>
        <div className='flex-3 flex flex-col gap-5 lg:px-20'>
          <div className='flex flex-col'>
            <h1 className='font-serif font-bold text-3xl md:3xl lg:text-4xl'>
              Meet Alessi!
            </h1>
            <h2 className='font-lora text-md lg:text-lg'>
              WRITTER AND BLOGGER!

            </h2>
          </div>
          <h1 className='font-lora text-lg font-bold md:text-xl lg:text-2xl'>
            My name is Alessia and this is my blog. I&apos;m so glad you&apos;re here.
          </h1>
          <div className='flex flex-col gap-8 md:gap-10'>
            <p className='font-lora text-xs md:text-sm lg:text-md'>
              I am twenty-nine years old (not a proper adult, yet, right?), but I&apos;ve been blogging here since I was sixteen. Books have always been my greatest passion and ever since the mobile library would stop by my primary school every fortnight, I&apos;ve been enamoured by story worlds and fictional characters. Reading truly is like my own personal heaven.
            </p>
            <p className='font-lora text-xs md:text-sm lg:text-md'>

              I&apos;ve lived in the same small, historic town in South Wales all my life (yes, I&apos;ve been told I have the accent) which, for international readers who are unsure where Wales even is, lays just beside England on the map in the United Kingdom, directly across the sea/opposite from Ireland. It rains here more than it&apos;s sunny, but I don&apos;t mind the rain because it&apos;s perfect reading weather. I am pretty introverted and socially anxious, so you won&apos;t find me doing much that doesn&apos;t involve being close to home.
            </p>
            <p className='font-lora text-xs md:text-sm lg:text-md'>

              My hobbies include creative writing, playlist-making, baking, coding, and spending time with my family. I love shades of green (even my car is green) and will always be a cat lady at heart. I&apos;ve had a chronic illness called ME since I was fourteen, and live with it to this day. My greatest dream is to become the author of a Young Adult novel, which I am working toward.
            </p>
          </div>
          

        </div>
      </div>

      <LogoIcons/>

      <div className='bg-bfirst flex flex-row p-12 md:p-20 md:px-24 lg:px-40 gap-10 lg:gap-20 '>
       
       <div className=' flex-3 flex  flex-col align-center justify-center'>
        <p className='font-serif font-bold text-4xl text-center mb-10'>
          a little more about the blog history
        </p>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-10'>
          <p className='font-serif text-sm  lg:text-lg'>
            I founded Pretty Little Memoirs in 2012 after developing a chronic illness, finding solace in reading and sharing my thoughts online in the book community. Pretty Little Memoirs was born of my love for my two favourite books (at the time) Pretty Little Liars by Sara Shepard and Memoirs of a Geisha by Arthur Golden. I decided to make my first blog post about the sixth book in the Morganville Vampire series—Carpe Corpus—by Rachel Caine, an author that not only supported me throughout the years, but was a huge inspiration for my own writing. 
          </p>
          <p className='font-serif text-sm  lg:text-lg'>

            As well as sharing my love of books, I bake a lot, and buy too much autumn décor and makeup, whilst simultaneously being your average twenty-something. When I&apos;m not reading, you&apos;ll find me petting every cat in the neighbourhood, piling too many books in my shopping basket, and watching just one more episode of The Vampire Diaries or Gilmore Girls before bed.
          </p>
          <p className='font-serif text-sm lg:text-lg'>

            Now with an ever-growing audience, Pretty Little Memoirs has grown from a small blog to an award-winning website that&apos;s been featured in print and publications worldwide, notably inside the covers of The 100 series by Kass Morgan, Twin Crowns series by Katherine Webber and Catherine Doyle, and Roomies by Sara Zarr and Tara Altebrando.
          </p>
          <p className='font-serif text-sm lg:text-lg'>

            Throughout my blogging career, I&apos;ve been honoured to be featured as Top 5 Young Bloggers by Reading Hack, and grateful to have won and be nominated for several awards for the design, creation and content on my blog as voted by professionals and fellow bloggers. In Feb 2025, I started Prosed, a Romance Book Club, an online group for socially anxious or distance-based readers seeking a virtual book club. It&apos;s since been recognised by the National Centre For Writing.
          </p>

        </div>
       </div>

       <div className='flex-2 flex align-center justify-center flex-col'>
          <Image
            src="/heroSection2.jpg"
            alt="my-story"
            width={400}
            height={400}
            className="object-cover w-auto md:h-auto h-70 mt-20 md:mt-0 bg-bfirst border-4 lg:border-12 md:border-7 rounded-md border-accent" 
            priority
          />
        </div>
        
      </div>
    </div>
  )
}

export default MyStory