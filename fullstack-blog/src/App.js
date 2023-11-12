import "./App.css";
import Landing from "./components/Landing-page";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import CreatePost from "./components/Create-post";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element=<Landing />></Route>
        <Route path="/blog" element=<Blog />></Route>
        <Route path="/post" element=<CreatePost />></Route>
        <Route path="/login-signup" element=<Login />></Route>
      </Routes>
    </>
  );
}

export default App;
