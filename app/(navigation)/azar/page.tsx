"use client"
import React from "react";
import styles from "./azar.module.css";
import { Nav } from "@/components/Nav/Nav";
import { Team } from "@/app/types";
import { useMyContext } from "@/context/ListContext"
import { useRouter } from "next/navigation";

const Azar = () => {
  const { Franco, FrancoBombo, Marcos, MarcosBombo, Gaston, GastonBombo } = useMyContext();
  const router = useRouter()
 
    let equipos: Array<Team> = [
        { nombre: "Real Madrid", escudo: "/images/RealMadrid.png" },
        { nombre: "Manchester City", escudo: "/images/ManchesterCity.png" },
        { nombre: "Bayern Munich", escudo: "/images/BayernMunchen.png" },
      ];
    
      let bombo2 = [
        { nombre: "Barcelona", escudo: "/images/Barcelona.webp" },
        { nombre: "Manchester United", escudo: "/images/ManchesterUnited.png" },
        { nombre: "Liverpool", escudo:"/images/Liverpool.png" },
      ];
      let bombo3 = [
        { nombre: "Inter", escudo:"/images/Internazionale.png" },
        { nombre: "Milan", escudo: "/images/Milan.png" },
        { nombre: "Dortmund", escudo: "/images/BorussiaDortmund.png" },
      ];
      let bombo4 = [
        { nombre: "Tottenham", escudo: "/images/Tottenham.png" },
        { nombre: "Newcastle", escudo: "/images/Newcastle.png" },
        { nombre: "Napoli", escudo:"/images/SSC_Neapel.svg.png"},
      ];
      let bombo5 = [
        { nombre: "Roma", escudo: "/images/ASRoma.png"},
        { nombre: "Arsenal", escudo: "/images/Arsenal.jpg" },
        { nombre: "Atletico Madrid", escudo: "/images/AtleticoMadrid.png" },
      ];
      let bombo6 = [
        { nombre: "Sevilla", escudo: "/images/Sevilla.webp"},
        { nombre: "Valencia", escudo:  "/images/Valencia.jpg" },
        { nombre: "Aston Villa", escudo:  "/images/AstonVilla.png"},
      ];
      let bombo7 = [
        { nombre: "Zenit", escudo: "/images/Zenit.png"},
        { nombre: "Lyon", escudo:  "/images/Lyon.png"},
        { nombre: "Everton", escudo:  "/images/Everton.png" },
      ];
      let bombo8 = [
        { nombre: "Porto", escudo:"/images/Porto.jpg" },
        { nombre: "Benfica", escudo: "/images/Benfica.png" },
        { nombre: "Sporting Lisboa", escudo: "/images/SportingLisboa.png" },
      ];
      let bombo9 = [
        { nombre: "Villa Real", escudo: "/images/VillaReal.webp" },
        { nombre: "PSV", escudo:"https://w7.pngwing.com/pngs/258/642/png-transparent-psv-eindhoven-hd-logo.png" },
        { nombre: "Galatasaray", escudo:"https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/109.png" },
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
      marcos = [{ nombre: "Chelsea", escudo: "/images/Chelsea.png" }, ...marcos];

      gaston = [{ nombre: "Juventus", escudo: "/images/Juventus.jpg" }, ...gaston];

      franco = [{ nombre: "Paris Saint Germain", escudo: "/images/ParisSaintGermain.png" }, ...franco];

      marcos.push({ nombre: "Lazio", escudo: "/images/Lazio.png" });

      let Gaston_Franco = Math.random() * 1;
      if (Gaston_Franco > 0.5) {
        gaston.push({ nombre: "Ajax", escudo: "/images/Ajax.png" });
      } else {
        franco.push({ nombre: "Ajax", escudo: "/images/Ajax.png" });
      }
      Franco(franco)
      Gaston(gaston)
      Marcos(marcos)

      const jsonDataFranco = JSON.stringify(franco);
      localStorage.setItem('franco_data', jsonDataFranco);
      const jsonDataMarcos = JSON.stringify(marcos);
      localStorage.setItem('marcos_data', jsonDataMarcos);
      const jsonDataGaston = JSON.stringify(gaston);
      localStorage.setItem('gaston_data', jsonDataGaston);
      return;
    }
    alear();
  }
  const storedDataFranco: any = localStorage.getItem('franco_data');
  const storedDataMarcos: any = localStorage.getItem('marcos_data');
  const storedDataGaston: any = localStorage.getItem('gaston_data');

  const retrievedDataFranco = JSON.parse(storedDataFranco);
  const retrievedDataMarcos = JSON.parse(storedDataMarcos);
  const retrievedDataGaston = JSON.parse(storedDataGaston);
  
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
            <h4>Franco</h4>
            {retrievedDataFranco.length &&
              retrievedDataFranco.map((equipo: any) => (
                <span key={equipo.nombre}>{equipo.nombre}</span>
              ))}
    </div>
    <div className={styles.container}>
            <h4>Gaston</h4>
           {retrievedDataGaston.length &&
              retrievedDataGaston.map((equipo: any) => (
                <span key={equipo.nombre}>{equipo.nombre}</span>
              ))}
    </div>
    <div className={styles.container}>
            <h4>Marcos</h4>
           {retrievedDataMarcos.length &&
              retrievedDataMarcos.map((equipo: any) => (
                <span key={equipo.nombre}>{equipo.nombre}</span>
              ))}
    </div>
</div>
    </div>
  );
};

export default Azar;
