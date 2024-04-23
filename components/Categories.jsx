import React from 'react'
import styles from './styles/categories.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find your favorite</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
        <Image 
        src='/47.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        style
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
        <Image 
        src='/47.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        style
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
        <Image 
        src='/47.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        style
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
        <Image 
        src='/47.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        style
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
        <Image 
        src='/47.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        style
        </Link>
      </div>  
    </div>
  )
}

export default Categories