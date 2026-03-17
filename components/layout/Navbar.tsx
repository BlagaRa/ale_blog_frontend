"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  const [active, setActive] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileBooksOpen, setIsMobileBooksOpen] = useState(false);
  
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const currentTranslateY = useRef(0);

  useEffect(() => {
    const navHeight = 80;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY.current;
      
      if (isMobileMenuOpen) {
          lastScrollY.current = scrollY;
          return; 
      }

      if (scrollY <= 0) {
        currentTranslateY.current = 0;
      } else {
        currentTranslateY.current = currentTranslateY.current - delta;
      }

      if (currentTranslateY.current > 0) {
        currentTranslateY.current = 0;
      }
      if (currentTranslateY.current < -navHeight) {
        currentTranslateY.current = -navHeight;
      }

      if (navRef.current) {
        navRef.current.style.transform = `translateY(${currentTranslateY.current}px)`;

        if (scrollY > 10) {
            navRef.current.classList.add("border-b", "border-first");
        } else {
            navRef.current.classList.remove("border-b", "border-first");
        }
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]); 

  const linkBase =
    "relative text-first font-lora text-md md:text-base cursor-pointer hover:opacity-70 transition-opacity " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-full " +
    "after:bg-first after:origin-left after:transition-transform after:duration-300";

  const bookCategories = ["Romantic", "Fantasy", "Horror", "Historical"];

  const handleLinkClick = (linkName: string) => {
    setActive(linkName);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav
      ref={navRef}
      className="bg-bfirst w-full font-lora fixed top-0 left-0 z-50 will-change-transform"
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="hidden md:flex gap-6">
           <Link 
           href='/'
           onClick={() => handleLinkClick("home")} className={`${linkBase} ${active === "home" ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>Home</Link>
           <Link 
           href='/my-story'
           onClick={() => handleLinkClick("my-story")} className={`${linkBase} ${active === "my-story" ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>My Story</Link>
           <Link
           href='/blog'
           onClick={() => handleLinkClick("blog")} className={`${linkBase} ${active === "blog" ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>Blog</Link>
           <Link
           href='/contact'
           onClick={() => handleLinkClick("contact")} className={`${linkBase} ${active === "contact" ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>Contact</Link>
        </div>

        
        <div className="shrink-0 cursor-pointer" onClick={() => setActive("")}>
          <Link
          href='/'>
            <Image
            src="/logo4.png"
            alt="logo"
            width={290}
            height={60}
            className="object-contain w-auto h-20 md:mr-25" 
            priority
            />
          </Link>
          
        </div>

        <div 
          className="hidden md:flex relative h-full items-center cursor-pointer" 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <p className={`${linkBase} flex items-center gap-1 ${active === "books" ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>
            Books
            <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </p>

          {isDropdownOpen && (
            <div className="absolute right-0 top-16  w-56 bg-accent z-50 shadow-sm">
                <div className="flex flex-col">
                    {bookCategories.map((category) => (
                        <Link
                        key={category}
                        href={`/blog/?type=${category.toLocaleLowerCase()}`}
                        onClick={() => handleLinkClick("books")}
                        className="block px-6 py-3 text-sm text-white font-lora text-left hover:bg-bsecond hover:text-first transition-colors duration-200"
                        >
                        {category}
                        </Link>
                    ))}
                </div>
            </div>
          )}
        </div>

        <div className="flex md:hidden">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-first p-2 focus:outline-none"
            >
                {isMobileMenuOpen ? (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-bfirst border-b border-first flex flex-col px-6 py-4 shadow-lg h-screen md:h-auto overflow-y-auto">
            <Link
            href='/'
            onClick={() => handleLinkClick("home")} className="py-4 text-xl border-b border-first/20">Home</Link>
            <Link
            href='/my-story'
            onClick={() => handleLinkClick("my-story")} className="py-4 text-xl border-b border-first/20">My Story</Link>

            <Link 
            href='blog'
            onClick={() => handleLinkClick("blog")} className="py-4 text-xl border-b border-first/20">Blog</Link>
            <Link
            href='contact'
            onClick={() => handleLinkClick("contact")} className="py-4 text-xl border-b border-first/20">Contact</Link>
            
            <div className="py-4 border-b border-first/20">
                <div 
                    className="flex justify-between items-center text-xl cursor-pointer"
                    onClick={() => setIsMobileBooksOpen(!isMobileBooksOpen)}
                >
                    Books
                    <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileBooksOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                
                {/* Sub-menu Books Mobile */}
                {isMobileBooksOpen && (
                    <div className="flex flex-col mt-2 ml-4 border-l border-first/30 pl-4">
                        {bookCategories.map((category) => (
                             <a
                                key={category}
                                href={`/blog/?type=${category.toLocaleLowerCase()}`}
                                onClick={() => handleLinkClick("books")}
                                className="py-3 text-lg text-first/80"
                             >
                                {category}
                             </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;