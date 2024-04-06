import React from "react";
import styles from "./results.module.css";
import { ResultFinals } from "@/components/ResultFinals/ResultFinals";
import { History } from "@/models/games";
import { Externals, Match } from "@/app/types";

const Finals = () => {
  const history: Externals = History;

  const renderResults = (data: Match[]) => {
    return data.map((game, index) => (
      <ResultFinals
        key={index}
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
    ));
  };

  return (
    <>
      <div className={styles.containerHeader}>
        <div className={styles.containerMarcos}>
          <div className={styles.icon_marcos}></div>
          <h5>MARCOS</h5>
        </div>
        <div className={styles.containerFranco}>
          <div className={styles.icon_franco}></div>
          <h5>FRANCO</h5>
        </div>
        <div className={styles.containerGaston}>
          <div className={styles.icon_gaston}></div>
          <h5>GASTON</h5>
        </div>
      </div>
      <span className={styles.spansito}>Finals History</span>
      <div className={styles.containerGames}>{renderResults(history.Games)}</div>
      <span className={styles.spansito}>Torneos No oficiales</span>
      <div className={styles.containerGames}>{renderResults(history.torneos)}</div>
      <span className={styles.spansito}>Popular Matchs</span>
      <div className={styles.containerGames}>{renderResults(history.best_match)}</div>
    </>
  );
};

export default Finals;