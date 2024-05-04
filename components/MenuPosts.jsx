import Link from 'next/link'
import React from 'react'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.meditate}`}>
              Meditate
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.exercise}`}>
              Exercise
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
      </div>
      
  )
}

export default MenuPosts