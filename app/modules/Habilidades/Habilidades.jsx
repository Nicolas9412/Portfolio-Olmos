import React from "react";
import styles from "./Habilidades.module.css";
import { Title, Tecnologies } from "../../../components";

const Habilidades = () => {
  const hardSkills = [
    { id: 1, image: "/html.png", title: "html" },
    { id: 2, image: "/css3.png", title: "css" },
    { id: 3, image: "/javascript.png", title: "javascript" },
    { id: 4, image: "/reactjs.png", title: "react js" },
    { id: 5, image: "/nextjs.png", title: "next js" },
    { id: 6, image: "/nodejs.png", title: "node js" },
  ];

  const softSkills = [
    { id: 1, image: "/teamwork.png", title: "trabajo en equipo" },
    { id: 6, image: "/comunication.png", title: "comunicacion" },
    { id: 2, image: "/problems.png", title: "resolver problemas" },
    { id: 3, image: "/creativity.png", title: "creatividad" },
    { id: 4, image: "/proactivity.png", title: "proactividad" },
    { id: 5, image: "/empathy.png", title: "empatia" },
  ];

  return (
    <section id="habilidades" className={styles.screen}>
      <Title title={"Habilidades"} />
      <div className={styles.habilidadesItem}>
        <h2 className={styles.subTitle}>Tecnologías</h2>
        <div className={styles.underline1}></div>
        <div className={styles.tecnologiesContainer}>
          {hardSkills.map((item) => (
            <Tecnologies key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
      <div className={styles.habilidadesItem}>
        <h2 className={styles.subTitle}>Habilidades blandas</h2>
        <div className={styles.underline2}></div>
        <div className={styles.tecnologiesContainer}>
          {softSkills.map((item) => (
            <Tecnologies key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
