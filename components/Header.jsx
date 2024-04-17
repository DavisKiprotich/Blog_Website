import React, {useContext} from 'react'

import AuthLinks from './AuthLinks';
import { ThemeToggler } from '.';

import Link from 'next/link'
import styles from './styles/header.module.css'

import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const categories = [{name: 'Meditation', slug: 'meditation'}, {name: 'Prayer', slug: 'prayer'}]

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
          <FaInstagram className='w-6 h-6 text-blue' />
          <FaFacebook className='w-6 h-6' />
          <FaTwitter className='w-6 h-6' />
          <FaLinkedin className='w-6 h-6' />
        </div>

        <div className={styles.logo}>
          <Link href='/'>
            <span className='cursor-pointer text-center font-bold text-3xl text-white'>
              GraphCMS
            </span>
          </Link>
        </div>

        <div className={styles.links}>
          <ThemeToggler />

          {categories.map((category, index) => (
            <Link key={category.slug} href={`/category/${category.slug}`} className={styles.link}>
              <span className={`md:float-right mr-2 align-middle ml-4 font-semibold cursor-pointer ${index !== categories.length - 1 ? 'mr-8' : ''}`}>
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