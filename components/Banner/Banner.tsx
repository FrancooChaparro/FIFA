"use client";
import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import { useRouter } from "next/navigation";
import { data } from "@/models/games";
import { Data } from "@/app/types";

const Banner = () => {
  const [num, setNum] = useState<number>(1);
  const info: Data = data

  useEffect(() => {
    const interval = setInterval(() => {
      if (num === 2) {
        setNum(0);
      } else {
        setNum((num) => num + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [num]);

  const poster = data.poster[num];

  return (
    <div className={styles.ContainerBackground}>
      <img
        src={poster.image}
        alt={poster.alt}
        className={styles.background}
      />
      <div className={styles.containerData}>
        <p className={styles.title}>{poster.title}</p>
        <p className={styles.description}>{poster.description}</p>
      </div>
    </div>
  );
};

export default Banner;
