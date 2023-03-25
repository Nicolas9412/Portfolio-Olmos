import React from "react";
import styles from "./Presentation.module.css";

const Presentation = () => {
  return (
    <div className={styles.container}>
      <p className={styles.etiqueta}>Web Developer</p>
      <p className={styles.p}>
        Hola! Soy
        <b className={styles.name}> Nicolás Olmos</b>
      </p>
      <p className={styles.description}>
        Me dedico a realizar <b>aplicaciones web</b> para cubrir la necesidad
        que se te ocurra!
      </p>
      <p className={styles.buttonsec}>→ Mirá mis proyectos</p>
      <p className={styles.buttonpri}>Contáctame</p>
    </div>
  );
};

export default Presentation;
