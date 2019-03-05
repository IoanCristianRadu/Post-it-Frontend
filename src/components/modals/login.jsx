import React, { Component } from 'react';

class Login extends Component {
    state = {}

    postMe = () => {
        fetch("http://localhost:8080/posts", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                title: document.getElementById("loginUsername").value,
                content: document.getElementById("loginPassword").value
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
            <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="loginTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginTitle">Log in</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="was-validated">
                                <div className="mb-3">
                                    <label htmlFor="loginUsername">Username</label>
                                    <textarea className="form-control" id="loginUsername" name="loginUsername" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="loginPassword">Password</label>
                                    <textarea className="form-control" id="loginPassword" name="loginPassword"
                                        required></textarea>
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

export default Login;