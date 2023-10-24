import React from "react";
import styles from "../Ranking/Ranking.module.css";


interface MyPropsCard {
    img: any;
    name: string;
    titles: number;
    rank: number;
    out: boolean;
  }

export const Picture: React.FC<MyPropsCard> = ({ img, name, titles, rank, out}) => {

  return (
    <div className={out ? styles.containerPicture : styles.containerPictureOut}>
      <div className={styles.containerPicture1}>
        <span>{rank}</span>
      </div>
      <div className={styles.containerPicture2}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.containerPicture3}>{name}</div>
      <div className={styles.containerPicture4}>{titles}</div>
    </div>
  );
};
