import React, { Component } from "react";

class PostCompact extends Component {

    render() {
        return (
            <div key={this.props.post.id} id={this.props.post.id} className={"cursorPointer m-3"} data-toggle="modal" data-target="#modalSinglePost"
                 onClick={this.callUpdateClickedPostId}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title myTextAlignCenter">{this.props.post.title}</h5>
                        <span>
                            {this.addImageIfExists(this.props.post)}
                            <p>{this.props.post.content}</p>
                        </span>
                        <p className="card-text" style={{ textAlign: "right" }}>{this.props.post.username}</p>
                    </div>
                </div>
            </div>
        )
    }

    //post -> posts -> navbar: updateClickedPostId
    callUpdateClickedPostId = () => {
        this.props.updateClickedPostId(this.props.post.id);
    };

    addImageIfExists = (post) => {
        if (post.photoURL !== "") {
            return <img src={post.photoURL} className="myImageV2" alt={"postImage"}/>
        }
    }
}

export default PostCompact;
