import "../landing.css";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <body className="text-center bg-light">
      {/* <Navbar /> */}
      <div class="cover-container d-flex pb-5 flex-column">
        <main role="main" class="inner cover pb-5">
          <h1 class="cover-heading pt-5 pb-5">Full-Stack Blog.</h1>
          <p class="lead  pb-5">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">
              go to blog
            </a>
          </p>
        </main>

        <footer class="mastfoot mt-auto">
          <div class="inner">
            <p>
              Designed by
              <a href="#"> SiyaM</a>, & <a href="#">@KissmartM</a>.
            </p>
          </div>
        </footer>
      </div>
    </body>
  );
};

export default Landing;
