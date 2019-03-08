import React, {Component} from "react";
import Post from "./post";

class Posts extends Component {
    a = 0;

    render() {
        return <div className="container">
            {this.showPosts()}</div>;
    }

    showPosts() {
        return this.props.items.map(post => (<Post key={post.id} post={post} number={this.a++} updateClickedPostNumber={this.props.updateClickedPostNumber}/>
        ));
    }
}

export default Posts;
