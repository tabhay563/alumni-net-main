import React from "react";
import MostPopularCard from "../../components/Cards/Mostpopular";
import Navigation from "../../components/reusables/Navigation";
import styles from "../../styles/PageStyles/Explore.module.scss";

import { CgSearch } from "react-icons/cg"

export default function Chat() {
  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.searchbox}>
          <button className={styles.search_submit}>
                <CgSearch />
          </button>
          <input className={styles.search_input} placeholder="Search College"/>
        </div>

        <div className={styles.popular_colleges}>
          <h2>Most Popular Colleges</h2>
          <div className={styles.card_container}>
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
          </div>
        </div>

        <div className={styles.active_colleges}>
          <h2>Most Active Colleges</h2>
          <div className={styles.card_container}>
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
            <MostPopularCard />
          </div>
        </div>
      </div>
    </>
  );
}
