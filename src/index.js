import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BlogPosts from "./components/blogPosts";
import NavBar from "./components/navBar";

ReactDOM.render(<NavBar />, document.getElementById("header"));
ReactDOM.render(<BlogPosts />, document.getElementById("blogposts"));
