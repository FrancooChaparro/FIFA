import React from 'react';
import styles from "./results.module.css";
import { ResultFinals } from '@/components/ResultFinals/ResultFinals';
import { Nav } from '@/components/Nav/Nav';


const Finals = () => {
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
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/Ajax.png"} LocalNombre='AJAX' LocalResultado={3} VisitanteEscudo={"/images/Arsenal.jpg"} VisitanteNombre='ARSENAL' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/ManchesterUnited.png"} LocalNombre='MANCHESTER UNITED' LocalResultado={1} VisitanteEscudo={"/images/Juventus.jpg"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/Newcastle.png"} LocalNombre='NEWCASTLE' LocalResultado={1} VisitanteEscudo={"/images/Zenit.png"} VisitanteNombre='ZENIT' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/Liverpool.png"} LocalNombre='LIVERPOOL' LocalResultado={1} VisitanteEscudo={"/images/Tottenham.png"} VisitanteNombre='TOTTENHAM' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='M' Result="NO" LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PARIS SAINT GERMAIN' LocalResultado={0} VisitanteEscudo={"/images/VillaReal.webp"} VisitanteNombre='VILLA REAL' VisitanteResultado={1}/>
    <ResultFinals Player1='G' Player2='M' Result="L" LocalEscudo={"/images/BayernMunchen.png"} LocalNombre='BAYERN MUNICH' LocalResultado={2} VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REAL MADRID' VisitanteResultado={2}/>
    <ResultFinals Player1='G' Player2='M' Result="L" LocalEscudo={"/images/BayernMunchen.png"} LocalNombre='BAYERN MUNICH' LocalResultado={1} VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REAL MADRID' VisitanteResultado={0}/>
    <ResultFinals Player1='G' Player2='F' Result="L" LocalEscudo={"/images/Milan.png"} LocalNombre='MILAN' LocalResultado={2} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PARIS SAINT GERMAIN' VisitanteResultado={4}/>

    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/Liverpool.png"} LocalNombre='LIVERPOOL' LocalResultado={1} VisitanteEscudo={"/images/Juventus.jpg"} VisitanteNombre='JUVENTUS' VisitanteResultado={2}/>
    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PARIS SAINT GERMAIN' LocalResultado={2} VisitanteEscudo={"/images/Juventus.jpg"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
    <ResultFinals Player1='G' Player2='M' Result="L" LocalEscudo={"/images/Arsenal.jpg"} LocalNombre='ARSENAL' LocalResultado={3} VisitanteEscudo={"/images/Internazionale.png"} VisitanteNombre='INTER' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/Barcelona.webp"} LocalNombre='BARCELONA' LocalResultado={0} VisitanteEscudo={"/images/Milan.png"} VisitanteNombre='MILAN' VisitanteResultado={0}/>
    <ResultFinals Player1='G' Player2='M' Result="NO" LocalEscudo={"/images/Porto.jpg"} LocalNombre='PORTO' LocalResultado={2} VisitanteEscudo={"/images/Liverpool.png"} VisitanteNombre='LIVERPOOL' VisitanteResultado={1}/>
    <ResultFinals Player1='F' Player2='M' Result="NO" LocalEscudo={"/images/Internazionale.png"} LocalNombre='INTER' LocalResultado={3} VisitanteEscudo={"/images/Ajax.png"} VisitanteNombre='AJAX' VisitanteResultado={1}/>
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/Arsenal.jpg"} LocalNombre='ARSENAL' LocalResultado={0} VisitanteEscudo={"/images/Valencia.jpg"} VisitanteNombre='VALENCIA' VisitanteResultado={1}/>
    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/Sevilla.webp"} LocalNombre='SEVILLA' LocalResultado={1} VisitanteEscudo={"/images/BayernMunchen.png"} VisitanteNombre='BAYERN MUNICH' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2}  VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={1}/>
    <ResultFinals Player1='G' Player2='M' Result="L" LocalEscudo={"/images/SSC_Neapel.svg.png"} LocalNombre='NAPOLI' LocalResultado={2} VisitanteEscudo={"/images/Zenit.png"} VisitanteNombre='ZENIT' VisitanteResultado={0}/>     
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/Tottenham.png"} LocalNombre='TOTTENHAM' LocalResultado={1} VisitanteEscudo={"/images/AstonVilla.png"} VisitanteNombre='ASTON VILLA' VisitanteResultado={0}/>
    <ResultFinals Player1='G' Player2='M' Result="L" LocalEscudo={"/images/ManchesterCity.png"} LocalNombre='MAN. CITY' LocalResultado={1} VisitanteEscudo={"/images/ASRoma.png"} VisitanteNombre='ROMA' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/ManchesterUnited.png"} LocalNombre='MAN. UNITED' LocalResultado={3} VisitanteEscudo={"/images/Valencia.jpg"} VisitanteNombre='VALENCIA' VisitanteResultado={2}/>
    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={0} VisitanteEscudo={"/images/AstonVilla.png"} VisitanteNombre='ASTON VILLA' VisitanteResultado={0}/>
    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/Sevilla.webp"} LocalNombre='SEVILLA' LocalResultado={1} VisitanteEscudo={"/images/ManchesterCity.png"} VisitanteNombre='MAN. CITY' VisitanteResultado={2}/>
    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={3} VisitanteEscudo={"/images/Juventus.jpg"} VisitanteNombre='JUVENTUS' VisitanteResultado={1}/>
    <ResultFinals Player1='F' Player2='G' Result="L" LocalEscudo={"/images/BayernMunchen.png"} LocalNombre='BAYERN MUNICH' LocalResultado={2} VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REAL MADRID' VisitanteResultado={1}/>
    <ResultFinals Player1='G' Player2='M' Result="L" LocalEscudo={"/images/RealMadrid.png"} LocalNombre='REAL MADRID' LocalResultado={3} VisitanteEscudo={"/images/Internazionale.png"} VisitanteNombre='INTER' VisitanteResultado={0}/>

 </div> 
 <span className={styles.spansito}>Popular Matchs</span>
 <div className={styles.containerGames}>  
            <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/SportingLisboa.png"} LocalNombre='SPORTING' LocalResultado={5} VisitanteEscudo={"/images/SanLorenzo.png"} VisitanteNombre='SAN LORENZO' VisitanteResultado={4}/>
            <ResultFinals Player1='F' Player2='M' Result="L" LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={3} VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={2}/>
            </div> 
 </>
  )
}

export default Finals;