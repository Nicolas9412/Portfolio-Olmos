import React from "react";
import styles from "./Home.module.css";

import { Presentation, PresentationImage } from "../components";
import { Perfil, Habilidades, Proyectos, Contacto } from "./modules";

const Page = () => {
  return (
    <>
      <section id="inicio" className={styles.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <section className={styles.zona2}>
          <Presentation />
          <PresentationImage />
        </section>
      </section>
      <section className={styles.zona3}>
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </section>
    </>
  );
};

export default Page;
