import Link from 'next/link'
import styles from './styles/card.module.css'
import Image from 'next/image'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image 
            src='/60.jpg' alt='' fill
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <div className={styles.date}>11.04.2024</div>
                <div className={styles.category}>CATEGORY</div>
            </div>
            <Link href='/'>
                <h1>ihashjksdhklhs\lhklbhkflhbflkshbklhsfklbhl</h1>
            </Link>
            <p>
                agyuafguiDG|czj bs\IOhqyTOGIsMCNVFB\DuihEASJcvb jkz\ghSIOelSCBDJKGHSEWIOLDFBV
            </p>
            <Link href='/'>Read More</Link>
          </div>
    </div>
  )
}

export default Card