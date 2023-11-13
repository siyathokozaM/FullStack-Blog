import "../create-post.css";
import { useState } from "react";

const CreatePost = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    date: "",
    context: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container border create shadow p-5">
      <form className="create-post">
        <label for="title" class="form-label">
          title
        </label>
        <input
          type="text"
          name="title"
          value={data.title}
          class="form-control"
          onChange={handleData}
        />
        <label for="title" class="form-label">
          author
        </label>
        <input
          type="text"
          name="author"
          value={data.author}
          class="form-control"
          onChange={handleData}
        />
        <label for="title" class="form-label">
          date
        </label>
        <input
          type="date"
          name="date"
          value={data.date}
          class="form-control"
          onChange={handleData}
        />
        <label for="title" class="form-label">
          image
        </label>
        <input
          type="file"
          name="image"
          value=""
          class="form-control"
          onChange={handleData}
        />
        <label for="title" class="form-label">
          context
        </label>
        <textarea
          class="form-control"
          name="context"
          value={data.context}
          aria-label="With textarea"
          rows={5}
        ></textarea>
        <button type="submit" className="btn btn-outline-info mt-3">
          <strong> ADD POST</strong>
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
