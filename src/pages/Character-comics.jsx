import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
          <h1>{data.name}</h1>
          <div>{data.description}</div>
          <img
            src={`${data.thumbnail.path}/standard_fantastic.${data.thumbnail.extension}`}
            alt="comic-img"
          />
          {data.comics.map((comics, index) => {
            return (
              <div key={index}>
                <h1>{comics.name}</h1>
                <img
                  src={`${comics.thumbnail.path}/standard_fantastic.${comics.thumbnail.extension}`}
                  alt="comic-img"
                />
                <div>{comics.title}</div>
                <div>{comics.description}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Character;
