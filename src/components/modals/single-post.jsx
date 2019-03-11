import React, {Component} from 'react';

class SinglePost extends Component {
    render() {
        return (
            <div className="modal fade" id="modalSinglePost" tabIndex="-1" role="dialog"
                 aria-labelledby="singlePostTitle"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered myModalWidth" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="singlePostTitle">{this.props.post.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div key={this.props.post.id} className="modal-body">
                            <div className="card">
                                <div className="card-body">
                                    {this.HTMLAddImageIfExists()}
                                    <p className="card-text mt-3">{this.props.post.content}</p>
                                    <p className="card-text"
                                       style={{textAlign: "right"}}>{this.props.post.username}</p>
                                    <hr/>
                                    {this.HTMLAddPostingCommentForm()}
                                    {this.HTMLAddComments()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    HTMLAddPostingCommentForm = () => {
        if (this.props.username !== ""){
            return (
                <div className={"container"}>
                    <form className="was-validated">
                        <div className="mb-1">
                            <label htmlFor="CommentArea">Comment:</label>
                            <textarea className="form-control is-invalid" id="CommentArea"
                                      placeholder="Required example textarea" required/>
                        </div>
                    </form>
                    <button
                        className="btn btn-outline-info mt-1 mb-3"
                        onClick={this.postComment}>Post
                    </button>
                </div>
            )
        } else {
            return <div/>
        }
    };

    postComment = () => {
        let url = "http://localhost:8080/posts/comment/" + this.props.post.id;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                username: this.props.username,
                comment: document.getElementById("CommentArea").value,
                score: 0
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.props.updateComments();
    };

    HTMLAddImageIfExists = () => {
        if (this.props.post.photoURL !== "") {
            return <img src={this.props.post.photoURL} className="myImageV1"
                        alt={"postImage"}/>
        }
    };

    HTMLAddComments = () => {
        let i = 0;
        return this.props.post.comments.map(comment => (
            <div className="card mt-1" key={i++}>
                <div className="card-body">
                    <p>{comment.comment}</p>
                    <p className={"myFloatRight"}>posted by: {comment.username}</p>
                </div>
            </div>
        ));
    }
}

export default SinglePost;