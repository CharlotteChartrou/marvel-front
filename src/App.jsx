import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cookies from "js-cookie";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Footer from "./components/Footer";
import Comic from "./pages/Comic";
import Character from "./pages/Character-comics";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(Cookies.get("favorites") || null);

  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  const handleFavorites = (favorites) => {
    if (favorites) {
      Cookies.set("favorites", favorites, { expires: 10 });
      setFavorites(favorites);
    } else {
      Cookies.remove("favorites");
      setFavorites(null);
    }
  };

  return (
    <>
      <Router>
        <Header token={token} handleToken={handleToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/comics"
            element={
              <Comics
                search={search}
                setSearch={setSearch}
               
              />
            }
          />
          <Route
            path="/characters"
            element={
              <Characters
                search={search}
                setSearch={setSearch}
               
              />
            }
          />
          <Route
            path="/comic/:comicId"
            element={<Comic handleFavorites={handleFavorites} token={token} />}
          />
          <Route path="/comics/:characterId" element={<Character />} />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route
            path="/signin"
            element={<Signin handleToken={handleToken} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
