"use client"
import React from "react";
import styles from "../Ranking/Ranking.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MyPropsCard {
    img: any;
    name: string;
    titles?: number;
    rank?: number;
  }

export const Picture: React.FC<MyPropsCard> = ({ img, name, titles, rank}) => {
  const router = useRouter();

  return (
    <div className={styles.containerPicture} onClick={() => router.push(`/details/${name}`)}>
     {rank !== undefined && (
       <div className={styles.containerPicture1}>
        <span>{rank}</span>
      </div>
     )}
      <div className={styles.containerPicture2}>
        <Image src={img} alt={name} width={40} height={40} loading="lazy"/>
      </div>
      <div className={styles.containerPicture3}>{name}</div>
      {titles !== undefined && (
      <div className={styles.containerPicture4}>{titles}</div>
      )}
    </div>
  );
};
