import React, { Component } from 'react';

class CreateAccount extends Component {
    state = {}

    postMe = () => {
        console.log(document.getElementById("createAccUsername").value + " " + document.getElementById("CreateAccPassword").value)
        fetch("http://localhost:8080/account", {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify({
                title: document.getElementById("createAccUsername").value,
                content: document.getElementById("CreateAccPassword").value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className="modal fade" id="createAccount" tabIndex="-1" role="dialog" aria-labelledby="createAccountTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createAccountTitle">New account</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="was-validated">
                                <div className="mb-3">
                                    <label htmlFor="createAccUsername">Username</label>
                                    <textarea className="form-control" id="createAccUsername" name="createAccUsername" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="CreateAccPassword">Password</label>
                                    <textarea className="form-control" id="CreateAccPassword" name="CreateAccPassword"
                                        required></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={this.postMe}>Create</button>
                                </div>
                            </form>
                        </div >
                    </div >
                </div >
            </div >
        );
    }
}

export default CreateAccount;