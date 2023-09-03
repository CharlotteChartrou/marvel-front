import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Character = ({ handleFavorites, token }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  console.log(characterId);

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--pzlwvwf45nxz.code.run/comics/${characterId}`
      );

      setData(response.data);
      console.log(response.data);

      setIsLoading(false);
    };
    fecthData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>Chargement...</span>
      ) : (
        <div className="container"> 
        <div className="bloc">
    <div className="charac-page">
          <img
            src={`${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`}
            alt="comic-img"
          />
          <h1>{data.name}</h1>
          <div>{data.description}</div>
          <button 
            onClick={ async () => {
              const response = await axios.post("http://localhost:3000/favorites", {
                id: data._id,
                token : Cookies.get("token"),
                
              })} } >
            Add to Favorites
          </button>
</div> 

<div className="charac-comics">
          {data.comics.map((comics, index) => {
            return (
              <div className="comics-box" key={index}>
                 
             <Link to={`/comic/${comics._id}`}>
                  <img
                    to={`/comic/${comics._id}`}
                    src={`${comics.thumbnail.path}/standard_fantastic.${comics.thumbnail.extension}`}
                    alt="comic-img"
                  />
              </Link>
              </div>
            );
          })}</div>
          <div className="span"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V6M5 12l7-7 7 7"/></svg> comics in which this character appaers <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Character;
