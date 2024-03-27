"use client";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import { News } from "@/components/News/News";
import { Ranking } from "@/components/Ranking/Ranking";
import { useRef } from "react";
import icon from "@/public/icon.svg";

export default function Home() {
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
    <main className={styles.main}>
      <Banner />
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
      <Ranking />
    </main>
  );
}
