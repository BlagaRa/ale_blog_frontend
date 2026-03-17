import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function LogoIcons() {
  return (
    <div className='bg-accent flex flex-col md:flex-row justify-between items-center py-10 px-6 md:px-50 gap-8 md:gap-0'>
            <Image
              src="/logo4.png"
              alt="logo"
              width={290}
              height={60}
              className="object-contain w-auto h-25 md:mr-30 bg-bfirst rounded-full p-2 border-2 border-black" 
              priority
            />
            <div className='flex flex-row gap-8 justify-center items-center md:mr-14'>
              <p className='text-bfirst font-serif text-lg cursor-pointer hover:text-highli transition-all duration-300 ease-in-out'>
                Blog
              </p>
              <p className='text-bfirst font-serif text-lg cursor-pointer hover:text-highli transition-all duration-300 ease-in-out'>
                Contact
              </p>
              <p className='text-bfirst font-serif text-lg cursor-pointer hover:text-highli transition-all duration-300 ease-in-out'>

                About Me
              </p>
              <p className='text-bfirst font-serif text-lg cursor-pointer hover:text-highli transition-all duration-300 ease-in-out'>

                Books
              </p>

            </div>
            <div className='flex flex-row justify-center items-center gap-4'>
              <Instagram size={25}
              className='text-bfirst cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:text-highli'
              />
              <Facebook  size={25}
              className='text-bfirst cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:text-highli'
              
              />
              <Twitter size={25}
              className='text-bfirst cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:text-highli'
              
              />              
            </div>

          </div>
  )
}

export default LogoIcons