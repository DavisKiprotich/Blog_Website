import { CardList } from '../../../components'
import Menu from '../../../components/Menu'
import styles from '../../../components/styles/blogPage.module.css'

const BlogPage = ({searchParams}) => {

  const page = parseInt(searchParams) || 1;
  const {cat} = searchParams;
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat}</h1>
        <div className={styles.content}>
            <CardList cat={cat} page={page}  />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage