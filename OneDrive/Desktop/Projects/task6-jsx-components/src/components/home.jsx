import styles from "./home.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <h2> Welcome to the e-commerce- Amazon</h2>
      <br />
      <p>
      Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994. Initially an online marketplace for books, it has expanded into a multitude of product categories, a strategy that has earned it the moniker The Everything Store.[8] It has multiple subsidiaries including Amazon Web Services (cloud computing), Zoox (autonomous vehicles), Kuiper Systems (satellite Internet), and Amazon Lab126 (computer hardware R&D). Its other subsidiaries include Ring, Twitch, IMDb, and Whole Foods Market. Its acquisition of Whole Foods in August 2017 for US$13.4 billion substantially increased its footprint as a physical retailer.
      </p>
      <br />
      <p>
      Amazon also distributes a variety of downloadable and streaming content through its Amazon Prime Video, MGM+, Amazon Music, Twitch, and Audible units. It publishes books through its publishing arm, Amazon Publishing, film and television content through Amazon MGM Studios, including the Metro-Goldwyn-Mayer studio which acquired in March 2022. It also produces consumer electronics—most notably, Kindle e-readers, Echo devices, Fire tablets, and Fire TVs.
      </p>
    </div>
  );
}

export default Home;