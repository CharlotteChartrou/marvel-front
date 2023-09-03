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
          <div className="header-search">
          <input 
            type="search"
            value={search}
            placeholder="Rechercher un comic"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          /><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ee181e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
          <div className="pagination">
          {skip !== 0 ? (
            <button
              onClick={() => {
                setSkip(skip - data.limit);
                navigate("/comics");
              }}
            >
              Page précedente
            </button>
          ): (  <button disabled
              
            >
              Page précedente
            </button>)}

          {skip < data.count - data.limit ? (
            <button
              onClick={() => {
                setSkip(skip + data.limit);
                navigate("/comics");
              }}
            >
              Page suivante
            </button>
          )  : (<button disabled 
          >
            Page suivante
          </button>)  }</div>
          <h1>COMICS</h1>
         <div className="display-comics">
            {data.results.map((comics, index) => {
              return (
                <> <div className="tab-comics">
                    <Link style={{textDecoration: "none"}} to={`/comic/${comics._id}`}>
                     <div key={index} className="box">
                     <img
                        src={`${comics.thumbnail.path}/portrait_uncanny.${comics.thumbnail.extension}`}
                        alt="comic-img"
                      />
                      <div className="hidden">
                       <h2 >{comics.title}</h2>
                      <span>{comics.description}</span></div></div>
                    </Link>    </div>
                </>
              );
            })}
      </div>
      <div className="pagination">
          {skip !== 0 ? (
            <button
              onClick={() => {
                setSkip(skip - data.limit);
                navigate("/comics");
              }}
            >
              Page précedente
            </button>
          ): (  <button disabled
              
            >
              Page précedente
            </button>)}

          {skip < data.count - data.limit ? (
            <button
              onClick={() => {
                setSkip(skip + data.limit);
                navigate("/comics");
              }}
            >
              Page suivante
            </button>
          )  : (<button disabled 
          >
            Page suivante
          </button>)  }</div>
        </div>
      )}
    </>
  );
};

export default Comics;
