import React from 'react'
import styles from './styles/categories.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
        <Image 
        src='/47.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        Style
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.pray}`}>
        <Image 
        src='/earth.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        Pray
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.travel}`}>
        <Image 
        src='/extreme-sports.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        Travel
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.meditate}`}>
        <Image 
        src='/beach.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        Meditate
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.exercise}`}>
        <Image 
        src='/war.jpg'
        alt=''
        className={styles.image}
        width={32}
        height={32}
        />
        Exercise
        </Link>
      </div>  
    </div>
  )
}

export default Categories