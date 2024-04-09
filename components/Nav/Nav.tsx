"use client";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import { useRouter } from "next/navigation";
import { data } from "@/models/games";
import { Data } from "@/app/types";
import Image from "next/image";
import { TeamList } from "../TeamList/TeamList";
import routes from "@/models/route.json";

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
    router.push(string);
  };
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
                  <TeamList
                    key={index}
                    handleShow={() => handleShow(`/details/${team.name}`)}
                    logo={team.logo}
                    name={team.name}
                  />
                ))}
              </div>
            )}
          </div>
          {routes.map((route, index) => (
            <span
              key={index}
              onClick={() => router.push(route.path)}
              className={styles.span1}
              onMouseEnter={handleMouseLeaveCor}
            >
              {route.label}
            </span>
          ))}
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
              {routes.map((route, index) => (
                <p key={index} onClick={() => rute(route.path)}>
                  {route.label}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

