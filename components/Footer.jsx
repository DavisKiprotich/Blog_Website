import React from 'react'
import styles from './styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/wings.jpg' alt='blog' width={50} height={50} />
          <h2 className={styles.logoText}>Blog</h2>
        </div>
        <p className={styles.desc}>hvahgjhzbbza\jkuhqegkvjsbcmbzdaejkhgkzdvbjcm zsjkgjvdbxc</p>
        <div className={styles.icons}>
          <Image src='/facebook.png' alt='' width={18} height={18} />
          <Image src='/instagram.png' alt='' width={18} height={18} />
          <Image src='/tiktok.png' alt='' width={18} height={18} />
          <Image src='/youtube.png' alt='' width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href=''>Home</Link>
          <Link href=''>Blog</Link>
          <Link href=''>About Us</Link>
          <Link href=''>Contact Us</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href=''>Meditate</Link>
          <Link href=''>Pray</Link>
          <Link href=''>Travel</Link>
          <Link href=''>Style</Link>
          <Link href=''>Exercise</Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href=''>Facebook</Link>
          <Link href=''>Instagram</Link>
          <Link href=''>Tiktok</Link>
          <Link href=''>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer