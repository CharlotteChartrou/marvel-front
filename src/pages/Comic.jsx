import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Comic = ({ handleFavorites, token }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { comicId } = useParams();
  
//huhuhuu
  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--pzlwvwf45nxz.code.run/comic/${comicId}`
      );

      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fecthData();
  }, []);
console.log(token)
  return (
    <>
      {isLoading ? (
        <span>Chargement...</span>
      ) : (
        <div className="container">
          <div className="bloc-comic-page">
            <div className="bloc1">
          <img
            src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
            alt="comic-img"
          /> </div>
          <div className="bloc2">
          <h1 key={data._id}>{data.title}</h1>
          <div>{data.description}</div>
          <button 
            onClick={ async () => {
              const response = await axios.post("http://localhost:3000/favorites", {
                id: data._id,
                token : Cookies.get("token"),
                
              })} } >
            Add to Favorites
          </button></div></div>
        </div>
      )}
    </>
  );
};

export default Comic;
