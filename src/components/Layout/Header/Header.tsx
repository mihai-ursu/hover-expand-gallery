import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.wrapper}>
      <h1>Logo</h1>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.menuLink}>
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
