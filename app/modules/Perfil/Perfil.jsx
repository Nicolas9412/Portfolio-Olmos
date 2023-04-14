"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Perfil.module.css";
import { Title } from "@/components";
import Image from "next/image";

const Perfil = () => {
  const estudiosRef = useRef();

  useEffect(() => {
    const estudios = estudiosRef.current;
    const { y } = estudios.getBoundingClientRect();
    if (y < 800) {
      estudios?.classList?.add(styles.aparecer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const estudios = estudiosRef.current;
      const { y } = estudios.getBoundingClientRect();
      if (y < 800) {
        estudios?.classList?.add(styles.aparecer);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="perfil" className={styles.screen}>
      <Title title={"Perfil"} />
      <p className={styles.description}>
        Soy Nicolás Olmos, ingeniero en sistemas de información, desarrollador
        web full stack y me dedico a hacer app útiles que faciliten la vida de
        las personas. Soy muy disciplinado para realizar mi trabajo, me encanta
        enfrentar desafíos que aumenten mi aprendizaje y que me hagan salir de
        mi situacion de confort.{" "}
      </p>
      <div ref={estudiosRef} className={styles.estudiosContainer}>
        <div className={styles.estudiosItems}>
          <Image
            width={100}
            height={100}
            src={"/UTN_logo-removebg-preview.png"}
            alt={"utn"}
            className={styles.estudiosImage}
          />
          <p className={styles.estudiosDescripcion}>
            ingeniero en sistemas de información
          </p>
        </div>
        <div className={styles.estudiosItems}>
          <Image
            width={100}
            height={100}
            src={"/coderhouse-removebg-preview.png"}
            alt={"coderhouse"}
            className={styles.estudiosImage}
          />
          <p className={styles.estudiosDescripcion}>
            desarrollador web full stack MERN
          </p>
          <p className={styles.estudiosDescripcion}>
            Desarrollador Mobile React Native
          </p>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
