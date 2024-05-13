import { CardList } from '../../../components'
import Menu from '../../../components/Menu'
import styles from '../../../components/styles/blogPage.module.css'

const BlogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage