import React from "react";
import styles from "./Result.module.css";
import Image from "next/image";

interface MyPropsCard {
  LocalEscudo: any;
  LocalNombre: string;
  LocalResultado: number;
  VisitanteEscudo: any;
  VisitanteNombre: string;
  VisitanteResultado: number;
  Result: string;
  Raiz?: string | undefined;
}
export const Result: React.FC<MyPropsCard> = ({
  LocalEscudo,
  LocalNombre,
  LocalResultado,
  VisitanteEscudo,
  VisitanteNombre,
  VisitanteResultado,
  Result,
  Raiz
}) => {
  return (
  
    <div className={styles.containerGame}>
      <div className={styles.containerEscudo}>
        <Image src={LocalEscudo} alt={LocalNombre} width={50} height={50}/>
      </div>
      <div className={styles.containerGameName}>{LocalNombre}</div>
      <div className={styles.containerGameResultWin}>{LocalResultado}</div>
      <div className={styles.containerGameResultWin}>{VisitanteResultado}</div>
      <div className={styles.containerGameName}>{VisitanteNombre}</div>
      <div className={styles.containerEscudo}>
        <img src={VisitanteEscudo} alt={VisitanteNombre} />
      </div>
      <div className={styles.containerFinished}>
      {Result === "Defeat" ?  
    <span style={{backgroundColor: "red"}}>{Result}</span> 
    : 
    (Result === "Victory" ? 
        <span style={{backgroundColor: "green"}}>{Result}</span> 
        : 
        <span style={{backgroundColor: "rgb(243, 208, 52)"}}>{Result}</span>
    )
}    
      </div>
      {Raiz !== undefined && <div className={styles.raiz}>
        <span>{Raiz}</span>
      </div>
}
    </div>
  );
};
