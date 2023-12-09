import { useRef, useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isSearch, setSearch] = useState(false);
  const input = useRef();
  const handleSearch = () => {
    setSearch(!isSearch);
    input.current.focus();
  };
  return (
    <>
      <nav className="nav">
        <div className="nav--items--wrapper">
          <img
            onClick={() => {
              window.location.reload();
            }}
            className="logo-image"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            alt=""
          />
          <ul className="nav--items">
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New And Popular</li>
          </ul>
        </div>
        <div className="nav--search--wrapper">
          {isSearch && (
            <>
              <input
                className="inputText"
                placeholder="What are you looking for?"
                type="text"
                ref={input}
              />
            </>
          )}
        </div>
        <div className="items--wrapper">
          <i
            onClick={handleSearch}
            className="fa-solid fa-magnifying-glass"
          ></i>
          <p>children</p>
          <i className="fa-regular fa-bell"></i>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </nav>
    </>
  );
}
