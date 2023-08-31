import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Comics = ({ search, setSearch, skip, setSkip }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ skip });
    const fecthData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--pzlwvwf45nxz.code.run/comics?&title=${search}&skip=${skip}`
      );

      setData(response.data);
      console.log(response.data);

      setIsLoading(false);
    };
    fecthData();
  }, [search, skip]);

  return (
    <>
      {isLoading ? (
        <span>Chargement...</span>
      ) : (
        <div className="container">
          <input
            type="search"
            value={search}
            placeholder="Rechercher un comic"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {skip !== 0 && (
            <button
              onClick={() => {
                setSkip(skip - data.limit);
                navigate("/comics");
              }}
            >
              Page précedente
            </button>
          )}

          {skip < data.count - data.limit && (
            <button
              onClick={() => {
                setSkip(skip + data.limit);
                navigate("/comics");
              }}
            >
              Page suivante
            </button>
          )}
          <h1>COMICS</h1>
          <div className="tab-comics">
            {data.results.map((comics, index) => {
              return (
                <>
                  <div key={index} className="comics-display">
                    <Link to={`/comic/${comics._id}`}>
                      <h2>{comics.title}</h2>
                      <img
                        src={`${comics.thumbnail.path}/standard_fantastic.${comics.thumbnail.extension}`}
                        alt="comic-img"
                      />{" "}
                      <div>{comics.description}</div>
                    </Link>
                  </div>
                </>
              );
            })}{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default Comics;
