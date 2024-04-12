import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import { ContainerNews } from "@/components/ContainerNews/ContainerNews";
import { Ranking } from "@/components/Ranking/Ranking";
import { Accord } from "@/components/accord/Accord";

export default function Home() {

  return (
    <main className={styles.main}>
      <Banner />
      <ContainerNews />
      <Accord />
      <Ranking />
    </main>
  );
}
