import React, { Component } from 'react';

class NewPost extends Component {
    state = {}

    postMe = () => {
        fetch("http://localhost:8080/posts", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

        window.location.reload();
    }

    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">New post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="was-validated">
                                <div className="mb-3">
                                    <label htmlFor="Title">Title</label>
                                    <textarea className="form-control" id="title" name="title" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="content">Content</label>
                                    <textarea className="form-control" id="content" name="content"
                                        required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="content">photoURL</label>
                                    <textarea className="form-control" id="photoURL" name="photoURL" ></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.postMe}>Post</button>
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