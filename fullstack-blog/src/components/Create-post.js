import "../create-post.css";
import { useState } from "react";

const CreatePost = () => {
  const { data, setData } = useState();
  return (
    <div className="container bg-light border create shadow p-5">
      <form className="create-post">
        <label for="title" class="form-label">
          title
        </label>
        <input type="text" class="form-control" />{" "}
        <label for="title" class="form-label">
          author
        </label>
        <input type="text" class="form-control" />{" "}
        <label for="title" class="form-label">
          date
        </label>
        <input type="date" class="form-control" />{" "}
        <label for="title" class="form-label">
          image
        </label>
        <input type="file" class="form-control" />{" "}
        <label for="title" class="form-label">
          context
        </label>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </form>
    </div>
  );
};

export default CreatePost;
