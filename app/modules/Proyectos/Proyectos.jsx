import React from "react";
import styles from "./Proyectos.module.css";
import { Title, CardProyect } from "../../../components";

const Proyectos = () => {
  return (
    <section id="proyectos" className={styles.screen}>
      <Title title={"Mis Proyectos"} />
      <div className={styles.cardsContainer}>
        <CardProyect
          image={"/ecommerce.webp"}
          title={"Ecommerce backend"}
          linkCode={"https://github.com/Nicolas9412/Coderhouse-Back-End-32080"}
        />
        <CardProyect
          image={"/ecommerce2.webp"}
          title={"Ecommerce frontend"}
          linkCode={
            "https://github.com/Nicolas9412/frontend-Proyecto-Final-32080"
          }
        />
        <CardProyect
          image={"/gvmultillantas.png"}
          title={"GV Multillantas"}
          linkPage={"https://www.gvmultillantas.com/"}
        />
      </div>
    </section>
  );
};

export default Proyectos;
