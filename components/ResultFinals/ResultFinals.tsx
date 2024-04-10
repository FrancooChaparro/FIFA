import React from "react";
import styles from "@/app/(navigation)/results/results.module.css";
import Image from "next/image";

interface MyPropsCard {
  LocalEscudo: string;
  LocalNombre: string;
  LocalResultado: number;
  VisitanteEscudo: string;
  VisitanteNombre: string;
  VisitanteResultado: number;
  Result: string;
  Player1: string;
  Player2: string;
}

export const ResultFinals: React.FC<MyPropsCard> = ({
  LocalEscudo,
  LocalNombre,
  LocalResultado,
  VisitanteEscudo,
  VisitanteNombre,
  VisitanteResultado,
  Result,
  Player1,
  Player2,
}) => {
  const getPlayerClass = (player: string) => {
    switch (player) {
      case "F":
        return styles.bend_franco;
      case "M":
        return styles.bend_marcos;
      default:
        return styles.bend_gaston;
    }
  };

  return (
    <div className={styles.containerGame}>
      <div className={styles.bend}>
        <div className={getPlayerClass(Player1)}></div>
      </div>
      <div className={styles.containerEscudo}>
        <Image src={LocalEscudo} alt={LocalNombre} width={50} height={50} />
      </div>
      <div className={styles.containerGameName}>{LocalNombre}</div>
      <div className={styles.containerGameResult}>{LocalResultado}</div>
      <div className={styles.containerGameResult}>{VisitanteResultado}</div>
      <div className={styles.containerGameName}>{VisitanteNombre}</div>
      <div className={styles.containerEscudo}>
        <Image src={VisitanteEscudo} alt={VisitanteNombre} width={50} height={50} />
      </div>
      <div className={styles.bend}>
        <div className={getPlayerClass(Player2)}></div>
      </div>
      <div className={styles.containerFinished}>
        <span style={{ backgroundColor: Result === "L" ? "rgb(121, 18, 238)" : "grey" }}>{Result}</span>
      </div>
    </div>
  );
};
