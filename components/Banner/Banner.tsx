"use client";
import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import { data } from "@/models/games";
import { Data } from "@/app/types";
import Image from "next/image";

const Banner = () => {
  const [num, setNum] = useState<number>(1);
  const { poster }: Data = data;
  const posterInfo = poster?.[num] ?? {};

  useEffect(() => {
    const interval = startInterval();
    return () => clearInterval(interval);
  }, []);

  const startInterval = () => {
    return setInterval(() => {
      setNum((num) => (num === 3 ? 0 : num + 1));
    }, 2000);
  };

  return (
    <div className={styles.ContainerBackground}>
      <Image
        src={posterInfo?.image}
        alt={posterInfo?.alt}
        fill
        loading="lazy"
        placeholder="blur" 
        blurDataURL="/images/blur_inter.webp"
      />
       <div className={styles.containerData}>
        <p className={styles.title}>{posterInfo?.title}</p>
        <span className={styles.description}>{posterInfo?.description}</span>
      </div> 
    </div>
  );
};

export default Banner;

