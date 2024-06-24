 import Link from 'next/link'
import styles from './styles/card.module.css'
import Image from 'next/image'

const Card = ({ key,item }) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image 
            src='/60.jpg' alt='' fill className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.04.2024  -  </span>
                <span className={styles.category}>CATEGORY</span>
            </div>
            <Link href='/'>
                <h1>{item.title}</h1> 
            </Link>
            <p className={styles.desc}>
                agyuafguiDG|czj bs\IOhqyTOGIsMCNVFB\DuihEASJcvb 
                jkz\ghSIOelSCBDJKGHSEWIOLDFBV
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card