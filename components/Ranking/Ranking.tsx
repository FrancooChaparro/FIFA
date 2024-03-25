import React from 'react';
import styles from "./Ranking.module.css";
import { Picture } from '../Picture/Picture';

export const Ranking = () => {
  return (
    <div className={styles.containerAll}>
        <div className={styles.containerTableGreen}>
        <Picture out={true} name={"PARIS SAIINT GERMAIN"} titles={4} img={"/images/ParisSaintGermain.png"} rank={1}/>
        <Picture out={true} name={"BAYERN MUNICH"} titles={3} img={"/images/BayernMunchen.png"} rank={2}/>
        <Picture out={true} name={"MANCHESTER UNITED"} titles={3} img={"/images/ManchesterUnited.png"} rank={3}/>
        <Picture out={true} name={"MANCHESTER CITY"} titles={3} img={"/images/ManchesterCity.png"} rank={4}/>
        <Picture out={true} name={"REAL MADRID"} titles={3} img={"/images/RealMadrid.png"} rank={5}/>
        <Picture out={true} name={"BARCELONA"} titles={2} img={"/images/Barcelona.webp"} rank={6}/>
        <Picture out={true} name={"TOTTENHAM"} titles={2} img={"/images/Tottenham.png"} rank={7}/>
        <Picture out={true} name={"NEWCASTLE"} titles={2} img={"/images/Newcastle.png"} rank={8}/>
        <Picture out={true} name={"PORTO"} titles={2} img={"/images/Porto.jpg"} rank={9}/>
        <Picture out={true} name={"ASTON VILLA"} titles={1} img={"/images/AstonVilla.png"} rank={10}/>
        </div>

        <div className={styles.containerTableYellow}>
        <Picture out={true} name={"NAPOLI"} titles={1} img={"/images/SSC_Neapel.svg.png"} rank={11}/>
        <Picture out={true} name={"SEVILLA"} titles={1} img={"/images/Sevilla.webp"} rank={12}/>
        <Picture out={true} name={"VALENCIA"} titles={1} img={"/images/Valencia.jpg"} rank={13}/>
        <Picture out={true} name={"INTER"} titles={1} img={"/images/Internazionale.png"} rank={14}/>
        <Picture out={true} name={"ARSENAL"} titles={1} img={"/images/Arsenal.jpg"} rank={15}/>
        <Picture out={true} name={"JUVENTUS"} titles={1} img={"/images/Juventus.jpg"} rank={16}/>
        <Picture out={true} name={"VILLA REAL"} titles={1} img={"/images/VillaReal.webp"} rank={17}/>
        <Picture out={true} name={"LIVERPOOL"} titles={1} img={"/images/Liverpool.png"} rank={18}/>
        <Picture out={true} name={"AJAX"} titles={1} img={"/images/Ajax.png"} rank={19}/>
        <Picture out={true} name={"CHELSEA"} titles={0} img={"/images/Chelsea.png"} rank={20}/>
        </div>

        <div className={styles.containerTableRed}>
        <Picture out={true} name={"ZENIT"} titles={0} img={"/images/Zenit.png"} rank={21}/>
        <Picture out={true} name={"AC MILAN"} titles={0} img={"/images/Milan.png"} rank={22}/>
        <Picture out={true} name={"BORUSSIA DORTMUND"} titles={0} img={"/images/BorussiaDortmund.png"} rank={23}/>
        <Picture out={true} name={"SPORTING LISBOA"} titles={0} img={"/images/SportingLisboa.png"} rank={24}/>
        <Picture out={true} name={"LAZIO"} titles={0} img={"/images/Lazio.png"} rank={25}/>
        <Picture out={true} name={"ATL. MADRID"} titles={0} img={"/images/AtleticoMadrid.png"} rank={26}/>
        <Picture out={true} name={"EVERTON"} titles={0} img={"/images/Everton.png"} rank={27}/>
        <Picture out={true} name={"AS ROMA"} titles={0} img={"/images/ASRoma.png"} rank={28}/>
        <Picture out={true} name={"BENFICA"} titles={0} img={"/images/Benfica.png"} rank={29}/>
        <Picture out={true} name={"WOLFSBURGO"} titles={0} img={"/images/wolfburgo.png"} rank={30}/>
        <Picture out={false} name={"FIORENTINA"} titles={0} img={"/images/fiorentina.png"} rank={31}/>
        <Picture out={false} name={"LYON"} titles={0} img={"/images/Lyon.png"} rank={32}/>
        </div>
    </div>
  )
}
