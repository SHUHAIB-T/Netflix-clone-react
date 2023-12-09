import "./banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import { useState } from "react";
import { useEffect } from "react";

export default function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((respone) => {
        const random = Math.floor(Math.random() * 20);
        setMovie(respone.data.results[random]);
      });
  }, []);
  return (
    <>
      <div
        className="banner--wrapper"
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
      >
        <div className="movie--title">
          <h1>{movie && (movie.title ? movie.title : movie.name)}</h1>
          <p className="movie--description">{movie && movie.overview}</p>
          <button className="play--button">
            <i className="fa-solid fa-play"></i>Play
          </button>
          <button className="info--button">
            <i className="fa-solid fa-circle-info"></i> More info
          </button>
        </div>
      </div>
    </>
  );
}
