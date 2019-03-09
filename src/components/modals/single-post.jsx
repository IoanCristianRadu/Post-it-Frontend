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
                            <h5 className="modal-title" id="singlePostTitle">New post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div key={this.props.post.id}
                                 className={"cursorPointer"}
                                 data-toggle="modal" data-target="#modalSinglePost">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title myTextAlignCenter">{this.props.post.id}</h5>
                                        <div key={this.props.post.id}
                                             className={"cursorPointer"}
                                             data-toggle="modal" data-target="#modalSinglePost">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title myTextAlignCenter">{this.props.post.title}</h5>
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