import Link from 'next/link'
import React from 'react'
import styles from './styles/menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href='/blog?cat=meditate' className={`${styles.categoryItem} ${styles.meditate}`}>
          Meditate
        </Link>
        <Link href='/blog?cat=pray' className={`${styles.categoryItem} ${styles.pray}`}>
          Pray
        </Link>
        <Link href='/blog?cat=exercise' className={`${styles.categoryItem} ${styles.exercise}`}>
          Exercise
        </Link>
        <Link href='/blog?cat=travel' className={`${styles.categoryItem} ${styles.travel}`}>
          Travel
        </Link>
      </div>
  )
}

export default MenuCategories