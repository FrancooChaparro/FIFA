"use client";
import React, { useState } from "react";
import styles from "../franco/franco.module.css";
import { Result } from "@/components/Results/Result";
import { stats_marcos } from "@/models/games";
import { Person } from "@/app/types";

const Marcos = () => {
  const [clasic, setClasic] = useState(true);
  const games: Person = stats_marcos;
  return (
    <div className={styles.container_all}>
      <div className={styles.container_poster}>
        <img
          src="https://i.pinimg.com/originals/40/ce/31/40ce311eb0519c5bd50410ec957dfd0e.jpg"
          alt="poster"
        />
        <div className={styles.photo}>
          <img src="/images/Marcos.jpg" alt="marcos" />
        </div>
      </div>
      <div className={styles.container_info}>
        <h4>Marcos Aquino</h4>
        <h4>CHELSEA</h4>
        <div className={styles.containerData2}>
          <div className={styles.top}>
            {clasic ? (
              <span>EFECTIVIDAD FINALES</span>
            ) : (
              <span>EFECTIVIDAD CLASICOS</span>
            )}
          </div>
          {clasic ? (
            <div className={styles.bot}>
              <span style={{ color: "red" }}>{games.finals.stats.porcent}</span>
              <span style={{ color: "green" }}>{games.finals.stats.win}</span>
              <span style={{ color: "red" }}>{games.finals.stats.loss}</span>
            </div>
          ) : (
            <div className={styles.bot}>
              <span style={{ color: "red" }}>{games.clasics.stats.porcent}</span>
              <span style={{ color: "green" }}>{games.clasics.stats.win}</span>
              <span style={{ color: "red" }}>{games.clasics.stats.loss}</span>
            </div>
          )}
        </div>
        <div className={styles.containerMidlane}>
          <button onClick={() => setClasic(true)}>Finals</button>
          <button onClick={() => setClasic(false)}>Classic</button>
        </div>
        <div className={styles.containerGames}>
          {clasic ? (
            <>
              {games.finals.matchs
                .map((game) => (
                  <Result
                    Result={game.Result}
                    VisitanteEscudo={game.VisitanteEscudo}
                    VisitanteNombre={game.VisitanteNombre}
                    VisitanteResultado={game.VisitanteResultado}
                    LocalEscudo={game.LocalEscudo}
                    LocalNombre={game.LocalNombre}
                    LocalResultado={game.LocalResultado}
                  />
                ))
                .reverse()}
            </>
          ) : (
            <>
             {
              games.clasics.matchs.map((game) =>(
                <Result
                Result={game.Result}
                VisitanteEscudo={game.VisitanteEscudo}
                VisitanteNombre={game.VisitanteNombre}
                VisitanteResultado={game.VisitanteResultado}
                LocalEscudo={game.LocalEscudo}
                LocalNombre={game.LocalNombre}
                LocalResultado={game.LocalResultado}
              />
              ))
             }
            </>
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default Marcos;
