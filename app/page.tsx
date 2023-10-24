import { Nav } from '@/components/Nav/Nav'
import styles from './page.module.css'
import Banner from '@/components/Banner/Banner'
import { News } from '@/components/News/News'
import { Ranking } from '@/components/Ranking/Ranking'

export default function Home() {
  return (
    <main className={styles.main}>
       <Nav />
       <Banner />
        <h1 style={{padding: "2rem"}}>BREAKING NEWS</h1>
        <News />
        <h1 style={{padding: "2rem"}}>POWER RANKING</h1>
        <Ranking />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </main>
  )
}
