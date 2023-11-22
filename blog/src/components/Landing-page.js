import "../landing.css";
import travel1 from "../images/travel5.jpg";
import travel2 from "../images/travel2.jpg";
import travel3 from "../images/travel3.jpg";
import travel4 from "../images/travel4.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <body className=" container-fluid text-center landing ">
      <div className="container-fluid d-flex pb-5 flex-column">
        <main role="main" className="inner cover pb-5 ">
          <h1 className="cover-heading pt-5 pb-5">
            PERFECT PLACE FOR YOUR STORIES.
          </h1>
          <div className=" flex-md-column">
            <img className="img-fluid" src={travel1} alt="blog image" />
            <img className="img-fluid" src={travel2} alt="blog image" />
            <img className="img-fluid" src={travel3} alt="blog image" />
            <img className="img-fluid" src={travel4} alt="blog image" />
          </div>
          <p className="lead  pb-2">
            Present all the places you've visited using our blog post. Add
            images, include descriptions, sahre tips, key points and more.
          </p>
          <p className="lead">
            <Link to="/blog" className="btn btn-lg btn-outline-info">
              <strong>BLOG</strong>
            </Link>
          </p>
        </main>

        <footer className="mastfoot mt-auto">
          <div className="inner">
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
