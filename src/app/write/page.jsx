import Image from 'next/image'
import styles from '../../../components/styles/writePage.module.css'

const WritePage = () => {
  return (
    <div className={styles.container}>
        <input  type='text' placeholder='Title'/>
        <div className={styles.editor}>
            <Image src='' />
        </div>
    </div>
  )
}

export default WritePage