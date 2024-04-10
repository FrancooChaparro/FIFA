import React from 'react';
import styles from "../Nav/Nav.module.css";
import Image from 'next/image';

interface MyPropsCard {
    logo: string;
    name: string;
    handleShow: (string: string)=> void;
  }


export const TeamList: React.FC<MyPropsCard> = ({  logo, name, handleShow}) => {
  return (
    <div
    className={styles.container_picture}
    onClick={() => handleShow(`/details/${name}`)}
  >
    <div className={styles.container_picture_img}>
      <Image
        src={logo}
        alt={name}
        width={33}
        height={33}
        loading="lazy"
        // placeholder="blur"
        // blurDataURL="/images/shield_blur.webp"
      />
    </div>
    <div className={styles.container_picture_name}>
      <span>{name}</span>
    </div>
  </div>
  )
}
