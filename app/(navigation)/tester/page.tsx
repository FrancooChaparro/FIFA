"use client"
import React from "react";
import styles from "./tester.module.css";
import { Team } from "@/app/types";
import { useMyContext } from "@/context/ListContext"
import { useRouter } from "next/navigation";
import { Picture } from "@/components/Picture/Picture";

const Tester = () => {
  const { Franco, FrancoBombo, Marcos, MarcosBombo, Gaston, GastonBombo, Roma, RomaBombo } = useMyContext();
  const router = useRouter()
 
    let equipos: Array<Team> = [
        { nombre: "Real Madrid", escudo: "/images/RealMadrid.png" , rank: "#5"},
        { nombre: "Manchester City", escudo: "/images/mancity.png" , rank: "#4"},
        { nombre: "Bayern Munich", escudo: "/images/BayernMunchen.png" , rank: "#2"},
        { nombre: "Barcelona", escudo: "/images/Barcelona.webp" , rank: "#6"},
      ];
    
      let bombo2 = [
        { nombre: "Manchester United", escudo: "/images/ManchesterUnited.png" , rank: "#3"},
        { nombre: "Liverpool", escudo:"/images/Liverpool.png" , rank: "#19"},
        { nombre: "Inter", escudo:"/images/Internazionale.png" , rank: "#15"},
        { nombre: "Dortmund", escudo: "/images/BorussiaDortmund.png" , rank: "#22"},

      ];
      let bombo3 = [
        { nombre: "Milan", escudo: "/images/Milan.png" , rank: "#23"},
        { nombre: "Tottenham", escudo: "/images/Tottenham.png" , rank: "#7"},
        { nombre: "Arsenal", escudo: "/images/arsenalfc.png" , rank: "#16"},
        { nombre: "Newcastle", escudo: "/images/newcastlee.png" , rank: "#8"},


      ];
      let bombo4 = [
        { nombre: "Napoli", escudo:"/images/SSC_Neapel.svg.png", rank: "#13"},
        { nombre: "Roma", escudo: "/images/ASRoma.png", rank: "#29"},
        { nombre: "Aston Villa", escudo:  "/images/AstonVilla.png", rank: "#12"},
        { nombre: "Porto", escudo:"/images/oporto.png" , rank: "#9"},

      ];

      let bombo5 = [
        { nombre: "Sevilla", escudo: "/images/sevillaa.png", rank: "#11"},
        { nombre: "Bayern 04 Leverkusen", escudo:  "/images/bayern04.png" , rank: "#32"},
        { nombre: "Zenit", escudo: "/images/Zenit.png", rank: "#21"},
        { nombre: "Valencia", escudo:  "/images/valenciafc.png" , rank: "#14"},
      ];
      

      let bombo6 = [
        { nombre: "Benfica", escudo: "/images/Benfica.png" , rank: "#25"},
        { nombre: "Sporting Lisboa", escudo: "/images/SportingLisboa.png" , rank: "#26"},
        { nombre: "Everton", escudo:  "/images/evertonfc.png" , rank: "#28"},
        { nombre: "Lazio", escudo: "/images/laziofc.png" , rank: "#24"}

      ];

      let bombo7 = [
        { nombre: "Villa Real", escudo: "/images/villar.png" , rank: "#18"},
        { nombre: "Wolfburgo", escudo:"/images/wolfburgo.png" , rank: "#30"},
        { nombre: "Lyon", escudo:  "/images/Lyon.png", rank: "#31"},
        { nombre: "Ajax", escudo: "/images/Ajax.png", rank: "#20" }
      ];

      
  let franco: any = [];
  let gaston: any = [];
  let marcos: any = [];
  let roma: any = [];

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

    while (equipos.length > 0) {
      
      let indiceAleatorio
      let equipoAleatorio
      // Generar un índice aleatorio dentro del rango de los equipos disponibles

        indiceAleatorio = Math.floor(Math.random() * equipos.length);
        // Extraer el equipo aleatorio y agregarlo al arreglo correspondiente
        equipoAleatorio = equipos.splice(indiceAleatorio, 1)[0];
        marcos.push(equipoAleatorio);
      


      // Repetir el proceso para los otros arreglos
      indiceAleatorio = Math.floor(Math.random() * equipos.length);
      equipoAleatorio = equipos.splice(indiceAleatorio, 1)[0];
      gaston.push(equipoAleatorio);

      indiceAleatorio = Math.floor(Math.random() * equipos.length);
      equipoAleatorio = equipos.splice(indiceAleatorio, 1)[0];
      franco.push(equipoAleatorio);

      
      indiceAleatorio = Math.floor(Math.random() * equipos.length);
      equipoAleatorio = equipos.splice(indiceAleatorio, 1)[0];
      roma.push(equipoAleatorio);
    }

    if (bombo7.length === 0) {

      marcos = [{ nombre: "Chelsea", escudo: "/images/Chelsea.png", rank: "#10" }, ...marcos];

      gaston = [{ nombre: "Juventus", escudo: "/images/da-removebg-preview.png", rank: "#17" }, ...gaston];

      franco = [{ nombre: "Paris Saint Germain", escudo: "/images/ParisSaintGermain.png", rank: "#1" }, ...franco];
      
      roma = [{ nombre: "Atletico Madrid", escudo: "/images/AtleticoMadrid.png" , rank: "#27"}, ...roma];

      // marcos.push();

      Franco(franco)
      Gaston(gaston)
      Marcos(marcos)
      Roma(roma)

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
            <button onClick={()=> router.push("/newDraft")}>DRAFT</button>
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
            <h4>ROMA</h4>
            {RomaBombo.length &&
              RomaBombo.map((equipo: any) => (
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

export default Tester;
