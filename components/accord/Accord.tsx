import React from "react";
import styles from "./accord.module.css";
import { top20 } from "@/models/games";
import { AccordItem } from "../accordItem/AccordItem";
export const Accord = () => {
  const { players } = top20

  return (
    <div className={styles.containeralal}>
      <div className={styles.titles}>
      <h1>TOP 20 Players World</h1>
      </div>
      <div className={styles.accordion}>
        {players.map((item, index) => (
          <AccordItem key={index} rank={item.rank} name={item.name} team={item.team} image={item.image}/>
        ))}
      </div>
    </div>
  );
};
