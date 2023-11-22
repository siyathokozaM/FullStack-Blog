// server.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// Set up CORS middleware
app.use(cors());

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure to create the 'uploads' folder in your project
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

// Sample in-memory database to store posts
const posts = [];

app.use(express.json());

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Create a new post with file upload
app.post("/api/posts", upload.single("image"), (req, res) => {
  const { title, author, date, context } = req.body;
  const image = req.file.filename; // Multer will add a 'file' object to the request containing information about the uploaded file

  const newPost = { title, author, date, image, context, likes: 17 };
  posts.push(newPost);

  res.status(201).json(newPost);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Delete a post by ID

app.delete("/api/posts/:postId", (req, res) => {
  const postId = req.params.postId;
  const index = posts.findIndex((post) => post._id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
    res.status(201).json({ message: "Post deleted successfully" });
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
