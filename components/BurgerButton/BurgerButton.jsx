import React from "react";
import styles from "./BurgerButton.module.css";

const BurgerButton = ({ clicked, handleClick }) => {
  return (
    <>
      <div
        onClick={handleClick}
        className={`${styles.icon} ${styles.navIcon5} ${
          clicked ? styles.open : null
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default BurgerButton;
