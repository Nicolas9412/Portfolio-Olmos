import React from "react";
import styles from "./Title.module.css";

const Title = ({ title, style }) => {
  const longitud = title.length;
  return (
    <div>
      <h1 className={`${styles.title} ${style}`}>{title}</h1>
      <div
        style={{ width: `${longitud}ch` }}
        className={styles.underline}
      ></div>
    </div>
  );
};

export default Title;
