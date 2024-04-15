import Head from "next/head";
import { PostCard, PostWidget, Categories, CardList } from "../../components";
import Featured from "../../components/Featured";
import Menu from "../../components/Menu";
import styles from "../../components/styles/homepage.module.css";

const articles = [
  { title: "React Testing", author: "Linnric" },
  { title: "React Testing with Tailwind", author: "Paul" },
];

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <p>
          Create Our Blog Website Using NextJs and TailwindCSS
        </p>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {articles.map((article, index) => (
            <PostCard article= {article} key={article.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Featured />
            <Categories />
            <div className="">
              <Menu />
              <CardList />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
