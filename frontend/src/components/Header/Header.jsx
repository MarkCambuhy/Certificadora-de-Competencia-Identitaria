import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/bons-fluidos-30px.png";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        Bons Fluidos
      </div>
      <div className={styles.buttons}>
        <a href="#" id={styles.entrar}>
          Entrar
        </a>
        <a href="#" id={styles.cadastro}>
          Cadastre-se
        </a>
      </div>
    </header>
  );
};

export default Header;