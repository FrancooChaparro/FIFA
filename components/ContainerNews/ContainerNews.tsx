"use client"
import React, { useCallback } from 'react';
import styles from "./ContainerNews.module.css";
import { useRef } from "react";
import { News } from "@/components/News/News";
import { ContainerNewsHeader } from '../ContainerNewsHeader/ContainerNewsHeader';

export const ContainerNews = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    
    const handleScroll = useCallback(
      (scrollByValue: number) => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({
            left: scrollByValue,
            behavior: "smooth",
          });
        }
      },
      [carouselRef]
    );
  
    const handleScrollLeft = useCallback(() => {
      handleScroll(-425);
    }, [handleScroll]);
  
    const handleScrollRight = useCallback(() => {
      handleScroll(425);
    }, [handleScroll]);
  
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