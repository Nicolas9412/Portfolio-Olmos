import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import { Presentation } from "../components";

const Page = () => {
  return (
    <>
      <section className={styles.zona1}>
        <section className={styles.zona2}>
          <Presentation />
          <Image
            className={styles.profilePicture}
            width={328}
            height={418}
            src={"/foto-cv.jpg"}
          />
        </section>
      </section>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, fugit
        earum voluptatum magni commodi debitis aspernatur sequi magnam nulla
        laudantium non deleniti perferendis? Alias ullam atque quibusdam minus
        non quos?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita, fugit earum voluptatum magni commodi debitis aspernatur sequi
        magnam nulla laudantium non deleniti perferendis? Alias ullam atque
        quibusdam minus non quos?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita, fugit earum voluptatum magni commodi debitis
        aspernatur sequi magnam nulla laudantium non deleniti perferendis? Alias
        ullam atque quibusdam minus non quos?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Expedita, fugit earum voluptatum magni
        commodi debitis aspernatur sequi magnam nulla laudantium non deleniti
        perferendis? Alias ullam atque quibusdam minus non quos?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, fugit earum
        voluptatum magni commodi debitis aspernatur sequi magnam nulla
        laudantium non deleniti perferendis? Alias ullam atque quibusdam minus
        non quos?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita, fugit earum voluptatum magni commodi debitis aspernatur sequi
        magnam nulla laudantium non deleniti perferendis? Alias ullam atque
        quibusdam minus non quos?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita, fugit earum voluptatum magni commodi debitis
        aspernatur sequi magnam nulla laudantium non deleniti perferendis? Alias
        ullam atque quibusdam minus non quos?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Expedita, fugit earum voluptatum magni
        commodi debitis aspernatur sequi magnam nulla laudantium non deleniti
        perferendis? Alias ullam atque quibusdam minus non quos?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, fugit earum
        voluptatum magni commodi debitis aspernatur sequi magnam nulla
        laudantium non deleniti perferendis? Alias ullam atque quibusdam minus
        non quos?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita, fugit earum voluptatum magni commodi debitis aspernatur sequi
        magnam nulla laudantium non deleniti perferendis? Alias ullam atque
        quibusdam minus non quos?Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita, fugit earum voluptatum magni commodi debitis
        aspernatur sequi magnam nulla laudantium non deleniti perferendis? Alias
        ullam atque quibusdam minus non quos?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Expedita, fugit earum voluptatum magni
        commodi debitis aspernatur sequi magnam nulla laudantium non deleniti
        perferendis? Alias ullam atque quibusdam minus non quos?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, fugit earum
        voluptatum magni commodi debitis aspernatur sequi magnam nulla
        laudantium non deleniti perferendis? Alias ullam atque quibusdam minus
        non quos?
      </section>
    </>
  );
};

export default Page;
