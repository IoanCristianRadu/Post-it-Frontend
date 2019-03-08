import React, { Component } from "react";

class Posts extends Component {

  render() {
    return <div className="container">
      {this.showPosts()}</div>;
  }

  showPosts() {
    return this.props.items.map(post => (
      <div key={post.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title myTextAlignCenter">{post.title}</h5>
            {this.addImageIfExists(post)}
            <p className="card-text">{post.content}</p>
            <p className="card-text" style={{ textAlign: "right" }}>{post.username}</p>
          </div>
        </div>
      </div>
    ));
  }

  addImageIfExists = (post) => {
    if (post.photoURL != "") {
      return <img src={post.photoURL} className="center"></img>
    }
  }
}

export default Posts;
