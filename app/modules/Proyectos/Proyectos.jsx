import React from "react";
import styles from "./Proyectos.module.css";
import { Title, CardProyect } from "../../../components";

const Proyectos = () => {
  return (
    <section id="proyectos" className={styles.screen}>
      <Title title={"Mis Proyectos"} />
      <div className={styles.cardsContainer}>
        <CardProyect
          image={"/journal.webp"}
          title={"Journal-App"}
          linkPage={"https://journal-app-indol.vercel.app/"}
          linkCode={"https://github.com/Nicolas9412/journal-app"}
        />
        <CardProyect
          image={"/messi-copa-del-mundo.gif"}
          title={"Gif-Expert-App"}
          linkPage={"https://gif-expert-olmos.netlify.app/"}
          linkCode={"https://github.com/Nicolas9412/gif-expert-app"}
        />
        <CardProyect
          image={"/superheroes.png"}
          title={"Heroes-App"}
          linkPage={"https://heroes-app-expert.netlify.app"}
          linkCode={"https://github.com/Nicolas9412/heroes-app"}
        />
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
