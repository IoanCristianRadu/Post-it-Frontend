import React, { Component } from "react";

class BlogPosts extends Component {
  state = {
    items: []
  };

  constructor() {
    super();
    this.getPosts();
  }

  render() {
    return <div className="container">{this.showPosts()}</div>;
  }

  showPosts() {
    return this.state.items.map(item => (
      <div key={item.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title myTextAlignCenter">{item.title}</h5>
            <p className="card-text">{item.content}</p>
          </div>
        </div>
      </div>
    ));
  }

  getPosts() {
    fetch(`http://localhost:8080/posts/all`)
      .then(result => result.json())
      .then(myItems => this.setState({ items: myItems }));
  }
}

export default BlogPosts;
