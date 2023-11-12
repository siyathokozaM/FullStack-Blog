import "../blog.css";
import blog1 from "../images/travel1.jpg";

const Blog = () => {
  return (
    <div className="blog container bg-light">
      <div className="row p-5 mt-2 mb-5 ">
        <div className=" col-lg-4">
          <img className="img-fluid" src={blog1} alt="blog-image" />
        </div>
        <div className="col">
          <h3>Title</h3>
          <small>auther</small> <small>date</small>
          <p>
            Button variants (for regular and outline buttons) use their
            respective mixins with our $theme-colors map to generate the
            modifier classes in
          </p>
          <small>❤️ 40</small>
        </div>
      </div>
    </div>
  );
};

export default Blog;
