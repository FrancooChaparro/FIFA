import React from 'react';
import styles from "./Ranking.module.css";
import { Picture } from '../Picture/Picture';
import { data } from '@/models/games';
import { Data } from '@/app/types';

export const Ranking = () => {
  const info: Data = data;

  return (
    <div className={styles.containerAll}>
        <div className={styles.containerTableGreen}>
          {
            info.ranking.map((team) => (
              <Picture out={true} name={team.name} titles={team.titles} img={team.logo} rank={team.rank}/>
            )).slice(0,10)
          }
        </div>

        <div className={styles.containerTableYellow}>
        {
            info.ranking.map((team) => (
              <Picture out={true} name={team.name} titles={team.titles} img={team.logo} rank={team.rank}/>
            )).slice(10,20)
          }
        </div>

        <div className={styles.containerTableRed}>
        {
            info.ranking.map((team) => (
              <Picture out={true} name={team.name} titles={team.titles} img={team.logo} rank={team.rank}/>
            )).slice(20,30)
          }
          {
            info.ranking.map((team) => (
              <Picture out={false} name={team.name} titles={team.titles} img={team.logo} rank={team.rank}/>
            )).slice(30,32)
          }
        </div>
    </div>
  )
}
