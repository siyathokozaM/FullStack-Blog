import "../blog.css";
// import blog1 from "../images/travel1.jpg";
// client/src/components/Blog.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posts from the server
    axios
      .get("http://localhost:3000/api/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching posts. Please try again later.");
        setLoading(false);
        console.error("Error fetching posts:", error);
      });
  }, []);

  const incrementLikes = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };
  //////          code to delete a single post
  const handleDelete = async (postId) => {
    try {
      // Send a DELETE request to the server to delete the post
      const response = await axios.delete(
        `http://localhost:3001/api/posts/${postId}`
      );

      if (response.status === 200) {
        // If the deletion is successful, update the local state
        const updatedPosts = posts.filter((post) => post._id !== postId);
        setPosts(updatedPosts);
      } else {
        console.error("Failed to delete post:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };
  return (
    <div className="blog container">
      <h1>Blog posts</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        posts.map((post, index) => (
          <div className="row p-5 mt-5 mb-5 bg-light shadow" key={index}>
            {/* <div className="col-lg-4">
              <img
                className="img-fluid"
                src={`http://localhost:3000/uploads/${post.image}`}
                alt="Post"
              />
            </div> */}
            <div className="col">
              <h3>{post.title}</h3>
              <div className="row">
                <div className="col">
                  <p>{post.author}</p>
                </div>
                <div className="col">
                  <p>{new Date(post.date).toLocaleDateString()}</p>
                </div>
                <div className="col">
                  <button
                    className="  likes"
                    onClick={() => incrementLikes(index)}
                  >
                    ❤️
                  </button>
                  <small>{post.likes}</small>
                </div>
              </div>
              <p>{post.context}</p>
              <button
                className="btn btn-outline-dark m-3"
                onClick={() => handleDelete(index)}
              >
                delete
              </button>

              <Link className="btn btn-outline-info m-3" to="/post">
                Post
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Blog;
