"use client";
"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRef } from "react";

function Navbar() {
  const header = useRef();
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      header.current.classList.toggle(styles.abajo, this.window.scrollY > 0);
    });
  }

  return (
    <header ref={header} className={styles.header}>
      <Link href={"#"} className={styles.logo}>
        Nicolás Olmos
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
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
    </header>
  );
}

export default Navbar;
