import { useEffect, useState } from "react";
import "./index.css";
import logo from "../../assets/bons-fluidos-110px.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Projeto Bons Fluidos - Entrar";
  }, []);

  return(
    <>
      <main className="loginStyle">
        <section>
          <div className="logoContainer">
            <img src={logo} alt="Logo Bons fluidos" />
          </div>
          <form method="POST" action="/home" className="loginFormContainer">
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder="Insira seu e-mail" />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" value={password} onChange={(evt) => setPassword(evt.target.value)} placeholder="Insira a sua senha" />
            </div>
            <div>
              <button type="submit" className="btnLoginStyle">Entrar</button>
            </div>
            <div>
              <p className="loginMessage">{message}</p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;