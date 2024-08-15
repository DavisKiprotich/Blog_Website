import React from 'react'
import styles from './styles/featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hey, Discover my stories and articles</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
        <Image src='/27.jpg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Let's Practice Meditation</h2>
          <p className={styles.postDesc}>Meditation provides a tranquil escape from the daily chaos, offering a chance to delve inward and find serenity. Through focused attention on the breath, it fosters mindfulness, heightening awareness of thoughts and emotions. With regular practice, meditation becomes a valuable tool for stress management and mental clarity. Universally accessible, it transcends boundaries, offering solace and insight to all seekers. In its quiet depths, meditation unveils a sanctuary of inner peace and self-discovery.</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
