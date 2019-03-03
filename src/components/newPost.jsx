import React, { Component } from 'react';

class NewPost extends Component {
    state = {}
    render() {
        return (
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">New post</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form class="was-validated">
                                <div class="mb-3">
                                    <label for="Title">Title</label>
                                    <textarea class="form-control" id="title" name="title" required>{this.props.content.title}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="content">Content</label>
                                    <textarea class="form-control" id="content" name="content"
                                        required>{this.props.content.content}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="content">photoURL</label>
                                    <textarea class="form-control" id="photoURL" name="photoURL" required>{this.props.content.photoURL}}</textarea>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary" data-dismiss="modal">Post</button>
                                </div>
                            </form>
                        </div >
                    </div >
                </div >
            </div >
        );
    }
}

export default NewPost;