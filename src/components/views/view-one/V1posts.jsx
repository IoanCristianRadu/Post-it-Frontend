import React, {Component} from "react";
import V1post from "./V1post";

class V1posts extends Component {
    render() {
        return <div className="container">
            {this.showPosts()}</div>;
    }

    showPosts() {
        return this.props.items.map(post => (<V1post key={post.id} post={post}
                                                     updateClickedPostId={this.props.updateClickedPostId}/>
        ));
    }
}

export default V1posts;
