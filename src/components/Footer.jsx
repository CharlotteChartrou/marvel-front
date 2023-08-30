import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div>
            {" "}
            Made by <Link>Charlotte Chartrou</Link> at <Link>Le Reacteur</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
