import React from "react";
import styles from "./styles/menu.module.css";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{"Whats trending"}</h3>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.meditate}`}>
              Meditate
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.exercise}`}>
              Exercise
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
      </div>
      <h3 className={styles.subtitle}>{"Choices made by the Editor"}</h3>
      <h1 className={styles.title}>Editor's Choicer</h1>
      <div className={styles.items}>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.meditate}`}>
              Meditate
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.exercise}`}>
              Exercise
            </span>
            <h3 className={styles.postTitle}>
              jkbgkasjbjzxnm vgfasghvjhvfhjgjvjhbgaujkgkugkjugk
              jbajgajsvdjhgjuabsnmvbud
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
      </div>
      <h3 className={styles.subtitle}>Make your choice</h3>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link href='/blog?cat=meditate' className={`${styles.category} ${styles.meditate}`}>
          Meditate
        </Link>
        <Link href='/blog?cat=pray' className={`${styles.category} ${styles.pray}`}>
          Pray
        </Link>
        <Link href='/blog?cat=exercise' className={`${styles.category} ${styles.exercise}`}>
          Exercise
        </Link>
        <Link href='/blog?cat=travel' className={`${styles.category} ${styles.travel}`}>
          Travel
        </Link>
      </div>
    </div>
  );
};

export default Menu;
