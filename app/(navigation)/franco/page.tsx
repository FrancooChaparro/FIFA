"use client"
import React, { useState } from 'react';
import styles from "./franco.module.css";
import { Result } from '@/components/Results/Result';

const Franco = () => {
  const [clasic, setClasic] = useState(true);

  return (
    <div className={styles.container_all}>
        <div className={styles.container_poster}>
            <img src="https://www.hdwallpapers.in/download/paris_saint_germain_logo_in_colorful_background_hd_psg-1600x900.jpg" alt="poster" />
            <div className={styles.photo}><img src="/images/fra.jpg" alt="franco" /></div>
        </div>
        <div className={styles.container_info}>
            <h4>Franco Chaparro</h4>
            <h4>PARIS SAINT GERMAIN</h4>

            <div className={styles.containerData2}>
              
                <div className={styles.top}>
                {clasic ? <span>EFECTIVIDAD FINALES</span> : <span>EFECTIVIDAD CLASICOS</span> }
                </div>
                {clasic ? <div className={styles.bot}>
                 <span style={{color: "green"}}>64%</span><span style={{color: "green"}}>16W</span><span style={{color: "red"}}>9L</span>   
                </div> : <div className={styles.bot}>
                 <span style={{color: "green"}}>85%</span><span style={{color: "green"}}>6W</span><span style={{color: "red"}}>1L</span>   
             </div> }
          
            </div>
       
            <div className={styles.containerMidlane}>
    <button onClick={()=> setClasic(true)}>Finals</button><button onClick={()=> setClasic(false)}>Classic</button>
    </div>
    <div className={styles.containerGames}>
        {
            clasic ? 
            <>
            <Result Result='V' LocalEscudo={"/images/BayernMunchen.png"} LocalNombre='BAYERN MUN' LocalResultado={2} VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REAL MADRID' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={3} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={1}/>
            <Result Result='X' LocalEscudo={"/images/Sevilla.webp"} LocalNombre='SEVILLA' LocalResultado={1} VisitanteEscudo={"/images/ManchesterCity.png"} VisitanteNombre='MAN. CITY' VisitanteResultado={2}/>
            <Result Result='X' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={0} VisitanteEscudo={"/images/AstonVilla.png"} VisitanteNombre='ASTON VILLA' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/ManchesterCity.png"} LocalNombre='MAN. CITY' LocalResultado={1} VisitanteEscudo={"/images/ASRoma.png"} VisitanteNombre='ROMA' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/ManchesterUnited.png"} LocalNombre='MAN. UNITED' LocalResultado={3} VisitanteEscudo={"/images/Valencia.jpg"} VisitanteNombre='VALENCIA' VisitanteResultado={2}/>
            <Result Result='V' LocalEscudo={"/images/Tottenham.png"} LocalNombre='TOTTENHAM' LocalResultado={1} VisitanteEscudo={"/images/AstonVilla.png"} VisitanteNombre='ASTON VILLA' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2}  VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/Sevilla.webp"} LocalNombre='SEVILLA' LocalResultado={1} VisitanteEscudo={"/images/BayernMunchen.png"} VisitanteNombre='BAYERN MUN' VisitanteResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/Arsenal.jpg"} LocalNombre='ARSENAL' LocalResultado={0} VisitanteEscudo={"/images/Valencia.jpg"} VisitanteNombre='VALENCIA' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/internazionale.png"} LocalNombre='INTER' LocalResultado={3} VisitanteEscudo={"/images/Ajax.png"} VisitanteNombre='AJAX' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/Barcelona.webp"} LocalNombre='BARCELONA' LocalResultado={0} VisitanteEscudo={"/images/Milan.png"} VisitanteNombre='MILAN' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/Liverpool.png"} LocalNombre='LIVERPOOL' LocalResultado={1} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={2}/>
            <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={4} VisitanteEscudo={"/images/Milan.png"} VisitanteNombre='MILAN' VisitanteResultado={2}/>
            <Result Result='X' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={0} VisitanteEscudo={"/images/VillaReal.webp"} VisitanteNombre='VILLA REAL' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/Liverpool.png"} LocalNombre='LIVERPOOL' LocalResultado={1} VisitanteEscudo={"/images/Tottenham.png"} VisitanteNombre='TOTTENHAM' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/Newcastle.png"} LocalNombre='NEWCLASTLE' LocalResultado={1} VisitanteEscudo={"/images/Zenit.png"} VisitanteNombre='ZENIT' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/ManchesterUnited.png"} LocalNombre='MAN. UNITED' LocalResultado={1} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/Ajax.png"} LocalNombre='AJAX' LocalResultado={3} VisitanteEscudo={"/images/Arsenal.jpg"} VisitanteNombre='ARSENAL' VisitanteResultado={0}/>


        

            <Result Result='X' LocalEscudo={"/images/Liverpool.png"} LocalNombre='LIVERPOOL' LocalResultado={0} VisitanteEscudo={"/images/ManchesterUnited.png"} VisitanteNombre='MANCHESTER UNITED' VisitanteResultado={1}/>
            <Result Result='X' LocalEscudo={"/images/Porto.jpg"} LocalNombre='PORTO' LocalResultado={0} VisitanteEscudo={"/images/ManchesterCity.png"} VisitanteNombre='MANCHESTER CITY' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/Barcelona.webp"} LocalNombre='BARCELONA' LocalResultado={2} VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={2}/>
            <Result Result='X' LocalEscudo={"/images/Arsenal.jpg"} LocalNombre='ARSENAL' LocalResultado={0} VisitanteEscudo={"/images/Tottenham.png"} VisitanteNombre='TOTTENHAM' VisitanteResultado={2}/>
            <Result Result='X' LocalEscudo={"/images/Valencia.jpg"} LocalNombre='VALENCIA' LocalResultado={1} VisitanteEscudo={"/images/Newcastle.png"} VisitanteNombre='NEWCASTLE' VisitanteResultado={3}/>

            </> 
            : 
            <>
             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={3}  VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={2}/>
             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2}  VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={1}/>
             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2}  VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={0}/>
             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2}  VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={0}/>
             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={3}  VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={1}/>

             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={2}/>
             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={3} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={1}/>
             <Result Result='V' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={2} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
             <Result Result='X' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={0} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={1}/>
             <Result Result='X' LocalEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={0} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
             </>
        }
    </div> </div>
    </div>
  )
}

export default Franco;