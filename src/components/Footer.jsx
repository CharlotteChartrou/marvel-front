import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>  <footer>
        <div className="container"> 
      
          <div className="footer">
           <span>Made by <Link style={{textDecoration: "none", color:"white"}} >Charlotte Chartrou</Link> at <Link style={{textDecoration: "none", color:"white"}}> Le Reacteur</Link></span>
          </div>  
         
        </div>
     </footer>
    </>
  );
};

export default Footer;
