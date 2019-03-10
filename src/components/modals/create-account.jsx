import React, {Component} from 'react';

class CreateAccount extends Component {
    state = {};

    postMe = () => {
        if (document.getElementById("CreateAccPassword").value === document.getElementById("CreateAccPasswordRetype").value) {
            fetch("http://localhost:8080/account", {
                method: 'PUT', // or 'PUT'
                body: JSON.stringify({
                    username: document.getElementById("createAccUsername").value,
                    password: document.getElementById("CreateAccPassword").value,
                    comments: []
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
        } else {
            alert("Passwords do not match!");
        }
    };

    render() {
        return (
            <div className="modal fade" id="createAccount" tabIndex="-1" role="dialog"
                 aria-labelledby="createAccountTitle"
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
                                    <textarea className="form-control" id="createAccUsername" name="createAccUsername"
                                              required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="CreateAccPassword">Password</label>
                                    <input type="password" className="form-control" id="CreateAccPassword"
                                           name="CreateAccPassword" required/>
                                    <label htmlFor="CreateAccPasswordRetype" className={"mt-2"}>Retype Password</label>
                                    <input type="password" className="form-control" id="CreateAccPasswordRetype"
                                           name="CreateAccPasswordRetype" required/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-danger"
                                            data-dismiss="modal">Close
                                    </button>
                                    <button type="submit" className="btn btn-outline-info" data-dismiss="modal"
                                            onClick={this.postMe}>Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAccount;