'use client';

import { useContext } from 'react';
import styles from './styles/themeToggler.module.css';

import { FiMoon } from 'react-icons/fi';
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggler = () => {

  const {toggle, theme} = useContext(ThemeContext)
  console.log(theme)


  return (
    <div className={styles.container} onClick={toggle}>
      <FiMoon className='w-14px h-14px text-blue-500' />
      <div className={styles.ball} style={
        theme === 'dark'
        ? { backgroundColor: '#fff' }
        : { backgroundColor: '#0f172a'}
        }></div>
      <MdOutlineWbSunny className='w-14px h-14px text-yellow-500' />
    </div>
  )
}

export default ThemeToggler