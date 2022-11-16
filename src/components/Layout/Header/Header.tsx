import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.wrapper}>
      Logo
      <nav className={styles.navigation}>
        <Link href="/" className={styles.menuLink}>
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
