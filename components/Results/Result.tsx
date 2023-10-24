import React from "react";
import styles from "./Result.module.css";

interface MyPropsCard {
  LocalEscudo: any;
  LocalNombre: string;
  LocalResultado: number;
  VisitanteEscudo: any;
  VisitanteNombre: string;
  VisitanteResultado: number;
  Result: string
}
export const Result: React.FC<MyPropsCard> = ({
  LocalEscudo,
  LocalNombre,
  LocalResultado,
  VisitanteEscudo,
  VisitanteNombre,
  VisitanteResultado,
  Result
}) => {
  return (
    <div className={styles.containerGame}>
      <div className={styles.containerEscudo}>
        <img src={LocalEscudo} alt={LocalNombre} />
      </div>
      <div className={styles.containerGameName}>{LocalNombre}</div>
      <div className={Result === "X" ? styles.containerGameResultWin : styles.containerGameResultLoss}>{LocalResultado}</div>
      <div className={Result === "X" ? styles.containerGameResultWin : styles.containerGameResultLoss}>{VisitanteResultado}</div>
      <div className={styles.containerGameName}>{VisitanteNombre}</div>
      <div className={styles.containerEscudo}>
        <img src={VisitanteEscudo} alt={VisitanteNombre} />
      </div>
      <div className={styles.containerFinished}>
        {Result === "X" ?  <span style={{backgroundColor: "red"}}>{Result}</span> :  <span style={{backgroundColor: "green"}}>{Result}</span> }    
      </div>
    </div>
  );
};
