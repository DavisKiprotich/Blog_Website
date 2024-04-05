import React, {useContext} from 'react'

import Link from 'next/link'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const categories = [{name: 'Meditation', slug: 'meditation'}, {name: 'Prayer', slug: 'prayer'}]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8 mt-20 '>
      <div className='border-b w-full border-blue-400 py-8 mt-10 flex justify-between items-center'>
        <div className='flex items-center space-x-6'>
          <FaInstagram className='w-6 h-6 text-blue' />
          <FaFacebook className='w-6 h-6 mr-10' />
          <FaTwitter className='w-6 h-6 mr-10' />
          <FaLinkedin className='w-6 h-6' />
        </div>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-3xl text-white'>
              GraphCMS
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map((category, index) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className={`md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer ${index !== categories.length - 1 ? 'mr-8' : ''}`}>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header