import characters from "../assets/img/groupe.webp";

const Home = () => {
  return (
    <>
      <div className="container">
        <div>Bienvenue dans l'univers Marvel ©</div>
        <img src={characters} alt="characters-group" />
      </div>
    </>
  );
};

export default Home;
