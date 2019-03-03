import React, { Component } from "react";
import BlogPosts from "./blogPosts";
import NewPost from "./newPost";

class NavBar extends Component {
  state = {
    items: [],
    content : {}
  };

  constructor() {
    super();
    this.getPosts(`http://localhost:8080/posts/all`);
  }

  getPosts = (url) => {
    fetch(url)
      .then(result => result.json())
      .then(myItems => this.setState({ items: myItems }));
  }

  getTitle = () => {
    if (document.getElementById("search").value === "") {
      this.getPosts("http://localhost:8080/posts/all");
    }
    else {
      this.getPosts("http://localhost:8080/posts/title/" + document.getElementById("search").value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Blog
        </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <button className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal"
                data-target="#exampleModalCenter">
                New Post
            </button>
              <NewPost content={this.state.content}></NewPost>
            </ul>

            <div className="my-2 my-lg-0" style={{ display: "inline-flex" }}>
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this.getTitle}
              >
                Search
            </button>
            </div>
          </div>
        </nav>
        <BlogPosts items={this.state.items}></BlogPosts>
      </React.Fragment>
    );
  }
}

export default NavBar;
