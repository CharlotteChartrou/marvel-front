import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        "https://site--marvel-backend--pzlwvwf45nxz.code.run/comics"
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
          <h1>COMICS</h1>
          {data.results.map((comics, index) => {
            console.log(comics);
            return (
              <>
                <div key={index} className="comics-display">
                  <Link to={`/comic/${comics._id}`}>
                    <h2>{comics.title}</h2>
                    <div>{comics.description}</div>
                    <img
                      src={`${comics.thumbnail.path}/standard_fantastic.${comics.thumbnail.extension}`}
                      alt="comic-img"
                    />
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Comics;
