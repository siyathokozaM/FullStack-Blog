import "../navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid text-center justify-content-center">
        <button
          className="navbar-toggler btn "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="nav-link p-3" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link p-3" to="/blog">
              blog
            </Link>
            <Link className="nav-link p-3" to="/post">
              post
            </Link>
            <Link className="nav-link p-3" to="/login-signup">
              login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
