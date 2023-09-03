import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backcharac from "../assets/img/back-charact.jpeg"

const Characters = ({ search, setSearch}) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);

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
            
              <input
                type="search"
                placeholder="Rechercher un personnage"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              /> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ee181e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
             </div>
            <div className="pagination">
              {skip !== 0 ? (
                
                  <button
                    onClick={() => {
                      setSkip(skip - data.limit);
                      navigate("/characters");
                    }}
                  >
                    Page précedente
                  </button>
                
              ) : (  <button disabled
              
              >
                Page précedente
              </button>)}
              {skip < data.count - data.limit ? (
                
                  <button
                    onClick={() => {
                      setSkip(skip + data.limit);
                      navigate("/characters");
                    }}
                  >
                    Page suivante
                  </button>
                
              ) :  ( <button disabled
              
            >
              Page suivante
            </button>)}
            </div>
         
         <div >
          <h1> CHARACTERS </h1></div>
    <div className="characters">
            {data.results.map((characters, index) => {
              return (
                       <div  key={index} className="card">
                  <Link to={`/comics/${characters._id}`}>
                    <h2 className="character-name">{characters.name}</h2>
                    <p className="character-description">
                      {characters.description}
                    </p>
                    <img
                      src={`${characters.thumbnail.path}/standard_fantastic.${characters.thumbnail.extension}`}
                      alt="comic-img"
                    />
           
                  </Link>
                    </div>
              );
            })}
      </div>
      <div className="pagination">
              {skip !== 0 ? (
                
                  <button
                    onClick={() => {
                      setSkip(skip - data.limit);
                      navigate("/characters");
                    }}
                  >
                    Page précedente
                  </button>
                
              ) : (  <button disabled
              
              >
                Page précedente
              </button>)}
              {skip < data.count - data.limit ? (
                
                  <button
                    onClick={() => {
                      setSkip(skip + data.limit);
                      navigate("/characters");
                    }}
                  >
                    Page suivante
                  </button>
                
              ) :  ( <button disabled
              
            >
              Page suivante
            </button>)}
            </div>
        </div>
      )}
    </>
  );
};

export default Characters;
