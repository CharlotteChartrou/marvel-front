import logo from "../assets/img/marvel.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img onClick={() => navigate("/")} src={logo} alt="logo-marvel" />
            <Link to={"/characters"} className="menu">
              Characters
            </Link>
            <Link to={"/comics"} className="menu">
              Comics
            </Link>
            <Link to={"/favorites"} className="menu">
              Favorites
            </Link>
            {token ? (
              <button
                className="butt-signout"
                onClick={() => {
                  handleToken(null);
                  navigate("/");
                }}
              >
                Sign out
              </button>
            ) : (
              <div className="button-log">
                <Link to="/login" className="butt-connect">
                  Log in
                </Link>
                <Link to="/signin" className="butt-connect2">
                  Sign in
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
