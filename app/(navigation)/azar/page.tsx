"use client"
import React from "react";
import styles from "./azar.module.css";
import { Team } from "@/app/types";
import { useMyContext } from "@/context/ListContext"
import { useRouter } from "next/navigation";
import { Picture } from "@/components/Picture/Picture";

const Azar = () => {
  const { Franco, FrancoBombo, Marcos, MarcosBombo, Gaston, GastonBombo } = useMyContext();
  const router = useRouter()
 
    let equipos: Array<Team> = [
        { nombre: "Real Madrid", escudo: "/images/RealMadrid.png" , rank: "#5"},
        { nombre: "Manchester City", escudo: "/images/mancity.png" , rank: "#4"},
        { nombre: "Bayern Munich", escudo: "/images/BayernMunchen.png" , rank: "#2"},
      ];
    
      let bombo2 = [
        { nombre: "Barcelona", escudo: "/images/Barcelona.webp" , rank: "#6"},
        { nombre: "Manchester United", escudo: "/images/ManchesterUnited.png" , rank: "#3"},
        { nombre: "Liverpool", escudo:"/images/Liverpool.png" , rank: "#18"},
      ];
      let bombo3 = [
        { nombre: "Inter", escudo:"/images/Internazionale.png" , rank: "#14"},
        { nombre: "Milan", escudo: "/images/Milan.png" , rank: "#23"},
        { nombre: "Dortmund", escudo: "/images/BorussiaDortmund.png" , rank: "#22"},
      ];
      let bombo4 = [
        { nombre: "Tottenham", escudo: "/images/Tottenham.png" , rank: "#7"},
        { nombre: "Newcastle", escudo: "/images/newcastlee.png" , rank: "#8"},
        { nombre: "Napoli", escudo:"/images/SSC_Neapel.svg.png", rank: "#11"},
      ];
      let bombo5 = [
        { nombre: "Roma", escudo: "/images/ASRoma.png", rank: "#28"},
        { nombre: "Arsenal", escudo: "/images/arsenalfc.png" , rank: "#15"},
        { nombre: "Atletico Madrid", escudo: "/images/AtleticoMadrid.png" , rank: "#26"},
      ];
      let bombo6 = [
        { nombre: "Sevilla", escudo: "/images/sevillaa.png", rank: "#12"},
        { nombre: "Valencia", escudo:  "/images/valenciafc.png" , rank: "#13"},
        { nombre: "Aston Villa", escudo:  "/images/AstonVilla.png", rank: "#10"},
      ];
      let bombo7 = [
        { nombre: "Zenit", escudo: "/images/Zenit.png", rank: "#21"},
        { nombre: "Lyon", escudo:  "/images/Lyon.png", rank: "#32"},
        { nombre: "Everton", escudo:  "/images/evertonfc.png" , rank: "#27"},
      ];
      let bombo8 = [
        { nombre: "Porto", escudo:"/images/oporto.png" , rank: "#9"},
        { nombre: "Benfica", escudo: "/images/Benfica.png" , rank: "#29"},
        { nombre: "Sporting Lisboa", escudo: "/images/SportingLisboa.png" , rank: "#24"},
      ];
      let bombo9 = [
        { nombre: "Villa Real", escudo: "/images/villar.png" , rank: "#17"},
        { nombre: "Wolfburgo", escudo:"/images/wolfburgo.png" , rank: "#31"},
        { nombre: "Galatasaray", escudo:"https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/109.png" , rank: "#30"},
      ];

      
  let franco: any = [];
  let gaston: any = [];
  let marcos: any = [];
  // Asignar un equipo aleatorio a cada arreglo
  function alear() {
    if (equipos.length === 0) {
      equipos = bombo2;
    }
    if (equipos.length === 0 && bombo2.length === 0) {
      equipos = bombo3;
    }

    if (equipos.length === 0 && bombo3.length === 0) {
      equipos = bombo4;
    }
    if (equipos.length === 0 && bombo4.length === 0) {
      equipos = bombo5;
    }
    if (equipos.length === 0 && bombo5.length === 0) {
      equipos = bombo6;
    }
    if (equipos.length === 0 && bombo6.length === 0) {
      equipos = bombo7;
    }
    if (equipos.length === 0 && bombo7.length === 0) {
      equipos = bombo8;
    }
    if (equipos.length === 0 && bombo8.length === 0) {
      equipos = bombo9;
    }
    while (equipos.length > 0) {
      // Generar un índice aleatorio dentro del rango de los equipos disponibles
      let indiceAleatorio = Math.floor(Math.random() * equipos.length);
      // Extraer el equipo aleatorio y agregarlo al arreglo correspondiente
      let equipoAleatorio = equipos.splice(indiceAleatorio, 1)[0];
      franco.push(equipoAleatorio);

      // Repetir el proceso para los otros arreglos
      indiceAleatorio = Math.floor(Math.random() * equipos.length);
      equipoAleatorio = equipos.splice(indiceAleatorio, 1)[0];
      gaston.push(equipoAleatorio);

      indiceAleatorio = Math.floor(Math.random() * equipos.length);
      equipoAleatorio = equipos.splice(indiceAleatorio, 1)[0];
      marcos.push(equipoAleatorio);
    }

    if (bombo9.length === 0) {
      marcos = [{ nombre: "Chelsea", escudo: "/images/Chelsea.png", rank: "#20" }, ...marcos];

      gaston = [{ nombre: "Juventus", escudo: "/images/da-removebg-preview.png", rank: "#16" }, ...gaston];

      franco = [{ nombre: "Paris Saint Germain", escudo: "/images/ParisSaintGermain.png", rank: "#1" }, ...franco];

      marcos.push({ nombre: "Lazio", escudo: "/images/laziofc.png" , rank: "#25"});

      let Gaston_Franco = Math.random() * 1;
      if (Gaston_Franco > 0.5) {
        gaston.push({ nombre: "Ajax", escudo: "/images/Ajax.png" });
      } else {
        franco.push({ nombre: "Ajax", escudo: "/images/Ajax.png" });
      }
      Franco(franco)
      Gaston(gaston)
      Marcos(marcos)

      return;
    }
    alear();
  }

  
  return (
    <div className={styles.container_all}>
      <div className={styles.container_head}>
        <div className={styles.container_title}>
          <h1>DREAM TEAM</h1>
          <div className={styles.container_btn}>
            <button onClick={()=> router.push("/draft")}>DRAFT</button>
            <button onClick={()=> alear()}>BOMBOS</button>
          </div>
        </div>
      </div>
      <div className={styles.container_main}>
    <div className={styles.container}>
            <h4>FRANCO</h4>
            {FrancoBombo.length &&
              FrancoBombo.map((equipo: any) => (
                <Picture key={equipo.nombre} name={equipo.nombre} img={equipo.escudo} />
              ))}
    </div>
    <div className={styles.container}>
            <h4>GASTON</h4>
           {GastonBombo.length &&
              GastonBombo.map((equipo: any) => (
                <Picture key={equipo.nombre} name={equipo.nombre} img={equipo.escudo} />
              ))}
    </div>
    <div className={styles.container}>
            <h4>MARCOS</h4>
           {MarcosBombo.length &&
              MarcosBombo.map((equipo: any) => (
                <Picture key={equipo.nombre} name={equipo.nombre} img={equipo.escudo} />
              ))}
    </div>
</div>
    </div>
  );
};

export default Azar;
