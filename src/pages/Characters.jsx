import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        "https://site--marvel-backend--pzlwvwf45nxz.code.run/characters"
      );

      setData(response.data);
      console.log(response.data.results);

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
          <h1>CHARACTERS </h1>
          {data.results.map((characters, index) => {
            console.log(characters.thumbnail);
            return (
              <div key={index}>
                <Link to={`/comics/${characters._id}`}>
                  <h2>{characters.name}</h2>
                  <div>{characters.description}</div>
                  <img
                    src={`${characters.thumbnail.path}/portrait_uncanny.${characters.thumbnail.extension}`}
                    alt="comic-img"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Characters;
