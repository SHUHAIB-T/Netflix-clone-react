import "../styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <img
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
      </nav>
    </>
  );
}
