import React, { Component } from "react";

class Posts extends Component {

  render() {
    return <div className="container">
      {this.showPosts()}</div>;
  }

  showPosts() {
    return this.props.items.map(item => (
      <div key={item.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title myTextAlignCenter">{item.title}</h5>
            <p className="card-text">{item.content}</p>
            <p className="card-text" style={{ textAlign: "right" }}>{item.username}</p>
          </div>
        </div>
      </div>
    ));
  }
}

export default Posts;
