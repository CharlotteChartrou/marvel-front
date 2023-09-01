import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Characters = ({ search, setSearch, skip, setSkip }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fecthData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--pzlwvwf45nxz.code.run/characters?name=${search}&skip=${skip}`
      );

      setData(response.data);
      console.log(response.data);

      setIsLoading(false);
    };
    fecthData();
  }, [search, skip]);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <span>Chargement...</span>
      ) : (
        <div className="container">
          <div className="header-search">
            <div>
              <input
                type="search"
                placeholder="Rechercher un personnage"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            <div className="pagination">
              {skip !== 0 && (
                <div>
                  <button
                    onClick={() => {
                      setSkip(skip - data.limit);
                      navigate("/characters");
                    }}
                  >
                    Page précedente
                  </button>
                </div>
              )}
              {skip < data.count - data.limit && (
                <div>
                  <button
                    onClick={() => {
                      setSkip(skip + data.limit);
                      navigate("/characters");
                    }}
                  >
                    Page suivante
                  </button>
                </div>
              )}
            </div>
          </div>
          <h1>CHARACTERS </h1>
          <div className="display-card">
            {data.results.map((characters, index) => {
              return (
                <div key={index} className="character-card">
                  <Link to={`/comics/${characters._id}`}>
                    <h2 className="character-name">{characters.name}</h2>
                    <div className="character-description">
                      {characters.description}
                    </div>
                    <img
                      src={`${characters.thumbnail.path}/portrait_incredible.${characters.thumbnail.extension}`}
                      alt="comic-img"
                    />
                  </Link>
                </div>
              );
            })}{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Characters;
