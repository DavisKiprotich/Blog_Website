import styles from './styles/themeToggler.module.css';

import { FiMoon } from 'react-icons/fi';
import { MdOutlineWbSunny } from "react-icons/md";

const ThemeToggler = () => {
  return (
    <div className={styles.container}>
      <FiMoon className='w-14px h-14px fill-blue-500' />
      <div className={styles.ball}></div>
      <MdOutlineWbSunny className='w-14px h-14px fill-#ffc400-500' />
    </div>
  )
}

export default ThemeToggler