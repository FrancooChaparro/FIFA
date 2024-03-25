"use client"
import React, { useState } from 'react';
import styles from "../franco/franco.module.css";
import { Result } from '@/components/Results/Result';

const Gaston = () => {
  const [clasic, setClasic] = useState(true);

  return (
    <div className={styles.container_all}>
        <div className={styles.container_poster}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFlOp1t-Gt-Iiwyy-QR1pjgW_nY-ovsPc1w&usqp=CAU" alt="poster" />
            <div className={styles.photo}><img src="/images/flaki.jpg" alt="gaston" /></div>
        </div>
        <div className={styles.container_info}>
            <h4>Gaston Chaparro</h4>
            <h4>JUVENTUS</h4>

            <div className={styles.containerData2}>
              
                <div className={styles.top}>
                {clasic ? <span>EFECTIVIDAD FINALES</span> : <span>EFECTIVIDAD CLASICOS</span> }
                </div>
                {clasic ? <div className={styles.bot}>
                 <span style={{color: "green"}}>55%</span><span style={{color: "green"}}>11W</span><span style={{color: "red"}}>9L</span>   
                </div> : <div className={styles.bot}>
                 <span style={{color: "green"}}>42%</span><span style={{color: "green"}}>3W</span><span style={{color: "red"}}>4L</span>   
             </div> }
          
            </div>
       
            <div className={styles.containerMidlane}>
    <button onClick={()=> setClasic(true)}>Finals</button><button onClick={()=> setClasic(false)}>Classic</button>
    </div>
    <div className={styles.containerGames}>
        {
            clasic ? 
            <>
            <Result Result='V' LocalEscudo={"/images/RealMadrid.png"} LocalNombre='REAL MADRID' LocalResultado={3} VisitanteEscudo={"/images/internazionale.png"} VisitanteNombre='INTER' VisitanteResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/RealMadrid.png"} LocalNombre='REAL MADRID' LocalResultado={1} VisitanteEscudo={"/images/BayernMunchen.png"} VisitanteNombre='BAYERN MUN' VisitanteResultado={2}/>
            <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={1} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={3}/>
            <Result Result='V' LocalEscudo={"/images/ManchesterCity.png"} LocalNombre='MAN. CITY' LocalResultado={2} VisitanteEscudo={"/images/Sevilla.webp"} VisitanteNombre='SEVILLA' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/AstonVilla.png"} LocalNombre='ASTON VILLA' LocalResultado={0} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/ASRoma.png"} LocalNombre='ROMA' LocalResultado={0} VisitanteEscudo={"/images/ManchesterCity.png"} VisitanteNombre='MAN. CITY' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/SSC_Neapel.svg.png"} LocalNombre='NAPOLI' LocalResultado={2} VisitanteEscudo={"/images/Zenit.png"} VisitanteNombre='ZENIT' VisitanteResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/BayernMunchen.png"} LocalNombre='BAYERN MUN' LocalResultado={0} VisitanteEscudo={"/images/Sevilla.webp"} VisitanteNombre='SEVILLA' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/Porto.jpg"} LocalNombre='PORTO' LocalResultado={2} VisitanteEscudo={"/images/Liverpool.png"} VisitanteNombre='LIVERPOOL' VisitanteResultado={1}/>
            <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={2}/>
            <Result Result='V' LocalEscudo={"/images/Arsenal.jpg"} LocalNombre='ARSENAL' LocalResultado={3} VisitanteEscudo={"/images/internazionale.png"} VisitanteNombre='INTER' VisitanteResultado={0}/>
            <Result Result='V' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={2} VisitanteEscudo={"/images/Liverpool.png"} VisitanteNombre='LIVERPOOL' VisitanteResultado={1}/>
            <Result Result='X' LocalEscudo={"/images/Milan.png"} LocalNombre='MILAN' LocalResultado={2} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={4}/>
            <Result Result='V' LocalEscudo={"/images/BayernMunchen.png"} LocalNombre='BAYERN MUN' LocalResultado={1} VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REALMADRID' VisitanteResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/BayernMunchen.png"} LocalNombre='BAYERN MUN' LocalResultado={2} VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REAL MADRID' VisitanteResultado={2}/>
            <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/ManchesterUnited.png"} VisitanteNombre='MANCHESTER UN' VisitanteResultado={1}/>
            
            
            <Result Result='V' LocalEscudo={"/images/ManchesterCity.png"} LocalNombre='MANCHESTER CITY' LocalResultado={1} VisitanteEscudo={"/images/Porto.jpg"} VisitanteNombre='PORTO' VisitanteResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/Tottenham.png"} LocalNombre='TOTTENHAM' LocalResultado={0} VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REAL MADRID' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/Newcastle.png"} LocalNombre='NEWCASTLE' LocalResultado={3} VisitanteEscudo={"/images/Valencia.jpg"} VisitanteNombre='VALENCIA' VisitanteResultado={1}/>
            <Result Result='V' LocalEscudo={"/images/Porto.jpg"} LocalNombre='PORTO' LocalResultado={1} VisitanteEscudo={"/images/BayernMunchen.png"} VisitanteNombre='BAYERN MUNICH' VisitanteResultado={0}/>
            
            
            </> 
            : 
            <>
             <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={0}/>
             <Result Result='V' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={2} VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={0}/>
             <Result Result='V' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={0}/>
             <Result Result='V' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={0}/>
             <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/Chelsea.png"} VisitanteNombre='CHELSEA' VisitanteResultado={2}/>

             <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={2} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={2}/>
             <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={1} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={3}/>
             <Result Result='X' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={2}/>
             <Result Result='V' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={1} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={0}/>
             <Result Result='V' LocalEscudo={"/images/Juventus.png"} LocalNombre='JUVENTUS' LocalResultado={0} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={0}/>
             
             </>
        }
    </div> </div>
    </div>
  )
}

export default Gaston;