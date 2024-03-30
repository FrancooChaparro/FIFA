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
        { nombre: "Real Madrid", escudo: "/images/RealMadrid.png" , rank: "#15"},
        { nombre: "Manchester City", escudo: "/images/mancity.png" , rank: "#15"},
        { nombre: "Bayern Munich", escudo: "/images/BayernMunchen.png" , rank: "#15"},
      ];
    
      let bombo2 = [
        { nombre: "Barcelona", escudo: "/images/Barcelona.webp" , rank: "#15"},
        { nombre: "Manchester United", escudo: "/images/ManchesterUnited.png" , rank: "#15"},
        { nombre: "Liverpool", escudo:"/images/Liverpool.png" , rank: "#15"},
      ];
      let bombo3 = [
        { nombre: "Inter", escudo:"/images/Internazionale.png" , rank: "#15"},
        { nombre: "Milan", escudo: "/images/Milan.png" , rank: "#15"},
        { nombre: "Dortmund", escudo: "/images/BorussiaDortmund.png" , rank: "#15"},
      ];
      let bombo4 = [
        { nombre: "Tottenham", escudo: "/images/Tottenham.png" , rank: "#15"},
        { nombre: "Newcastle", escudo: "/images/newcastlee.png" , rank: "#15"},
        { nombre: "Napoli", escudo:"/images/SSC_Neapel.svg.png", rank: "#15"},
      ];
      let bombo5 = [
        { nombre: "Roma", escudo: "/images/ASRoma.png", rank: "#15"},
        { nombre: "Arsenal", escudo: "/images/arsenalfc.png" , rank: "#15"},
        { nombre: "Atletico Madrid", escudo: "/images/AtleticoMadrid.png" , rank: "#15"},
      ];
      let bombo6 = [
        { nombre: "Sevilla", escudo: "/images/sevillaa.png", rank: "#15"},
        { nombre: "Valencia", escudo:  "/images/valenciafc.png" , rank: "#15"},
        { nombre: "Aston Villa", escudo:  "/images/AstonVilla.png", rank: "#15"},
      ];
      let bombo7 = [
        { nombre: "Zenit", escudo: "/images/Zenit.png", rank: "#15"},
        { nombre: "Lyon", escudo:  "/images/Lyon.png", rank: "#15"},
        { nombre: "Everton", escudo:  "/images/evertonfc.png" , rank: "#15"},
      ];
      let bombo8 = [
        { nombre: "Porto", escudo:"/images/oporto.png" , rank: "#15"},
        { nombre: "Benfica", escudo: "/images/Benfica.png" , rank: "#15"},
        { nombre: "Sporting Lisboa", escudo: "/images/SportingLisboa.png" , rank: "#15"},
      ];
      let bombo9 = [
        { nombre: "Villa Real", escudo: "/images/villar.png" , rank: "#15"},
        { nombre: "PSV", escudo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAADIZJREFUaIHtmXlwVNeVxn/39aJudasloQUhgQQYIbOZRWACtvEYjCGYNQTKKcdkzKQmLkbOJMQbXlJ4xhkbDHE5OPE4dmYIGNvBjmLGBLPKbMIgA2YRQqAFWjvaoPe9z/whNQgwO1VTU8VX9areu+/d73znnnvPXR7cwR3cwW2DiKTJBSR0KU/oUp52O23qbxeRiCwCpgR8LjRNhyEu/gsRKex8/YNQwEs0GiHOnFAoIhuUUq/fDrvqdpBEo7IUos96HC00Vu9Hp9OTnjMMa2I6AG5HM832Q0QiYXr0HYklMQ3Q3tQ09dyt2tZulQBAKYqV0vA6Wzi2dSpHt0zG524HpUApfO52jm6ZzLGtU/E6W1BKQymKb4ft29KFlFLrRGRZSmbeM2l9n0WiYVKz8hDhBYDUrLw3UrJ/idL0pGTmASxTSq27HbZvGSJiFZGpURF7wOc6P1IDPvcV7l0SFbGLyFQRsf5fiR4sIm+JSJvcOlo7uQbdjJYbGsQi8hPgP4DMWFkkHKS14SSO5mrONR3D2byfkP8E3rPHsGXMQG9IxN22imgELCmzsaWPJKn7QBLT+5Ka2R+d3tjVRAPwolLqz7fVARGZBawBzADhkJ/66iNUHt5M1Lmb3sMLaKnZS1r2aAxxFgJeB46Wk/QeMgVXex32wx8xdOIrONtq8Toaaa39msz+36e+/HNAI3vwD8keOA69wRQz6QMeV0r97VrarpqFRMQgIiVAIWD2uto4sPEtdqx+DGWwUrj+K8bOfh8QbGl5ONqqQK9Db7HRUPUCTfVHCYS8RHRCXfVelNGI19NM9pDZKKXoOWAW0bAHTW9g58c/Zf+Xv8XnaqezoQpFZK+IGK6m8YoREJFRIlKilEKiEQ5sfhufsw7fuaOMnvVHindvh2iIZFMAV8MGVM1GEnwKY7tgcIBR+sLZahAgKZOQsYGgFQJpGbhtTWj9fkpy91FEAm4yen+PgOcsDSc24Gr9Oxm5/8qIR36O0nSICEqpe5VS31y3AyIyG/gMoLXhJHs+zmP41GK8zjO01x3EbE1lb1mY6RMeIHPwvXjOnsO1qxjX4iXEf7sLifFcwZgCooAzE85OAtewXHJG/Ruu1ip63zONUMBDadHzjJz2PqlZebHqs5VShZdQXj4PiMikmPiKA1/QWlOCyTYJszWFkN+Nq7WElD7Pk5PtIjkrFwBLchKW6Y+SMf1RzjU3E3E60en12BITEZEY72UNlSmgBETTaGgt5/TB35CWPYpw0Euc5S4ObX6Z7CHz6D9yGsBfRWSyUmrTFSMgIhlAI0D5vr/iczZh7ZZNJBLiyJezGTbtC/qPmEpNbT1Ol4N+d92FKS7uO2LY0fpOlwsFGAwGzCbTd353KU4eXE/ZV9MYPmUH0XAIZ2s1RnMSA743BxFQih5KqaYrOdAIZNRXlrD7z6N54B+/QdMbObT+ScZMXImte29UNMxHGzcyZ/x4/EqRkJ5+TVHhcBiPx4NSCp3LTZwCdHrQXZpDFDqDEWeznT0b5zBi5qe02g9xbMsTjP3xXnrmjgZoUkr1uLzFRApERAJel2z64ySpPrxZtn+8QP7nTcSeHie1IDUg1SBrXn9d6kEaVn94w7NWIBCQxuJiqVjwL1IBYu/ktXe5akHsNuTLFSPlq49+Ji115bLxP8eL3+uM0RR8lwMhEZHiwpek9uTXUn1ki2xd/ROp6iSs6bwql74pn4DUgTStW3dTU28MwUhEmnbvlpM/e0pOddqJ2aoFqQLZ9KfpUnV4szRUHZDdn70Qqxq6qAuJyCPAJr/nHOveSGbYtEJ87mYsEQs9kwcSlSgAep1GUXk5I7KzsRmNhHr0wNarF2vWfEhJSQk+n5/c3FwWLFhAMBjk179+hXfe+T0LFy5k3Lhx1NbWMn/+fAoKChARFi9eTE5ODgAejwdXSQkRn4/k9HRQCg2NuvZjhBPjaavZR1P5Uqb8oh2zNRlgklJqcywLTQewl21n1A830lZ/hKYTzzHtl5dnjjOlpXS///6OB78fgFAoxO9+t4KdO3eyaNELxMXFUVZ2jPT0dOx2Oy0tLZSWllJSso/58+ezZs1KHnvsifPiASwWC5aHHgLA5fUiImiaRj/zcNYtUwx48G+k9PyUmrLt5N07K6Z5c2wUPQjQXL0dpelJzxlF37F/uUy8NxAgo1evC90u2hGZ1NQ08vNHcN999yEipKWlYbFYWL58CadPnyY/P5/4+HjC4TDBYJBgUFi6dOll/DEkxMdjs1iwms243B5y/2ETUc2EyZrEmeptsc8evCBExC8isv7tNKmvKJFvd3wgh2Zc3PfrQHa99poUd96fgPN9ee7cuUJH5pQXX1x0vryoaJsAsnfvXtm6davMm/eEvPzyS7JkyRs3NWYqK8rls9+OjD364cJE1rnecFF54EM0cyLJ0YtbRQPKzGamAhHA/O67HVHxelm7di2lpaUMGtSxIi4qKsLlcpKYmASA1WohGo2watXq83WuBa/Ph/f0aYLHy2mv2k+l5Rv6DpiDIbI/9omxqwMeIEEfN4rsQTMRTeGd4MA6YzhRiaCUIiBCkt+H9YM/EQmFYPIkAFpaWli2bNl58QBGo5Hi4mJAsWPHDgYNGszp06dZsWIFI0aMwGw2XyQ2FArh8/kgHCZgt+MvLcV0phnNYMBsiENpZxn20IvodSbqjw+PVXPDhSy0C7h/77pXyRkyjXDQx5naA4yc+PPzRhqam2morWVkfj7uQADrFWbg64HT6eDCHCoYjXGYrjJTH9j2e7ql56HpDDScLGLMzFcBdiulHohFoAi4PzPvYb7d8Dgm20iC3lPIxAJU54q7eNcufjB7NgDRQACu0wFfOEw4HO7Y4AOaUthsidftrCDUHijA0f1xlGagb/6TsVdFcCECdwPHo9Ewm997gNwxizHGJ1C/fjn9GwcSMggbU5KYbq/DO+X7ZHV2n0sRAZyNjQSrqvAfPkxgyzYS+vZBb7F0WZoKEo2N+atDF9KoyDhK5rTnsNrS2fZeLrNfCaFpeoABSqlyPYBSqlxETmuavnevIQVoOj2WhHQaDYUkHCwkfuxi4p55FufCX5HTRbzT4SBw6hT+Y8fwF21H/usDYr1bB8QD4c7rRqEBLZPAPeJJfOeaiAYDDJiwOib+lFKqHLos5kRkHLADYMM7A7GmjseSnIvPU0tLbQrdWkMM/UUBgeNl+A8dJvBpIZaySlRmGiRYUfHm6+5WV4VS6KzdaA9vp3HuVLJ6T6DFvgdXyx4mP7Uz9tU4pdSuy+qKyN9FRNyOFvnyD2OkrmKf1BzfIW8uWSyVhzfeVO6+GVSf2CW7Pn9J7GU75Yz9qHz6KuJ2NMder780Ul2cV48CHostlXtnreb4jtdQxmR89UVE/C62rfwRXmfrrbfyFeB1tlK06gkctaX4244DcGTLK4z/50ostjQAt1Jq6kWaLyURkWQRaVdK4WqvZ8Oqp8noP5O0RI2Unvewc+VQeuW/Ro5lKAnnQDQQ1cF07WHZxWjnbkxFBVeSwu4+RGv1cvKnb8NzrpFQwMvxork8/FQ9tm6Zsb1xslLqXFeuy7aUSqmz0nEE3pDQLcsw5+lP2PPZM0Ss+YT8HqxpI+mV9zCNNfs5UF5At0pIPAIJ+zvIruWEomNQu/LBcQ+cuxt6jvlvsvqPR1N6zjaWE41EaK/bx4zng+h0BoCgUirrUvHfGYGuEJFvgWEAjacOsf/z4WQPfY+kjDySu9/F7k8mMfiR9/E4mzlZ8itM0e4Y205gdLejD4BeyyUaqiCqg7AJgpYUgin9IakPOQMfw2JNpXr/Krr3nYA1KYva45tos79N/vQievQ5P+MeUkoNv5LGax5sichCYHnsub6ihPLiZQTcR0jqMYusAZMxWbpx6lAh2UOm4nE0ojOY0HQGqg6upOfdM9EbTUQjESIhP4mpfSjb/gY5Q+dhSc7kxJ530ccl4XdWMmDcIrL6jepqfqFS6q2r6bvekzkTsAqYEyvzOlupr9hLbeknBH2n8LTuYdDEtbTXHyRnyAwcLdWc2PU4dz/4F0yWbjiaK9AZzOgNJir2/Ahbxj8RCbnJHvJjMvuN7vxncB5rgXlKqcC1tN3o2Wgi8O8i8rRSqkt5FGdbHY6WGryOJjyOekJ+ByJhopEgOr0JY3wqZmt3LEk9SEzNxpbaE6W0rtwopVYAryilHDei66YgIuNF5A8i0nQLKb+pk+Ohm9VxW34xAZqIjAVGAHlATyCBzjU7EARcQB1QDhxUSn1NxwHdHdzBHdzB/2P8L1k/xg/NINb/AAAAAElFTkSuQmCC" , rank: "#15"},
        { nombre: "Galatasaray", escudo:"https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/109.png" , rank: "#15"},
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
      marcos = [{ nombre: "Chelsea", escudo: "/images/Chelsea.png", rank: "#15" }, ...marcos];

      gaston = [{ nombre: "Juventus", escudo: "/images/da-removebg-preview.png", rank: "#15" }, ...gaston];

      franco = [{ nombre: "Paris Saint Germain", escudo: "/images/ParisSaintGermain.png", rank: "#15" }, ...franco];

      marcos.push({ nombre: "Lazio", escudo: "/images/laziofc.png" , rank: "#15"});

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
