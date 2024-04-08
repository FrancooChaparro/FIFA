"use client";
import { useEffect, useState } from "react";
import styles from "@/app/(navigation)/franco/franco.module.css";
import { data, History } from "@/models/games";
import { Rank, Match } from "@/app/types";
import { useRouter } from "next/navigation";
import { ResultFinals } from "@/components/ResultFinals/ResultFinals";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const [teamID, setTeamID] = useState<Rank>();
  const [finales, setFinales] = useState<Match[]>();
  const AllTeams: Array<Rank> | [] = data.ranking;
  const Finals: Array<Match> | [] = History.Games;
  const router = useRouter();

  useEffect(() => {
    const param = async () => {
      const team = AllTeams.find(
        (e) => e.name.toLowerCase() === decodeURI(params.slug.toLowerCase())
      );
      if (team) {
        const fi = Finals.filter(
          (e) => team.name === e.LocalNombre || team.name === e.VisitanteNombre
        );
        setFinales(fi);
        setTeamID(team);
      } else {
        router.push("/");
      }
    };
  
    param();
    // eslint-disable-next-line
  }, [params.slug]);

  if (teamID === undefined) {
    return (
      <div className={styles.containerSpinner}>
        <div className={styles.spinner} />
      </div>
    );
  }

  const titles = teamID.titles;
  const finalsLength = finales?.length || 0;
  const por = (100 / (titles + (finalsLength - titles))) * titles;

  return (
    <div className={styles.container_all}>
      <div className={styles.container_poster}>
        <Image
          src="/images/portada.webp"
          alt="poster"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur" 
          blurDataURL="/images/portada_blur.webp"
          loading="lazy"
        />
        <div className={styles.photo}>
          <Image
            src={`${teamID?.logo}`}
            alt={teamID?.name.slice(0, 3)}
            width={144}
            height={144}
            placeholder="blur" 
            blurDataURL="/images/shield_blur.webp"
            loading="lazy"
          />
        </div>
        <div className={styles.container_rank}>
          <div className={styles.container_rank_number}>
            <span>Rank #{teamID?.rank}</span>
          </div>
          <div className={styles.container_image}>
            <img src={`${teamID?.logo}`} alt={teamID?.name.slice(0, 3)} />
          </div>
        </div>
      </div>
      <div className={styles.container_info}>
        <h4>{teamID?.name}</h4>
        <h4>{teamID?.titles} Titulos</h4>
        <div className={styles.section}>
          <div className={styles.containerData2}>
            <div className={styles.top}>
              <span>EFECTIVIDAD FINALES</span>
            </div>
            <div className={styles.bot}>
              <span style={{ color: Math.round(por) > 50 ? "green" : "red" }}>
                {Math.round(por)}%
              </span>
              <span style={{ color: "green" }}>{teamID.titles}</span>
              <span style={{ color: "red" }}>{finalsLength - titles}</span>
            </div>
          </div>
        </div>
        <div className={styles.containerGames}>
          {finales?.length ? (
            finales.map((game, index) => (
              <ResultFinals
                key={index}
                Player1={game.Player1}
                Player2={game.Player2}
                Result={game.Result}
                LocalEscudo={game.LocalEscudo}
                LocalNombre={game.LocalNombre}
                LocalResultado={game.LocalResultado}
                VisitanteEscudo={game.VisitanteEscudo}
                VisitanteNombre={game.VisitanteNombre}
                VisitanteResultado={game.VisitanteResultado}
              />
            ))
          ) : (
            <h3>No tiene finales</h3>
          )}
        </div>
      </div>
    </div>
  );
}
