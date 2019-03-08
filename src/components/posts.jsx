import React, {Component} from "react";
import Post from "./post";

class Posts extends Component {
    render() {
        return <div className="container">
            {this.showPosts()}</div>;
    }

    showPosts() {
        return this.props.items.map(post => (<Post key={post.id} post={post}
                                                   updateClickedPostId={this.props.updateClickedPostId}/>
        ));
    }
}

export default Posts;
