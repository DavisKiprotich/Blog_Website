import Link from "next/link";
import { PostCard, PostWidget, Categories, CardList } from "../../components";
import Featured from "../../components/Featured";
import Menu from "../../components/Menu";
import styles from "../../components/styles/homepage.module.css";


export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <Categories />
      <div className={styles.content}>
        <CardList  page={page} />
        <Menu />
      </div>
    </div>
  );
}
