"use client";
import React from "react";
import styles from "./PresentationImage.module.css";
import Image from "next/image";

const PresentationImage = () => {
  return (
    <div className={styles.circle}>
      <Image
        alt={"foto de perfil"}
        className={styles.profilePicture}
        width={328}
        height={418}
        src={"/foto-cv.jpg"}
      />
    </div>
  );
};

export default PresentationImage;
