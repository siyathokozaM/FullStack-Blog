// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing-page";
import Blog from "./components/Blog";
import CreatePost from "./components/Create-post";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
