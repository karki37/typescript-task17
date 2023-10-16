import styles from "./header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="amazon_logo.png"
            className={styles.logo}
          />
        </div>
        <h1 className={styles.title}>Amazon</h1>
      </header>
    </>
  );
}

export default Header;