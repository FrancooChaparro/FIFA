"use client"
import React, { useState } from 'react';
import styles from "../franco/franco.module.css";
import { Result } from '@/components/Results/Result';


const Marcos = () => {
  const [clasic, setClasic] = useState(true);

  return (
    <div className={styles.container_all}>
        <div className={styles.container_poster}>
            <img src="https://i.pinimg.com/originals/40/ce/31/40ce311eb0519c5bd50410ec957dfd0e.jpg" alt="poster" />
            <div className={styles.photo}><img src="/images/Marcos.jpg" alt="marcos" /></div>
        </div>
        <div className={styles.container_info}>
            <h4>Marcos Aquino</h4>
            <h4>CHELSEA</h4>

            <div className={styles.containerData2}>
              
                <div className={styles.top}>
                {clasic ? <span>EFECTIVIDAD FINALES</span> : <span>EFECTIVIDAD CLASICOS</span> }
                </div>
                {clasic ? <div className={styles.bot}>
                 <span style={{color: "red"}}>11%</span><span style={{color: "green"}}>1W</span><span style={{color: "red"}}>8L</span>   
                </div> : <div className={styles.bot}>
                 <span style={{color: "red"}}>20%</span><span style={{color: "green"}}>1W</span><span style={{color: "red"}}>4L</span>   
                </div> }
          
            </div>
       
            <div className={styles.containerMidlane}>
    <button onClick={()=> setClasic(true)}>Finals</button><button onClick={()=> setClasic(false)}>Classic</button>
    </div>
    <div className={styles.containerGames}>
    {
            clasic ? 
            <>
            <Result Result='X' VisitanteEscudo={"/images/RealMadrid.png"} VisitanteNombre='REAL MADRID' VisitanteResultado={3} LocalEscudo={"/images/internazionale.png"} LocalNombre='INTER' LocalResultado={0}/>
            <Result Result='X' LocalEscudo={"/images/Valencia.jpg"} LocalNombre='VALENCIA' LocalResultado={2} VisitanteEscudo={"/images/ManchesterUnited.png"} VisitanteNombre='MAN. UNITED' VisitanteResultado={3}/>
            <Result Result='X' LocalEscudo={"/images/AstonVilla.png"} LocalNombre='ASTON VILLA' LocalResultado={0} VisitanteEscudo={"/images/Tottenham.png"} VisitanteNombre='TOTTENHAM' VisitanteResultado={1}/>
            <Result Result='X' LocalEscudo={"/images/Zenit.png"} LocalNombre='ZENIT' LocalResultado={0} VisitanteEscudo={"/images/SSC_Neapel.svg.png"} VisitanteNombre='NAPOLI' VisitanteResultado={2}/>
            <Result Result='X' LocalEscudo={"/images/Chelsea.png"} LocalNombre='CHELSEA' LocalResultado={1} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={2}/>
            <Result Result='V' LocalEscudo={"/images/Valencia.jpg"} LocalNombre='VALENCIA' LocalResultado={1} VisitanteEscudo={"/images/Arsenal.jpg"} VisitanteNombre='ARSENAL' VisitanteResultado={0}/>
            <Result Result='X' VisitanteEscudo={"/images/internazionale.png"} VisitanteNombre='INTER' VisitanteResultado={3} LocalEscudo={"/images/Ajax.png"} LocalNombre='AJAX' LocalResultado={1}/>
            <Result Result='X' VisitanteEscudo={"/images/Liverpool.png"} VisitanteNombre='LIVERPOOL' VisitanteResultado={2} LocalEscudo={"/images/Porto.jpg"} LocalNombre='PORTO' LocalResultado={1}/>
            <Result Result='X' VisitanteEscudo={"/images/Barcelona.webp"} VisitanteNombre='BARCELONA' VisitanteResultado={0} LocalEscudo={"/images/Milan.png"} LocalNombre='MILAN' LocalResultado={0}/>
            <Result Result='X' VisitanteEscudo={"/images/Arsenal.jpg"} VisitanteNombre='ARSENAL' VisitanteResultado={3} LocalEscudo={"/images/internazionale.png"} LocalNombre='INTER' LocalResultado={0}/>
            <Result Result='V' VisitanteEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={4} LocalEscudo={"/images/Milan.png"} VisitanteNombre='MILAN' VisitanteResultado={2}/>
            <Result Result='X' VisitanteEscudo={"/images/ParisSaintGermain.png"} LocalNombre='PSG' LocalResultado={0} LocalEscudo={"/images/VillaReal.webp"} VisitanteNombre='VILLA REAL' VisitanteResultado={1}/>
            <Result Result='V' VisitanteEscudo={"/images/Liverpool.png"} LocalNombre='LIVERPOOL' LocalResultado={1} LocalEscudo={"/images/Tottenham.png"} VisitanteNombre='TOTTENHAM' VisitanteResultado={0}/>
            <Result Result='V' VisitanteEscudo={"/images/Newcastle.png"} LocalNombre='NEWCLASTLE' LocalResultado={1} LocalEscudo={"/images/Zenit.png"} VisitanteNombre='ZENIT' VisitanteResultado={0}/>
            <Result Result='V' VisitanteEscudo={"/images/ManchesterUnited.png"} LocalNombre='MAN. UNITED' LocalResultado={1} LocalEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
            </> 
            : 
            <>
             <Result Result='X' LocalEscudo={"/images/Chelsea.png"} LocalNombre='CHELSEA' LocalResultado={2} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={3}/>
             <Result Result='X' LocalEscudo={"/images/Chelsea.png"} LocalNombre='CHELSEA' LocalResultado={1} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={2}/>
             <Result Result='X' LocalEscudo={"/images/Chelsea.png"} LocalNombre='CHELSEA' LocalResultado={0} VisitanteEscudo={"/images/ParisSaintGermain.png"} VisitanteNombre='PSG' VisitanteResultado={2}/>
             <Result Result='V' LocalEscudo={"/images/Chelsea.png"} LocalNombre='CHELSEA' LocalResultado={0} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={0}/>
             <Result Result='X' LocalEscudo={"/images/Chelsea.png"} LocalNombre='CHELSEA' LocalResultado={0} VisitanteEscudo={"/images/Juventus.png"} VisitanteNombre='JUVENTUS' VisitanteResultado={2}/>
             </>
        }
    </div> </div>
    </div>
  )
}

export default Marcos;