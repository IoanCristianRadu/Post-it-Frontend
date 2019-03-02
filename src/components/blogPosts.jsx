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
    return <div>{this.showPosts()}</div>;
  }

  showPosts() {
    return this.state.items.map(item => (
      <div key={item.id}>
        <h1>{item.title}</h1>
        <h1>{item.content}</h1>
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
