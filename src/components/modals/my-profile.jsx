import React, {Component} from 'react';

class MyProfile extends Component {
    state = {};

    render() {
        return (
            <div className="modal fade" id="myProfile" tabIndex="-1" role="dialog" aria-labelledby="TitleUsername"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="TitleUsername">{this.props.username}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="was-validated">
                                <div className="mb-3">
                                    <label htmlFor="profileUsername">Username</label>
                                    <textarea className="form-control" id="profileUsername" name="profileUsername"
                                              placeholder={this.props.username}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="profilePassword">Password</label>
                                    <input type="password" className="form-control" id="profilePassword"
                                           name="profilePassword" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="retypePassword">Retype password</label>
                                    <input type="password" className="form-control" id="retypePassword"
                                           name="retypePassword" required/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-danger"
                                            data-dismiss="modal">Close
                                    </button>
                                    <button type="submit" className="btn btn-outline-info" data-dismiss="modal"
                                            onClick={this.changeProfile}>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeProfile = () => {
        if (document.getElementById("profilePassword").value === document.getElementById("retypePassword").value) {
            fetch("http://localhost:8080/account", {
                method: 'POST', // or 'PUT'
                body: JSON.stringify({
                    id: this.props.id,
                    username: document.getElementById("profileUsername").value,
                    password: document.getElementById("profilePassword").value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .then(this.props.updateCurrentUser(document.getElementById("profileUsername").value))
                .catch(error => console.error('Error:', error));
        } else alert("Passwords don't match!");
    };
}

export default MyProfile;
