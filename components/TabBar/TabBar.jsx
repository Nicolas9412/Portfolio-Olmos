import React from "react";
import styles from "./TabBar.module.css";
import Image from "next/image";

const TabBar = () => {
  return (
    <div className={styles.tabContainer}>
      <a href="/files/CVNicolasOlmos.pdf">
        <div className={styles.btnContainer}>
          <Image src={"/cv.png"} width={30} height={30} />
          <p>CV</p>
        </div>
      </a>
      <a href="/#proyectos">
        <div className={styles.btnContainer}>
          <Image src={"/code.png"} width={30} height={30} />
          <p>proyectos</p>
        </div>
      </a>
      <a href="/#contacto">
        <div className={styles.btnContainer}>
          <Image src={"/contact.png"} width={30} height={30} />
          <p>contacto</p>
        </div>
      </a>
    </div>
  );
};

export default TabBar;
