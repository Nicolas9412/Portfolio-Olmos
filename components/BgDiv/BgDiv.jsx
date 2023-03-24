import React from "react";
import styles from "./BgDiv.module.css";

const BgDiv = ({ clicked }) => {
  return (
    <div
      className={`${styles.initial} ${clicked ? styles.active : null}`}
    ></div>
  );
};

export default BgDiv;
