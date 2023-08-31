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

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [skip, setSkip] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/comics"
            element={
              <Comics
                search={search}
                setSearch={setSearch}
                skip={skip}
                setSkip={setSkip}
              />
            }
          />
          <Route
            path="/characters"
            element={
              <Characters
                search={search}
                setSearch={setSearch}
                skip={skip}
                setSkip={setSkip}
              />
            }
          />
          <Route path="/comic/:comicId" element={<Comic />} />
          <Route path="/comics/:characterId" element={<Character />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
