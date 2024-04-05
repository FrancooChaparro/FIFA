"use client"
import React from 'react';
import styles from "./ContainerNews.module.css";
import { useRef } from "react";
import { News } from "@/components/News/News";
import { ContainerNewsHeader } from '../ContainerNewsHeader/ContainerNewsHeader';

export const ContainerNews = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
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
    <ContainerNewsHeader
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
      />
    <div ref={carouselRef} className={styles.container_news_footer}>
      <News />
    </div>
  </div>
  )
}