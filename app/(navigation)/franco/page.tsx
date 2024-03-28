"use client";
import React, { useState } from "react";
import styles from "./franco.module.css";
import { Result } from "@/components/Results/Result";
import { stats_franco } from "@/models/games";
import { Person } from "@/app/types";
import { data } from '@/models/games';
import { Data } from '@/app/types';
const Franco = () => {
  const [clasic, setClasic] = useState(true);
  const games: Person = stats_franco;
  const info: Data = data;
  const dat = info.ranking.filter(index => index.name === "PARIS SAINT GERMAIN")
  return (
    <div className={styles.container_all}>
      <div className={styles.container_poster}>
        <img
          src="https://w0.peakpx.com/wallpaper/741/835/HD-wallpaper-paris-saint-germain-french-football-team-blue-background-paris-saint-germain-logo-grunge-art-ligue-1-france-football-psg-emblem-psg-logo.jpg"
          alt="poster"
        />
        <div className={styles.photo}>
          <img src="/images/fra.jpg" alt="franco" />
        </div>
        <div className={styles.container_rank}>
          <div className={styles.container_rank_number}>
            <span>Rank #{dat[0]?.rank}</span>
          </div>
          <div className={styles.container_image}>
          <img src={dat[0]?.logo} alt={dat[0]?.name} />
          </div>
        </div>
      </div>
      <div className={styles.container_info}>
        <h4>Franco Chaparro</h4>
        <h4>PARIS SAINT GERMAIN</h4>
        <div className={styles.section}>
       
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
              <span style={{ color: "green" }}>
                {games.finals.stats.porcent}
              </span>
              <span style={{ color: "green" }}>{games.finals.stats.win}</span>
              <span style={{ color: "red" }}>{games.finals.stats.loss}</span>
            </div>
          ) : (
            <div className={styles.bot}>
              <span style={{ color: "green" }}>
                {games.clasics.stats.porcent}
              </span>
              <span style={{ color: "green" }}>{games.clasics.stats.win}</span>
              <span style={{ color: "red" }}>{games.clasics.stats.loss}</span>
            </div>
          )}
        </div>
        <div className={styles.containerMidlane}>
          <button onClick={() => setClasic(true)}>Finals</button>
          <button onClick={() => setClasic(false)}>Classic</button>
        </div>
        </div>
        <div className={styles.containerGames}>
          {clasic ? (
            <>
              {games.finals.matchs
                .map((game, index) => (
                  <Result
                    key={index}
                    Result={game.Result}
                    VisitanteEscudo={game.VisitanteEscudo}
                    VisitanteNombre={game.VisitanteNombre}
                    VisitanteResultado={game.VisitanteResultado}
                    LocalEscudo={game.LocalEscudo}
                    LocalNombre={game.LocalNombre}
                    LocalResultado={game.LocalResultado}
                    Raiz={game.Raiz}

                  />
                ))
                .reverse()}
            </>
          ) : (
            <>
              {games.clasics.matchs.map((game, index) => (
                <Result
                  key={index}
                  Result={game.Result}
                  VisitanteEscudo={game.VisitanteEscudo}
                  VisitanteNombre={game.VisitanteNombre}
                  VisitanteResultado={game.VisitanteResultado}
                  LocalEscudo={game.LocalEscudo}
                  LocalNombre={game.LocalNombre}
                  LocalResultado={game.LocalResultado}
                  Raiz={game.Raiz}

                />
              ))}
            </>
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default Franco;
