import logo from "../assets/img/marvel.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img onClick={() => navigate("/")} src={logo} alt="logo-marvel" />
            <Link to={"/characters"}>CHARACTERS</Link>
            <Link to={"/comics"}>COMICS</Link>
            <Link to={"/favorites"}>FAVORITES</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
