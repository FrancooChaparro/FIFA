"use client";
import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";

import { useRouter } from "next/navigation";

const Banner = () => {
  const [num, setNum] = useState<number>(1);
  const news = [
    {
      noticeDescription:
        "El equipo de Marcos Aquino se hunde lentamente en la tabla de posiciones, actualmente se encuentra en tabla roja, con el puesto N°23. La gente pide un cambio en la forma de jugar, la gente ya no aguanta.",
      noticeImage:
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/04/01/3672957-74768068-2560-1440.jpg",
      noticeTitle: "CHELSEA NO LEVANTA CABEZA",
    },
    {
      noticeDescription:
        "Juventus gano la primera copa, Tras vencer 2 a 1 al Liverpool; el equipo comandado por Gaston Chaparro mostro caracter en el torneo.",
      noticeImage: "tevez",
      noticeTitle: "¡JUVENTUS GANA LA PRIMERA!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (num === 2) {
        setNum(0);
      } else {
        setNum((num) => num + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [num]);

  const poster = news[num];

  return (
    <div className={styles.ContainerBackground}>
      <img
        src={
          "https://st1.uvnimg.com/f0/b8/159a38194e579b74a942b8c10008/gettyimages-1149331608.jpg"
        }
        alt="logo"
        className={styles.background}
      />
      <div className={styles.containerData}>
        <p className={styles.title}>AJAX CAMPEON</p>
        <p className={styles.description}>
          Ajax goleo 3 a 0 al ARSENAL, y levanto su primer trofeo, se le acredito la posicion N°19.
        </p>
      </div>
    </div>
  );
};

export default Banner;
