import React, { Component } from "react";
import Posts from "./posts";
import NewPost from "./modals/new-post";
import Login from "./modals/login";
import CreateAccount from "./modals/create-account";

class NavBar extends Component {
  state = {
    username: "",
    items: []
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

  updateCurrentUser = (username) => {
    this.setState({ username: username });
  }

  account = () => {
    if (this.state.username == "") {
      return (
        <React.Fragment>
          <ul className="navbar-nav">
            <button className="btn btn-outline-info my-2 my-lg-0 ml-2" data-toggle="modal"
              data-target="#login">
              Log in
              </button>
          </ul>
          <ul className="navbar-nav">
            <button className="btn btn-outline-info my-2 my-lg-0 ml-2" data-toggle="modal"
              data-target="#createAccount">
              Create account
              </button>
          </ul>
        </React.Fragment>
      )
    } else {
      return (
        <button type="button" class="btn btn-primary">
          {this.state.username}
        </button>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Post it!
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
              <li>
                <button className="btn btn-outline-success my-2 my-lg-0 ml-2" data-toggle="modal"
                  data-target="#exampleModalCenter">
                  New Post
                </button>
              </li>
              <li>
                <div className="my-2 my-lg-0 ml-2" style={{ display: "inline-flex" }}>
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
              </li>
            </ul>
            {this.account()}
          </div>
        </nav>
        <Posts items={this.state.items}></Posts>
        <Login updateCurrentUser={this.updateCurrentUser}></Login>
        <NewPost></NewPost>
        <CreateAccount></CreateAccount>
      </React.Fragment>
    );
  }
}

export default NavBar;
