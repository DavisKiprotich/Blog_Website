import Image from 'next/image'
import Menu from '../../../../components/Menu'
import styles from '../../../components/styles/singlePage.module.css'
import Comments from '../../../../components/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>We are buliding this project together even though it looks tiresome!</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src='/47.jpg' alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Joh Doed</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image src='/47.jpg' alt="" fill className={styles.image} />
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
          />
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage