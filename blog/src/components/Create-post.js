import "../create-post.css";

// client/src/components/CreatePost.js
import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState({
    title: "",
    author: "",
    date: "",
    image: null,
    context: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("author", data.author);
      formData.append("date", data.date);
      formData.append("image", data.image);
      formData.append("context", data.context);

      // Send the formData to the server
      const response = await axios.post(
        "http://localhost:3000/api/posts",
        formData
      );

      if (response.status === 201) {
        console.log("Post submitted successfully!");
        // Optionally, you can redirect or perform other actions after successful submission.

        // Fetch the updated list of posts after posting
        const updatedPostsResponse = await axios.get(
          "http://localhost:3000/api/posts"
        );
        setPosts(updatedPostsResponse.data);
      } else {
        console.error("Failed to submit post:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting post:", error.message);
    }

    // Clear the form after submission
    setData({
      title: "",
      author: "",
      date: "",
      image: null,
      context: "",
    });
  };

  return (
    <div className="container border create shadow p-5">
      <form className="create-post" onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          className="form-control"
          onChange={handleData}
          required
        />
        <label htmlFor="author" className="form-label">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={data.author}
          className="form-control"
          onChange={handleData}
          required
        />
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={data.date}
          className="form-control"
          onChange={handleData}
          required
        />
        {/* <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="form-control"
          onChange={handleImageChange}
        /> */}
        <label htmlFor="context" className="form-label">
          Context
        </label>
        <textarea
          id="context"
          className="form-control"
          name="context"
          value={data.context}
          aria-label="With textarea"
          rows={5}
          onChange={handleData}
          required
        ></textarea>
        <button type="submit" className="btn btn-outline-info mt-3">
          <strong>ADD POST</strong>
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
