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
      <a href="/#proyectos">
        <p className={styles.buttonsec}>
          <em className={styles.arrow1}>→</em> Mirá mis proyectos
        </p>
      </a>
      <a href="/#contacto">
        <p className={styles.buttonpri}>Contáctame</p>
      </a>
    </div>
  );
};

export default Presentation;
