import React from 'react';
import styles from "./News.module.css";
import { data } from '@/models/games';
import { Data } from '@/app/types';
import Image from 'next/image';

export const News = () => {
    const info: Data = data;
  return (
    <>
         {
        info.new.map((notice, index) => (
          <div key={index}>
            <div  className={styles.container_notice}>
                <div className={styles.container_image}>
                    <Image 
                    src={notice.image} 
                    alt={notice.alt}
                    width={176}
                    height={350}
                    objectFit='cover'
                    />
                    {/* <img src={notice.image} alt={notice.alt} /> */}
                </div>
                <div className={styles.container_description}>
                    <h3>{notice.title}</h3>
                    <p>{notice.description}</p>
                </div>
            </div>
            </div>
        ))
      }  
      </> 
  )
}
