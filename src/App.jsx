import "./App.css";
import Banner from "./components/banner/Banner.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import MovieCard from "./components/movieCard/MovieCard.jsx";
import { originals, actions, popular } from "./constants/postURL.js";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <MovieCard title="Netflix Originals" url={originals} />
      <MovieCard title="Popular Movies" url={popular} />
      <MovieCard title="Action Movies" url={actions} />
    </>
  );
}

export default App;
