'use client'

import React, { useState } from 'react';
import Link from "next/link";
import axios from 'axios';

function Footer() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  
  // Steps: 1 (Email), 2 (OTP Code), 3 (Success)
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const baseUrl = process.env.NEXT_PUBLIC_API_URL; 

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await axios.post(`${baseUrl}/api/newsLetter/subscribe`, { email });
      setStep(2); 
      setStatus('idle');
      setMessage(response.data.message);
    } catch (error: any) {
      setStatus('error');
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  const handleConfirmCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      await axios.post(`${baseUrl}/api/newsLetter/confirm`, { email, code });
      setStep(3); 
      setStatus('idle');
    } catch (error: any) {
      setStatus('error');
      setMessage(error.response?.data?.message || "Invalid code.");
    }
  };

  return (
    <footer className='bg-accent text-bfirst w-full py-16 px-10 border-t-2 border-black'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12'>
        
        {/* Column 1: Brand */}
        <div className='flex-1 flex flex-col gap-4'>
          <h2 className='font-serif text-3xl md:text-4xl'>Alessia&apos;s Book Blog</h2>
          <p className='font-lora text-sm md:text-base opacity-80 max-w-xs'>
            Your cozy corner for romance, fantasy, and all things books. Creating stories and reviewing worlds since 2012.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div className='flex flex-col gap-4'>
          <h3 className='font-serif text-xl text-highli'>Explore</h3>
          <ul className='flex flex-col gap-2 font-lora'>
            <li>
              <Link href="/blog" className='hover:text-highli transition-colors duration-300'>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/my-story" className='hover:text-highli transition-colors duration-300'>
                My Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className='hover:text-highli transition-colors duration-300'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className='flex flex-col gap-4'>
          <h3 className='font-serif text-xl text-highli'>Legal</h3>
          <ul className='flex flex-col gap-2 font-lora text-sm'>
            <li>
              <Link href="/privacy-policy" className='hover:text-highli transition-colors duration-300'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className='hover:text-highli transition-colors duration-300'>
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className='hover:text-highli transition-colors duration-300'>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Interactiv */}
        <div className='flex-1 flex flex-col gap-4'>
          <h3 className='font-serif text-xl text-highli'>Newsletter</h3>
          <p className='font-lora text-sm opacity-80'>
            Subscribe to get the latest reviews and updates directly in your inbox.
          </p>
          
          <div className="mt-2 min-h-[120px]">
            {/* STEP 1: EMAIL INPUT */}
            {step === 1 && (
              <form onSubmit={handleRequestCode} className="flex flex-col gap-3">
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address..."
                  className="px-4 py-2 rounded-lg text-black w-full outline-none ring-2 ring-highli font-lora text-sm"
                />
                <button
                  type="submit" disabled={status === 'loading'}
                  className="bg-bfirst text-accent px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all disabled:opacity-50 text-sm"
                >
                  {status === 'loading' ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
            )}

            {/* STEP 2: CODE INPUT */}
            {step === 2 && (
              <form onSubmit={handleConfirmCode} className="flex flex-col gap-3">
                <p className="text-xs text-green-300 font-lora">Verification code sent to {email}</p>
                <input
                  type="text" required value={code} onChange={(e) => setCode(e.target.value)}
                  placeholder="6-digit code..." maxLength={6}
                  className="px-4 py-2 rounded-lg text-black w-full outline-none tracking-[0.5em] text-center font-bold"
                />
                <div className="flex gap-2 w-full">
                  <button
                    type="button" onClick={() => setStep(1)}
                    className="flex-1 border border-bfirst/50 text-bfirst px-2 py-2 rounded-lg text-sm hover:bg-bfirst/10"
                  >
                    Back
                  </button>
                  <button
                    type="submit" disabled={status === 'loading' || code.length !== 6}
                    className="flex-[2] bg-bfirst text-accent px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 disabled:opacity-50 text-sm"
                  >
                    {status === 'loading' ? 'Verifying...' : 'Confirm'}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: SUCCESS */}
            {step === 3 && (
              <div className="bg-bfirst/10 border border-bfirst/30 p-4 rounded-xl text-center">
                <p className="font-serif text-lg text-highli">Thank you! 🎉</p>
                <p className="text-sm font-lora mt-1">You are now successfully subscribed.</p>
              </div>
            )}

            {/* Error Message Display */}
            {status === 'error' && message && (
              <p className="text-sm font-lora mt-2 text-red-300">{message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Line: Copyright */}
      <div className='border-t border-bfirst/20 mt-12 pt-8 text-center'>
        <p className='font-sans text-xs md:text-sm opacity-60'>
          © 2026 Alessia&apos;s Book Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;