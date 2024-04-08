"use client";
import { useState } from "react";
import styles from "./franco.module.css";
import {  stats_franco, stats_gaston, stats_marcos } from "@/models/games";
import { Person } from "@/app/types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Result } from "@/components/Results/Result";


export default function Page({ params }: { params: { slug: string } }) { 
    const [clasic, setClasic] = useState(true);
    const router = useRouter();
    const dbMap: Record<string, any> = {
        franco: stats_franco,
        gaston: stats_gaston,
        marcos: stats_marcos
    };    
    if (!(params.slug in dbMap)) {
        return router.push("/");
    }

    const games: Person = dbMap[params.slug];

 

  return (
    <div className={styles.container_all}>
    <div className={styles.container_poster}>
      <Image 
      src={games.info.background_profile}
      alt="poster"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      loading="lazy"
      placeholder="blur" 
      blurDataURL={games.info?.background_blur_profile}
      />
      <div className={styles.photo}>
        <Image 
      src={games.info?.photo_profile}
      alt="poster"
      width={144}
      height={144}
      placeholder="blur" 
        blurDataURL={games.info?.shield_profile}
        loading="lazy"
      />
      </div>
      <div className={styles.container_rank}>
        <div className={styles.container_rank_number}>
           <span>Rank #{games.info?.rank_profile}</span>
        </div>
        <div className={styles.container_image}>
       <img src={games.info?.shield_profile} alt={games.info?.team_profile} />
        </div>
      </div>
    </div>
    <div className={styles.container_info}>
      <h4>{games.info?.name_profile}</h4>
      <h4>{games.info?.team_profile}</h4>
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
            {games?.finals?.matchs
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
}
