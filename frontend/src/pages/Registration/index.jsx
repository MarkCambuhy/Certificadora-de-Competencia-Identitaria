import { useEffect, useState, useContext } from "react";
import "./index.css";
import logo from "../../assets/bons-fluidos-30px.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handlingRegistration = async (evt) => {
    evt.preventDefault();
    try {
      await axios.post("http://localhost:3000/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      navigate("/signin/identifier");
    } catch (error) {
      setMessage("Credênciais inválidas!");
    }
  };

  useEffect(() => {
    document.title = "Projeto Bons Fluidos - Cadastre-se";
  }, []);

  return (
    <>
      <main className="registrationStyle">
        <section className="sectionBg"></section>
        <section className="dataSection">
          <div>
            <div className="registrationLogoContainer">
              <img src={logo} alt="" />
              <p>Bons fluidos</p>
            </div>
            <h1 className="registrationTitle">Cadastre-se</h1>
          </div>
          <form
            method="POST"
            onSubmit={(evt) => handlingRegistration(evt)}
            className="formContainer"
          >
            <div>
              <label htmlFor="firstName">Nome</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName">Sobrenome</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </div>
            <div className="btnRegisterContainer">
              <button type="submit" className="btnRegisterStyle">
                Cadastre-se
              </button>
            </div>
            <div>
              <p className="registrationMessage">{message}</p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Registration;
