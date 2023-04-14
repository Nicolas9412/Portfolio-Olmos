import React from "react";
import styles from "./Tecnologies.module.css";
import Image from "next/image";

const Tecnologies = ({ image, title }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={image}
        alt={title}
        width={150}
        height={150}
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Tecnologies;
