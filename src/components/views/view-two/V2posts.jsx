import React, {Component} from "react";
import V2post from "./V2post";

class V2posts extends Component {
    render() {
        return <div className="container">
            {this.showPosts()}</div>;
    }

    showPosts() {
        return this.props.items.map(post => (<V2post key={post.id} post={post}
                                                     updateClickedPostId={this.props.updateClickedPostId}/>
        ));
    }
}

export default V2posts;
