import React from "react";
import styles from "./CardProyect.module.css";
import Image from "next/image";
import Link from "next/link";

const CardProyect = ({ image, title, linkPage, linkCode }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt={title}
        width={400}
        height={250}
      />
      <p className={styles.title}>{title}</p>
      <div className={styles.btnContainer}>
        {linkPage && (
          <Link className={styles.btn} href={linkPage}>
            <Image
              className={styles.imageDescription}
              src={"/webpage.png"}
              alt={"webpage"}
              width={30}
              height={30}
            />
            <span className={styles.btnDescription}>page</span>
          </Link>
        )}
        {linkCode && (
          <Link className={styles.btn} href={linkCode}>
            <Image
              className={styles.imageDescription}
              src={"/code.png"}
              alt={"code"}
              width={30}
              height={30}
            />
            <span className={styles.btnDescription}>code</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardProyect;
