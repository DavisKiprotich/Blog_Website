import React from "react";
import styles from "./styles/menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{"Whats trending"}</h3>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <img src="/27.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>jkbgkasjbjzxnm bsnmvbud</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Paul Mwas</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
