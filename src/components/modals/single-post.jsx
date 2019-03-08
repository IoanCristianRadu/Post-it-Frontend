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
                            <div key={this.props.state.clickedPostId}
                                 className={"cursorPointer"}
                                 data-toggle="modal" data-target="#modalSinglePost">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title myTextAlignCenter">{this.props.state.clickedPostId}</h5>
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
        if (this.props.items[0].photoURL !== "") {
            return <img src={this.props.items[0].photoURL} className="center"
                        alt={"postImage"}/>
        }
    }

    addComments = () => {
        return this.props.items[0].comments.map(comment => (
            <p>{comment}</p>
        ));
    }

}

export default SinglePost;