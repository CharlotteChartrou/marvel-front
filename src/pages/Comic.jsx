import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Comic = ({ handleFavorites }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { comicId } = useParams();

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

  return (
    <>
      {isLoading ? (
        <span>Chargement...</span>
      ) : (
        <div className="container">
          ;<h1>{data.title}</h1>
          <div>{data.description}</div>
          <img
            src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
            alt="comic-img"
          />
          <button
            onClick={() => {
              handleFavorites(data._id);
            }}
          >
            Add to Favorites
          </button>
        </div>
      )}
    </>
  );
};

export default Comic;
