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
             <div className="menu-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
          </nav>
         
        </div>
      </header>
    </>
  );
};

export default Header;
