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
      setNum((num) => (num === 2 ? 0 : num + 1));
    }, 8000);
  };

  return (
    <div className={styles.ContainerBackground}>
      <Image
        src={posterInfo?.image}
        alt={posterInfo?.alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
        placeholder="blur" 
        blurDataURL="/images/ajax_poster_blur.webp"
      />
       <div className={styles.containerData}>
        <p className={styles.title}>{posterInfo?.title}</p>
        <p className={styles.description}>{posterInfo?.description}</p>
      </div> 
    </div>
  );
};

export default Banner;

