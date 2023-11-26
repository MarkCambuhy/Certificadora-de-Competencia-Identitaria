import { useEffect, useState, useContext } from "react";
import "./index.css";
import logo from "../../assets/bons-fluidos-30px.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handlingLogin = async (evt) => {
    evt.preventDefault();
    inputs.email = email;
    inputs.password = password;
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setMessage("Credênciais incorretas!");
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Projeto Bons Fluidos - Entrar";
  }, []);

  return (
    <>
      <main className="loginStyle">
        <section className="sectionBg"></section>
        <section className="dataSection">
          <div>
            <div className="loginLogoContainer">
              <img src={logo} alt="" />
              <p>Bons fluidos</p>
            </div>
            <h1 className="loginTitle">Seja bem-vindo de volta!</h1>
          </div>
          <form
            method="POST"
            onSubmit={(evt) => handlingLogin(evt)}
            className="formContainer"
          >
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
            <div className="btnLoginContainer">
              <button type="submit" className="btnLoginStyle">
                Entrar
              </button>
            </div>
            <div>
              <p className="loginMessage">{message}</p>
            </div>
            <div className="registrationRedirect">
              <p>
                Não possui conta?{" "}
                <span onClick={() => navigate("/signup/createaccount")}>
                  Cadastre-se.
                </span>
              </p>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
