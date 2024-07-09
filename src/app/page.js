import Image from "next/image";
import styles from "./page.module.css";

import Button from "./components/button/button.js"; 

export default function Home() {
  return (
    <div className={styles.teste}>
      <h1 className={styles.text}>Olá, mundo!</h1>

      <div className={styles.button}>
        <Button> click aqui</Button>

      </div>

      <div className={styles.button}>
        <Button> aqui tambem</Button>

      </div>

    </div>
  );
}
