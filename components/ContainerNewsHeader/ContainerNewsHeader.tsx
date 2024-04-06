import React from 'react'
import styles from "../ContainerNews/ContainerNews.module.css";
import Image from 'next/image';

interface ContainerNewsHeaderProps {
  handleScrollLeft: () => void;
  handleScrollRight: () => void;
}

export const ContainerNewsHeader: React.FC<ContainerNewsHeaderProps> = ({
  handleScrollLeft,
  handleScrollRight
}) => {
  return (
    <div className={styles.container_news_header}>
      <h1>BREAKING NEWS</h1>
      <div className={styles.container_buttons}>
        <button className={styles.buttons} onClick={handleScrollLeft}>
          <div className={styles.icons}>
            <Image src="/icon.svg" alt="home" width={28} height={28} loading='lazy'/>
          </div>
        </button>
        <button className={styles.buttons} onClick={handleScrollRight}>
          <div className={styles.icons}>
            <Image src="/icon2.svg" alt="home" width={28} height={28} loading='lazy'/>
          </div>
        </button>
      </div>
    </div>
  );
};

