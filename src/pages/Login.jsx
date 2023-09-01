import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form">
        <h2>Se connecter</h2>
        <form
          className="login"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const response = await axios.post(
                /*  "https://lereacteur-vinted-api.herokuapp.com/user/login", */
                {
                  email,
                  password,
                }
              );

              console.log(response.data);

              handleToken(response.data.token);

              navigate("/");
            } catch (error) {
              console.log(error.response.data);
            }
          }}
        >
          <input
            placeholder="Adresse mail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button type="submit">Se Connecter</button>
        </form>
        <Link to="/signin">Pas encore de compte ? Inscris-toi !</Link>
      </div>
    </div>
  );
};

export default Login;
