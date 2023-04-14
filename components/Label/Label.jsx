import React from "react";
import styles from "./Label.module.css";

const Label = ({ label, children, style, subLabel, subLabelStyle }) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.label} ${style}`}>{label}</p>
      {children}
      {subLabel ? (
        <p className={`${styles.subLabel} ${subLabelStyle}`}>{subLabel}</p>
      ) : null}
    </div>
  );
};

export default Label;
