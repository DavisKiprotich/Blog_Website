import Head from "next/head";
import Image from "next/image";

const articles = [
  { title: "React Testing", author: "Linnric" },
  { title: "React Testing with Tailwind", author: "Paul" },
];

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-24 ">
      <Head className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Create Our Blog Website Using NextJs and TailwindCSS
        </p>
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div>
          {articles.map((article, index) => (
            <div>
              {article.title}
              {article.author}
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1"></div>
      </div>

    </main>
  );
}
