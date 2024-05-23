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

          <Link href="/" className={styles.link}>Homepage</Link>
          <Link href="/" className={styles.link}>Contact</Link>
          <Link href="/" className={styles.link}>About</Link>

          <AuthLinks />          
        </div>
    </div>
  )
}

export default Header