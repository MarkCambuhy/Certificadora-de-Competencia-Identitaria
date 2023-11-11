import { useEffect, useState } from "react";
import "./index.css";
import logo from "../../assets/bons-fluidos-110px.png";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlingRegistration = async (evt) => {
    
  }

  useEffect(() => {
    document.title = "Projeto Bons Fluidos - Cadastre-se";
  }, []);
  
  return(
    <>
      <main className="registrationStyle">
        <section>
          <div className="logoContainer">
            <img src={logo} alt="Logo Bons fluidos" />
          </div>
          <form method="POST" action="/signin/identifier" className="formContainer">
            <div>
              <label htmlFor="firstName">Nome:</label>
              <input type="text" id="firstName" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} placeholder="Insira o primeiro nome" />
            </div>
            <div>
              <label htmlFor="lastName">Sobrenome:</label>
              <input type="text" id="lastName" value={lastName} onChange={(evt) => setLastName(evt.target.value)} placeholder="Insira o sobrenome" />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder="Insira seu e-mail" />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" value={password} onChange={(evt) => setPassword(evt.target.value)} placeholder="Insira a sua senha" />
            </div>
            <div>
              <label htmlFor="repeatPassword">Repetir senha:</label>
              <input type="password" id="repeatPassword" value={repeatPassword} onChange={(evt) => setRepeatPassword(evt.target.value)} placeholder="Repita a senha" />
            </div>
            <div>
              <button type="submit" onClick={(evt) => handlingRegistration(evt)} className="btnRegisterStyle">Registrar</button>
            </div>
            <div>
            <p className="registrationMessage">{message}</p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Registration;