import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/bons-fluidos-30px.png";
import { Navigate } from "react-router-dom";

const Header = () => {
  const authenticated = false;

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <a href="/">Bons Fluidos</a>
      </div>
      <div className={styles.buttons}>
        {authenticated ? (
          <>
            <div className={styles.btnItem}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z"
                  stroke="#02867E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="/write" id={styles.entrar}>
                Escrever
              </a>
            </div>

            <div className={styles.btnItem}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#02867E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="/profile" id={styles.entrar}>
                Perfil
              </a>
            </div>
          </>
        ) : (
          <>
            <a href="/signin/identifier" id={styles.entrar}>
              Entrar
            </a>
            <a href="/signup/createaccount" id={styles.cadastro}>
              Cadastre-se
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
