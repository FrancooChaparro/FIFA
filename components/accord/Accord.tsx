import React from "react";
import styles from "./accord.module.css";
import { top20 } from "@/models/games";
export const Accord = () => {
  const { players } = top20

  return (
    <div className={styles.containeralal}>
      <div className={styles.titles}>
      <h1>TOP 20 Players World</h1>
      </div>
      <ul className={styles.accordion}>
        {players.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <div className={styles.content}>
              <span>
                <h2>{item.name}</h2>
                <p>{item.team}</p>
              </span>
            </div>
            <div className={styles.toprank}>{item.rank}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
