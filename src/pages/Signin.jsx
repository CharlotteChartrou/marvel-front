import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../assets/img/background.jpeg"

const Signin = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  const navigate = useNavigate();

  return (     
  <div className="container">
 
   
        <div className="form-signin">
        <form
          className="signup"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const response = await axios.post(
                "https://site--marvel-backend--pzlwvwf45nxz.code.run/signup",
                {
                  username,
                  password,
                  email,
                  newsletter: newsLetter,
                }
              );
              console.log(response.data);
              handleToken(response.data.token);

              navigate("/");
            } catch (error) {
              console.log(error.message);
            }
          }}
        >     <h2>S'inscrire</h2>
          <input
            placeholder="Nom d'utilisateur"
            type="text"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <label className="checkbox">
            <input
              type="checkbox"
              checked={newsLetter}
              style={{ borderColor: "grey", borderRadius: "10px" }}
              onChange={() => {
                setNewsLetter(!newsLetter);
              }}
            ></input>
            <span style={{ fontSize:"12px"}} >
              S'inscrire à notre newsletter
            </span>
          </label>

          <button type="submit">S'inscrire</button>  <Link style={{color:"white", fontSize:"10px"}} to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
        </form>
      
      </div>
      </div>
      
  

  );
};

export default Signin;
