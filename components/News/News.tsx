import React from "react";
import styles from "./News.module.css";
import { data } from "@/models/games";
import { Data } from "@/app/types";
import Image from "next/image";

export const News = () => {
  const info: Data = data;
  return (
    <>
      {info.new.map((notice, index) => (
        <div key={index}>
          <div className={styles.container_notice}>
            <div className={styles.container_image}>
              {/* <img src={notice.image} alt={notice.alt} /> */}
              <Image
                src={notice.image}
                alt={notice.alt}
                layout="fill"
                objectFit="cover"
                style={{
                  filter: "brightness(110%)",
                  objectPosition: "center",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </div>
            <div className={styles.container_description}>
              <h3>{notice.title}</h3>
              <p>{notice.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
