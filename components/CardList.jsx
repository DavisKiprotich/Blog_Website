import React from 'react'
import { Pagination } from '.';
import styles from './styles/cardList.module.css'
import Image from 'next/image';
import Card from './Card';

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  )
}

export default CardList