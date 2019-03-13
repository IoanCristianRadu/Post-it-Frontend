import React, {Component} from "react";
import PostLarge from "./PostLarge";

class PostsLarge extends Component {
    render() {
        return <div className="container">
            {this.showPosts()}</div>;
    }

    showPosts() {
        return this.props.items.map(post => (<PostLarge key={post.id} post={post}
                                                        updateClickedPostId={this.props.updateClickedPostId}/>
        ));
    }
}

export default PostsLarge;
