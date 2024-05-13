import styles from './styles/comments.module.css'
import Link from 'next/link'

const Comments = () => {

    const status = 'authenticated';
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === 'authenticated' ? (
            <div className={styles.write}>
                <textarea className={styles.input} placeholder='write your comment...' />
                <button className={styles.button}>Send</button>
            </div>
        ) : 
        (
            <Link href='/login'>Log in to write a comment</Link>
        )}
    </div>
  )
}

export default Comments