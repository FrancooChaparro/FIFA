"use client";
import React, { useState } from "react";
import styles from "../franco/franco.module.css";
import { Result } from "@/components/Results/Result";
import { stats_gaston } from "@/models/games";
import { Person } from "@/app/types";
import { data } from '@/models/games';
import { Data } from '@/app/types';
const Gaston = () => {
  const [clasic, setClasic] = useState(true);
  const games: Person = stats_gaston;
  const info: Data = data;
  const dat = info.ranking.filter(index => index.name === "JUVENTUS")
  return (
    <div className={styles.container_all}>
      <div className={styles.container_poster}>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e01a4d13-bcea-4c7c-ad5c-82caa2045e37/d3339fc-00e527bc-547b-4380-a086-446ea52c078d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwMWE0ZDEzLWJjZWEtNGM3Yy1hZDVjLTgyY2FhMjA0NWUzN1wvZDMzMzlmYy0wMGU1MjdiYy01NDdiLTQzODAtYTA4Ni00NDZlYTUyYzA3OGQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rz0GPkrWhqY18Xyt1oFw_TZhSfQLjzwya7XJ8friyvc"
          alt="poster"
        />
        <div className={styles.photo}>
          <img src="/images/gaston.jpg" alt="gaston" />
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
        <h4>Gaston Chaparro</h4>
        <h4>JUVENTUS</h4>
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

export default Gaston;
