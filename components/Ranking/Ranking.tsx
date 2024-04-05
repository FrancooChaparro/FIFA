import React from "react";
import styles from "./Ranking.module.css";
import { Picture } from "../Picture/Picture";
import { data } from "@/models/games";
import { Data } from "@/app/types";

export const Ranking = () => {
  const info: Data = data;

  return (
    <div className={styles.containerAll}>
      <div className={styles.containerTable}>
        {info.ranking
          .map((team, index) => (
            <Picture
              key={index}
              name={team.name}
              titles={team.titles}
              img={team.logo}
              rank={team.rank}
            />
          ))
          .slice(0, 10)}
      </div>
      <div className={styles.containerTable}>
        {info.ranking
          .map((team, index) => (
            <Picture
              key={index}
              name={team.name}
              titles={team.titles}
              img={team.logo}
              rank={team.rank}
            />
          ))
          .slice(10, 20)}
      </div>
      <div className={styles.containerTable}>
        {info.ranking
          .map((team, index) => (
            <Picture
              key={index}
              name={team.name}
              titles={team.titles}
              img={team.logo}
              rank={team.rank}
            />
          ))
          .slice(20, 32)}
      </div>
    </div>
  );
};
