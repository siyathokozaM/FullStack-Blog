import "../navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid text-center justify-content-center">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center "
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav ">
            <a class="nav-link p-3" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link p-3" href="#">
              blog
            </a>
            <a class="nav-link p-3" href="#">
              login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
