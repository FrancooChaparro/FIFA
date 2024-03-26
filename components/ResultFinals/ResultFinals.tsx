import React from "react";
import styles from "@/app/(navigation)/results/results.module.css";

interface MyPropsCard {
  LocalEscudo: any;
  LocalNombre: string;
  LocalResultado: number;
  VisitanteEscudo: any;
  VisitanteNombre: string;
  VisitanteResultado: number;
  Result: string;
  Player1: string;
  Player2: string;
}
export const ResultFinals : React.FC<MyPropsCard> = ({
  LocalEscudo,
  LocalNombre,
  LocalResultado,
  VisitanteEscudo,
  VisitanteNombre,
  VisitanteResultado,
  Result,
  Player1,
  Player2
}) => {
  return (
    <div className={styles.containerGame}>
      <div className={styles.bend}>
        <div></div>
      </div>
      <div className={styles.containerEscudo}>
        <img src={LocalEscudo} alt={LocalNombre} />
      </div>
      <div className={styles.containerGameName}>{LocalNombre}</div>

      <div className={styles.colorMarcos}>{LocalResultado}</div>
      <div className={styles.colorMarcos}>{VisitanteResultado}</div>

      {/* <div className={Player1 === "F" ? styles.colorFranco : Player1 === "M" ? styles.colorMarcos :  styles.colorGaston}>{LocalResultado}</div>
      <div className={Player2 === "F" ? styles.colorFranco : Player2 === "M" ? styles.colorMarcos :  styles.colorGaston}>{VisitanteResultado}</div> */}
      <div className={styles.containerGameName}>{VisitanteNombre}</div>
      <div className={styles.containerEscudo}>
        <img src={VisitanteEscudo} alt={VisitanteNombre} />
      </div>
      <div className={styles.bend}>
      <div></div>
      </div>
      <div className={styles.containerFinished}>
        {Result === "L" ?  <span style={{backgroundColor: "rgb(121, 18, 238)"}}>{Result}</span> :  <span style={{backgroundColor: "grey"}}>{Result}</span> }    
      </div>
    </div>
  );
};
