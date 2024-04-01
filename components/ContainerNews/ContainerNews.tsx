"use client"
import React from 'react';
import styles from "./ContainerNews.module.css";
import { useRef } from "react";
import { News } from "@/components/News/News";

export const ContainerNews = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const izq = "<";
    const handleScrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: -425,
          behavior: "smooth",
        });
      }
    };
    const handleScrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 425,
          behavior: "smooth",
        });
      }
    };
  return (
    <div className={styles.container_news}>
    <div className={styles.container_news_header}>
      <h1>BREAKING NEWS</h1>
      <div className={styles.container_buttons}>
        <button
          className={styles.buttons}
          onClick={() => handleScrollLeft()}
        >
          <div className={styles.icons}>
            <img src="/icon.svg" alt="home" />
          </div>
        </button>
        <button
          className={styles.buttons}
          onClick={() => handleScrollRight()}
        >
          <div className={styles.icons}>
            <img src="/icon2.svg" alt="home" />
          </div>
        </button>
      </div>
    </div>
    <div ref={carouselRef} className={styles.container_news_footer}>
      <News />
    </div>
  </div>
  )
}