import React, {Component} from 'react';

class SinglePost extends Component {
    render() {
        return (
            <div className="modal fade" id="modalSinglePost" tabIndex="-1" role="dialog"
                 aria-labelledby="singlePostTitle"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
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
                                    {this.addImageIfExists()}
                                    <p className="card-text">{this.props.post.content}</p>
                                    <p className="card-text"
                                       style={{textAlign: "right"}}>{this.props.post.username}</p>
                                    {this.addComments()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addImageIfExists = () => {
        if (this.props.post.photoURL !== "") {
            return <img src={this.props.post.photoURL} className="center"
                        alt={"postImage"}/>
        }
    }

    addComments = () => {
        return this.props.post.comments.map(comment => (
            <p>{comment}</p>
        ));
    }

}

export default SinglePost;