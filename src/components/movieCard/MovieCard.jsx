import { useEffect, useState } from "react";
import "./movieCard.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
import { API_KEY } from "../../constants/constants";

export default function MovieCard({ title, url }) {
  const [movies, setMovies] = useState([]);
  const [movieKey, setmovieKey] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const getVideo = (trailer) => {
    axios
      .get(`movie/${trailer}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0)
          setmovieKey(response.data.results[0]?.key);
      });
  };

  //options for youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="cards">
        {movies.map((movie, index) => (
          <img
            onClick={getVideo(movie.id)}
            src={`${imageUrl + movie.backdrop_path}`}
            key={index}
          />
        ))}
      </div>
      {movieKey && <YouTube videoId={movieKey} opts={opts} />}
    </>
  );
}
