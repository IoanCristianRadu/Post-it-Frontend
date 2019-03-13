import React, {Component} from "react";

class PostLarge extends Component {

    render() {
        return (
            <div key={this.props.post.id} id={this.props.post.id} className={"cursorPointer m-3"} data-toggle="modal"
                 data-target="#modalSinglePost"
                 onClick={this.callUpdateClickedPostId}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title myTextAlignCenter">{this.props.post.title}</h5>
                        {this.addImageIfExists(this.props.post)}
                        <p className="card-text myPostedBy">{this.props.post.username}</p>
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
            return <img src={post.photoURL} className="myImageV1" alt={"postImage"}/>
        }
    }
}

export default PostLarge;
