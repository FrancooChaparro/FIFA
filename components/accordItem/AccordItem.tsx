import React from "react";
import styles from "../accord/accord.module.css";

interface props {
  image: string;
  name: string;
  rank: number;
  team: string;
}
export const AccordItem = ({ image, name, rank, team }: props) => {
  return (
    <div className={styles.li}>
      <img src={image} alt={name} />
      <div className={styles.content}>
        <span>
          <h2>{name}</h2>
          <p>{team}</p>
        </span>
      </div>
      <div className={styles.toprank}>{rank}</div>
    </div>
  );
};
