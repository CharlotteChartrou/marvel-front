import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Character = () => {
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
          <img
            src={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
            alt="comic-img"
          />
          <h1>{data.name}</h1>
          <div>{data.description}</div>

          {data.comics.map((comics, index) => {
            return (
              <div key={index}>
                <Link to={`/comic/${comics._id}`}>
                  <h1>{comics.name}</h1>
                  <img
                    src={`${comics.thumbnail.path}/standard_fantastic.${comics.thumbnail.extension}`}
                    alt="comic-img"
                  />
                  <div>{comics.title}</div>
                  <div>{comics.description}</div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Character;
