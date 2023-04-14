"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRef, useState } from "react";
import { monoton } from "../../app/fonts";
import BurgerButton from "../BurgerButton/BurgerButton";
import BgDiv from "../BgDiv/BgDiv";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const header = useRef();

  const handleClick = () => {
    setClicked(!clicked);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      header.current?.classList?.toggle(styles.abajo, this.window.scrollY > 0);
    });
    window.addEventListener("resize", function () {
      if (this.window.screen.width > 996) setClicked(false);
    });
  }

  return (
    <header
      ref={header}
      className={`${styles.header} ${clicked ? styles.activeHeader : null}`}
    >
      <a
        href={"/"}
        className={`${styles.logo} ${monoton.className} ${
          clicked ? styles.activeLogo : null
        }`}
      >
        Nicolás
      </a>
      <nav className={styles.nav}>
        <ul className={`${styles.links} ${clicked ? styles.active : null}`}>
          <li>
            <a
              href={"/#inicio"}
              onClick={() => setClicked(false)}
              className={styles.item}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href={"/#perfil"}
              onClick={() => setClicked(false)}
              className={styles.item}
            >
              Perfil
            </a>
          </li>
          <li>
            <a
              href={"/#habilidades"}
              onClick={() => setClicked(false)}
              className={styles.item}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href={"#proyectos"}
              onClick={() => setClicked(false)}
              className={styles.item}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href={"#contacto"}
              onClick={() => setClicked(false)}
              className={styles.item}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="/files/CVNicolasOlmos.pdf"
              onClick={() => setClicked(false)}
              className={`${styles.cv} ${styles.item}`}
            >
              Ver CV
            </a>
          </li>
        </ul>
      </nav>
      <div className={`${clicked ? styles.burgerActive : styles.burger}`}>
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv clicked={clicked} />
    </header>
  );
}

export default Navbar;
