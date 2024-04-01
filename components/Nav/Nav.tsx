"use client";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { useRouter } from 'next/navigation';
import { data } from '@/models/games';
import { Data } from '@/app/types';


export const Nav = () => {
  const info: Data = data;
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showBrowse, setShowBrowse] = useState<boolean>(false);
  const TOP_OFFSET = 66;
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [showCor, setShowCor] = useState(false); 

  
  const handleMouseEnterCor = () => {
    setShowCor(true);
  };

  const handleMouseLeaveCor = () => {
    setShowCor(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (topp: number) => {
    window.scrollTo({
      top: topp,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleShow = () => { 
    setShowMenu(!showMenu)
    setShowBrowse(false)
  }
  const handleShow2 = () => { 
    setShowMenu(false)
    setShowBrowse(!showBrowse)
  }

  return (
    <div
      className={
        showBackground ? styles.containerAll : styles.containerAllOpacity
      }
    >
      <div className={styles.flex}>
        <div className={styles.containerLogo}>
          <img src="/images/logo-ESPN.png" alt="LogoNetflix" onClick={() => handleClick(0)}/>
        </div>
        <div className={styles.containerInfo}>
          <span className={styles.span1} onClick={()=> router.push("/")}>Home</span>
          <span className={styles.active} onMouseEnter={handleMouseEnterCor} >Teams</span>
          <div className={showCor ? styles.cor: styles.co}>
          {showCor && (
            <div className={ styles.cor} onMouseEnter={handleMouseEnterCor} 
            onMouseLeave={handleMouseLeaveCor} >
              {info.ranking.map((team, index) => (
                <div className={styles.container_picture} key={index} onClick={()=> router.push(`/details/${team.name}`)}>
                  <div className={styles.container_picture_img}><img src={team.logo} alt={team.name} /></div>
                  <div className={styles.container_picture_name}><span>{team.name}</span></div>
                </div>
              )).slice(0, 38)}
            </div>
          )}
          </div>
          <span onClick={()=> router.push("/azar")} className={styles.span1}>Azar</span>
          <span onClick={()=> router.push("/draft")} className={styles.span1}>Draft</span>
          <span onClick={()=> router.push("/results")} className={styles.span1}>Finals & PopularMatchs</span>
          <span onClick={()=> router.push("/franco")} className={styles.span1}>Franco</span>
          <span onClick={()=> router.push("/gaston")} className={styles.span1}>Flaki</span>
          <span onClick={()=> router.push("/marcos")} className={styles.span1}>Marcos</span>
        </div>

        <div className={styles.containerBrowse}>
          <span
            className={styles.btnBrowse}
            onClick={() => handleShow2()}
          >
            Menu
          </span>
          {showBrowse && (
            <div
              className={showBackground ? styles.Browse : styles.BrowseOpacity}
            >
              <p onClick={()=> router.push("/")}>Home</p>
              <p onClick={()=> router.push("/azar")}>Azar</p>
              <p onClick={()=> router.push("/draft")}>Draft</p>
              <p onClick={()=> router.push("/results")}>Finals & PopularMatchs</p>
              <p onClick={()=> router.push("/franco")}>Franco</p>
              <p onClick={()=> router.push("/gaston")}>Flaki</p>
              <p onClick={()=> router.push("/marcos")}>Marcos</p>
           </div>
          )}
        </div>
      </div>
      </div>
  );
};
