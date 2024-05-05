import React from "react";
import styles from "./styles/menu.module.css";
import Link from "next/link";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";


const Menu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{"Whats trending"}</h3>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h3 className={styles.subtitle}>Make your choice</h3>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h3 className={styles.subtitle}>{"Choices made by the Editor"}</h3>
      <h1 className={styles.title}>Editor's Choicer</h1>
      <MenuPosts withImage={true} />

    </div>
  );
};

export default Menu;
