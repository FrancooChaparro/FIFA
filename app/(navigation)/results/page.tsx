import React from "react";
import styles from "./results.module.css";
import { ResultFinals } from "@/components/ResultFinals/ResultFinals";
import { Nav } from "@/components/Nav/Nav";
import { Games, best_match, torneos } from "@/models/games";

const Finals = () => {
  const games: {
    Player1: string;
    Player2: string;
    Result: string;
    LocalEscudo: string;
    LocalNombre: string;
    LocalResultado: number;
    VisitanteEscudo: string;
    VisitanteNombre: string;
    VisitanteResultado: number;
  }[] = Games;

  const Torneos: {
    Player1: string;
    Player2: string;
    Result: string;
    LocalEscudo: string;
    LocalNombre: string;
    LocalResultado: number;
    VisitanteEscudo: string;
    VisitanteNombre: string;
    VisitanteResultado: number;
  }[] = torneos;
  const best_games: {
    Player1: string;
    Player2: string;
    Result: string;
    LocalEscudo: string;
    LocalNombre: string;
    LocalResultado: number;
    VisitanteEscudo: string;
    VisitanteNombre: string;
    VisitanteResultado: number;
  }[] = best_match;
  return (
    <>
      <Nav />
      <div className={styles.containerHeader}>
        <div className={styles.containerMarcos}>MARCOS</div>
        <div className={styles.containerFranco}>FRANCO</div>
        <div className={styles.containerGaston}>GASTON</div>
      </div>
      <span className={styles.spansito}>Finals History</span>
      <div className={styles.containerGames}>
        {games.map((game) => (
          <ResultFinals
            Player1={game.Player1}
            Player2={game.Player2}
            Result={game.Result}
            LocalEscudo={game.LocalEscudo}
            LocalNombre={game.LocalNombre}
            LocalResultado={game.LocalResultado}
            VisitanteEscudo={game.VisitanteEscudo}
            VisitanteNombre={game.VisitanteNombre}
            VisitanteResultado={game.VisitanteResultado}
          />
        ))}
      </div>
      <span className={styles.spansito}>Torneos No oficiales</span>
      <div className={styles.containerGames}>
        {Torneos.map((game) => (
          <ResultFinals
            Player1={game.Player1}
            Player2={game.Player2}
            Result={game.Result}
            LocalEscudo={game.LocalEscudo}
            LocalNombre={game.LocalNombre}
            LocalResultado={game.LocalResultado}
            VisitanteEscudo={game.VisitanteEscudo}
            VisitanteNombre={game.VisitanteNombre}
            VisitanteResultado={game.VisitanteResultado}
          />
        ))}
      </div>
      <span className={styles.spansito}>Popular Matchs</span>
      <div className={styles.containerGames}>
        {best_games.map((game) => (
          <ResultFinals
            Player1={game.Player1}
            Player2={game.Player2}
            Result={game.Result}
            LocalEscudo={game.LocalEscudo}
            LocalNombre={game.LocalNombre}
            LocalResultado={game.LocalResultado}
            VisitanteEscudo={game.VisitanteEscudo}
            VisitanteNombre={game.VisitanteNombre}
            VisitanteResultado={game.VisitanteResultado}
          />
        ))}
      </div>
    </>
  );
};

export default Finals;
