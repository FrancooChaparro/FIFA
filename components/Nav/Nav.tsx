"use client";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { useRouter } from "next/navigation";
import { data } from "@/models/games";
import { Data } from "@/app/types";
import Image from "next/image";

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

  const handleShow = (param: string) => {
    setShowCor(false);
    router.push(param);
  };
  const handleShow2 = () => {
    setShowMenu(false);
    setShowBrowse(!showBrowse);
  };

  const rute = (string: string) => {
    setShowBrowse(!showBrowse);
    router.push(`/${string}`)
  }
  return (
    <div
      className={
        showBackground ? styles.containerAll : styles.containerAllOpacity
      }
    >
      <div className={styles.flex}>
        <div className={styles.containerLogo}>
          <Image
            src="/images/logo-ESPN.webp"
            alt="LogoNetflix"
            onClick={() => handleClick(0)}
            width={70}
            height={40}
            loading="eager"
          />
        </div>
        <div className={styles.containerInfo}>
          <span
            className={styles.span1}
            onClick={() => router.push("/")}
            onMouseEnter={handleMouseLeaveCor}
          >
            Home
          </span>
          <span className={styles.active} onMouseEnter={handleMouseEnterCor}>
            Teams
          </span>
          <div className={showCor ? styles.cor : styles.co}>
            {showCor && (
              <div
                className={styles.cor}
                onMouseEnter={handleMouseEnterCor}
                onMouseLeave={handleMouseLeaveCor}
              >
                {info.ranking.map((team, index) => (
                  <div
                    className={styles.container_picture}
                    key={index}
                    onClick={() => handleShow(`/details/${team.name}`)}
                  >
                    <div className={styles.container_picture_img}>
                      <Image
                        src={team.logo}
                        alt={team.name}
                        width={33}
                        height={33}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="/images/shield_blur.webp"
                      />
                    </div>
                    <div className={styles.container_picture_name}>
                      <span>{team.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <span
            onClick={() => router.push("/azar")}
            className={styles.span1}
            onMouseEnter={handleMouseLeaveCor}
          >
            Azar
          </span>
          <span
            onClick={() => router.push("/draft")}
            className={styles.span1}
            onMouseEnter={handleMouseLeaveCor}
          >
            Draft
          </span>
          <span
            onClick={() => router.push("/results")}
            className={styles.span1}
            onMouseEnter={handleMouseLeaveCor}
          >
            Finals & PopularMatchs
          </span>
          <span
            onClick={() => router.push("/user/franco")}
            className={styles.span1}
            onMouseEnter={handleMouseLeaveCor}
          >
            Franco
          </span>
          <span
            onClick={() => router.push("/user/gaston")}
            className={styles.span1}
            onMouseEnter={handleMouseLeaveCor}
          >
            Flaki
          </span>
          <span
            onClick={() => router.push("/user/marcos")}
            className={styles.span1}
            onMouseEnter={handleMouseLeaveCor}
          >
            Marcos
          </span>
        </div>

        <div className={styles.containerBrowse}>
          <span className={styles.btnBrowse} onClick={() => handleShow2()}>
            Menu
          </span>
          {showBrowse && (
            <div
              className={showBackground ? styles.Browse : styles.BrowseOpacity}
            >
              <p onClick={() => rute("")}>Home</p>
              <p onClick={() => rute("azar")}>Azar</p>
              <p onClick={() => rute("azar")}>Draft</p>
              <p onClick={()=> rute("results")}>
                Finals & PopularMatchs
              </p>
              <p onClick={() => rute("franco")}>Franco</p>
              <p onClick={() => rute("gaston")}>Flaki</p>
              <p onClick={() => rute("marcos")}>Marcos</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
