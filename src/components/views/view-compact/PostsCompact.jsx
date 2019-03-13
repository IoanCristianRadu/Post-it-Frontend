import React, {Component} from "react";
import PostCompact from "./PostCompact";

class PostsCompact extends Component {
    render() {
        return <div className="container">
            {this.showPosts()}</div>;
    }

    showPosts() {
        return this.props.items.map(post => (<PostCompact key={post.id} post={post}
                                                          updateClickedPostId={this.props.updateClickedPostId}/>
        ));
    }
}

export default PostsCompact;
