"use client";
import { useEffect, useState } from "react";
import styles from "@/app/(navigation)/franco/franco.module.css";
import { data, History } from "@/models/games";
import { Externals, Data, Rank, Match } from "@/app/types";
import { useRouter } from "next/navigation";
import { ResultFinals } from "@/components/ResultFinals/ResultFinals";

export default function Page({ params }: { params: { slug: string } }) {
  const [teamID, setTeamID] = useState<Rank>();
  const [finales, setFinales] = useState<Match[]>();
  const AllTeams: Array<Rank> | [] = data.ranking;
  const Finals: Array<Match> | [] = History.Games;
  const router = useRouter();

  const param = async () => {
    const team = AllTeams.find(
      (e) =>
        e.name.toLocaleLowerCase().slice(0, 4) ===
        params.slug.toLocaleLowerCase().slice(0, 4)
    );
    if (team) {
      const fi = Finals.filter(e => team.name === e.LocalNombre || team.name === e.VisitanteNombre)
      setFinales(fi)
      console.log(fi);   
      setTeamID(team);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
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
  console.log(teamID);
  console.log(finales);   

  return (
    <div className={styles.container_all}>
      <div className={styles.container_poster}>
        <img
          src="https://i.pinimg.com/originals/40/ce/31/40ce311eb0519c5bd50410ec957dfd0e.jpg"
          alt="poster"
        />
        <div className={styles.photo}>
          <img src="/images/Marcos.jpg" alt="marcos" />
        </div>

        <div className={styles.container_rank}>
          <div className={styles.container_rank_number}>
            <span>Rank #{teamID?.rank}</span>
          </div>
          <div className={styles.container_image}>
            <img src={`/${teamID?.logo}`} alt={teamID?.name.slice(0,3)} />
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
              <span style={{ color: "red" }}>#</span>
              <span style={{ color: "green" }}>#</span>
              <span style={{ color: "red" }}>#</span>
            </div>
          </div>
    

        </div>
          <div className={styles.containerGames}>
        {finales?.length ? finales.map((game, index) => (
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
        )): 
        <h3>No tiene finales</h3>
        
        }
      </div>
      </div>
    </div>
  );
}
