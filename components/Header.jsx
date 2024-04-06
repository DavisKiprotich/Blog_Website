import React, {useContext} from 'react'

import AuthLinks from './AuthLinks';
import { ThemeToggler } from '.';

import Link from 'next/link'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const categories = [{name: 'Meditation', slug: 'meditation'}, {name: 'Prayer', slug: 'prayer'}]

const Header = () => {
  return (
    <div className='h-16 flex items-center justify-between px-10 bg-gray-800 text-white'>
        <div className='flex gap-10 ml-4'>
          <FaInstagram className='w-6 h-6 text-blue' />
          <FaFacebook className='w-6 h-6' />
          <FaTwitter className='w-6 h-6' />
          <FaLinkedin className='w-6 h-6' />
        </div>
        <div className='text-3xl font-bold'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-3xl text-white'>
              GraphCMS
            </span>
          </Link>
        </div>
        <div className='flex gap-15 ml-auto mr-4'>

          <ThemeToggler />

          {categories.map((category, index) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className={`md:float-right mr-2 align-middle text-white ml-4 font-semibold cursor-pointer ${index !== categories.length - 1 ? 'mr-8' : ''}`}>
                {category.name}
              </span>
            </Link>
          ))}


          <AuthLinks />
          
        </div>
    </div>
  )
}

export default Header