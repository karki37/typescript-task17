import styles from "./navigation.module.css";
function Navigation() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navlist}>
          <li className={styles.navItem}>
            
            <a href="#">Home </a>
          </li>
          <li className={styles.navItem}>
            <a href="#">About </a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Contact </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;