import { useEffect, useState } from "react";
import "./index.css";
import logo from "../../assets/bons-fluidos-30px.png";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlingRegistration = async (evt) => {
    
  }

  useEffect(() => {
    document.title = "Projeto Bons Fluidos - Cadastre-se";
  }, []);
  
  return(
    <>
      <main className="registrationStyle">
        <section className="sectionBg">
        </section>
        <section className="dataSection">
          <div>
            <div className="registrationLogoContainer">
              <img src={logo} alt="" />
              <p>Bons fluidos</p>
            </div>
            <h1 className="registrationTitle">Cadastre-se</h1>
          </div>
          <form method="POST" action="/signin/identifier" className="formContainer">
            <div>
              <label htmlFor="firstName">Nome</label>
              <input type="text" id="firstName" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
            </div>
            <div>
              <label htmlFor="lastName">Sobrenome</label>
              <input type="text" id="lastName" value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" value={email} onChange={(evt) => setEmail(evt.target.value)} />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" value={password} onChange={(evt) => setPassword(evt.target.value)} />
            </div>
            <div className="btnRegisterContainer">
              <button type="submit" onClick={(evt) => handlingRegistration(evt)} className="btnRegisterStyle">Cadastre-se</button>
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