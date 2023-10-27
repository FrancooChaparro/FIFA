import React from 'react';
import styles from "./News.module.css";

export const News = () => {
  return (
    <div className={styles.container_section}>
        <div className={styles.container_notice}>
            <div className={styles.container_image}><img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/04/01/3672957-74768068-2560-1440.jpg" alt="chelsea" /></div>
            <div className={styles.container_description}>
                <h3>CHELSEA NO LEVANTA CABEZA</h3>
                <p>
                El equipo de Marcos Aquino se hunde lentamente en la tabla de posiciones, actualmente se encuentra en tabla roja, con el puesto N°29. La gente pide un cambio en la forma de jugar, la gente ya no aguanta.
                </p>
            </div>
        </div>

        <div className={styles.container_notice}>
            <div className={styles.container_image}><img src="https://st1.uvnimg.com/f0/b8/159a38194e579b74a942b8c10008/gettyimages-1149331608.jpg" alt="Ajax" /></div>
            <div className={styles.container_description}>
                <h3>AJAX CAMPEON</h3>
                <p>
                Ajax goleo 3 a 0 al ARSENAL, y levanto su primer trofeo, se le acredito la posicion N°19.
                </p>
            </div>
        </div>

        <div className={styles.container_notice}>
            <div className={styles.container_image}><img src="https://as.com/futbol/imagenes/2009/11/24/mas_futbol/1259017253_740215_0000000001_noticia_grande.jpg" alt="Lyon" /></div>
            <div className={styles.container_description}>
                <h3>LYON A PROMOCION</h3>
                <p>
                 Lyon jugara la promocion, enfrentara a Genoa (ITA) o Real sociedad (ESP)
                </p>
            </div>
        </div>
    </div>
  )
}
