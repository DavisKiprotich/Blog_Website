'use client';

import React from 'react'
import styles from './styles/pagination.module.css'
import { useRouter } from 'next/navigation';

const Pagination = ({ page, hasPrev, hasNext }) => {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.button} disabled={!hasPrev} onClick={() => router.push(`?page = ${page - 1}`)}>Previous</div>
      <div className={styles.button} disabled={!hasNext} onClick={() => router.push(`?page = ${page + 1}`)}>Next</div>
    </div>
  )
}

export default Pagination