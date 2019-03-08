import React, { Component } from "react";

class Post extends Component {

    render() {
        return (
            <div key={this.props.post.id} className={"cursorPointer"} data-toggle="modal" data-target="#modalSinglePost"
                 onClick={this.callUpdateClickedPostId}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title myTextAlignCenter">{this.props.post.title}</h5>
                        {this.addImageIfExists(this.props.post)}
                        <p className="card-text">{this.props.post.content}</p>
                        <p className="card-text" style={{ textAlign: "right" }}>{this.props.post.username}</p>
                    </div>
                </div>
            </div>
        )
    }

    //post -> posts -> navbar: updateClickedPostId
    callUpdateClickedPostId = () => {
        this.props.updateClickedPostId(this.props.post.id);
    }

    addImageIfExists = (post) => {
        if (post.photoURL !== "") {
            return <img src={post.photoURL} className="center" alt={"postImage"}/>
        }
    }
}

export default Post;
