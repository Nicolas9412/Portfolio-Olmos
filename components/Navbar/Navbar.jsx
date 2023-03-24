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
      <Link href={"#"} className={`${styles.logo} ${monoton.className}`}>
        Nicolás
      </Link>
      <nav className={styles.nav}>
        <ul className={`${styles.links} ${clicked ? styles.active : null}`}>
          <li>
            <Link href={"#"} className={styles.item}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={"#"} className={styles.item}>
              Perfil
            </Link>
          </li>
          <li>
            <Link href={"#"} className={styles.item}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link href={"#"} className={styles.item}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link href={"#"} className={styles.item}>
              Contacto
            </Link>
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
