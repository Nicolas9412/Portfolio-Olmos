import React from "react";
import styles from "./Presentation.module.css";

const Presentation = () => {
  return (
    <div className={styles.container}>
      <span className={styles.etiqueta}>Web Developer</span>
      <span className={styles.span}>
        Hola! Soy
        <b className={styles.name}> Nicolás Olmos</b>
      </span>
      <span className={styles.description}>
        Me dedico a realizar <b>aplicaciones web</b> para cubrir la necesidad
        que se te ocurra!
      </span>
      <span className={styles.buttonsec}>→ Mirá mis proyectos</span>
      <span className={styles.buttonpri}>Contáctame</span>
    </div>
  );
};

export default Presentation;
