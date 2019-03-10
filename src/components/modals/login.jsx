import React, { Component } from 'react';

class Login extends Component {
    state = {};

    logIn = () => {
        fetch("http://localhost:8080/account/login", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                username: document.getElementById("loginUsername").value,
                password: document.getElementById("loginPassword").value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => this.props.updateCurrentId(response))
            .then(this.props.updateCurrentUser(document.getElementById("loginUsername").value))
            .catch(error => console.error('Error:', error));
    };

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
                                    <textarea className="form-control" id="loginUsername" name="loginUsername" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="loginPassword">Password</label>
                                    <textarea className="form-control" id="loginPassword" name="loginPassword"
                                        required/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-outline-info" data-dismiss="modal" onClick={this.logIn}>Log in</button>
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