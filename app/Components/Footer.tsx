"use client"

import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className=' mt- px-10 py-10 bg-gray-500'>
        <div className='flex items-center justify-between'>
        <h1>CelestialCart</h1>
      <span>
        <ul className='flex gap-2 '>
            <li><Link href="/"><FaFacebookF className='transition-all hover:fill-blue-400' /></Link></li>
            <li><Link href="/"><FaXTwitter className='transition-all hover:fill-blue-400' /></Link></li>
            <li><Link href="/"><FaLinkedinIn className=' transition-all hover:fill-blue-400' /></Link></li>

        </ul>
      </span>
      <span className="flex gap-5 items-center">
        <Link className="transition-all hover:text-blue-400" href="/">About Us</Link>
        <Link className="transition-all hover:text-blue-400" href="/">Contact</Link>
        <Link className="transition-all hover:text-blue-400" href="/">Privacy Policy</Link>
      </span>

        </div>

      <div className='flex justify-center mt-4'>
        <p>        Copyright © 2024 CelestialCart.</p>
      </div>
    </footer>
  );
}
