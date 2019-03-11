import React, {Component} from "react";
import V1posts from "./views/view-one/V1posts";
import NewPost from "./modals/new-post";
import Login from "./modals/login";
import CreateAccount from "./modals/create-account";
import MyProfile from "./modals/my-profile";
import SinglePost from "./modals/single-post";
import ReactDOM from "react-dom";
import V2posts from "./views/view-two/V2posts";

class NavBar extends Component {
    state = {
        username: "",
        id: "",
        clickedPostId: "",
        items: [],
        viewStyle: 0
    };

    constructor() {
        super();
        this.getPosts(`http://localhost:8080/posts/all`);
    };

    // Runs forever if onClick={this.getPosts("http://localhost:8080/posts/all")}
    getPosts = (url) => {
        fetch(url)
            .then(result => result.json())
            .then(myItems => this.setState({items: myItems}));
    };

    componentDidMount() {
        let fakePost = {
            comments: [],
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, lorem quis scelerisque ultrices, augue velit gravida lectus, at fringilla erat mauris eget magna. Morbi ut odio sed ligula ali…",
            id: "5c83ff45bc7e6309ac7cdc74",
            photoURL: "",
            title: "Title 1",
            username: "admin",
        };
        ReactDOM.render(<SinglePost post={fakePost} username={this.state.username}
                                    updateComments={this.updateComments}/>, document.getElementById("myBody"));
        ReactDOM.render(<V1posts items={this.state.items}
                                 updateClickedPostId={this.updateClickedPostId}/>, document.getElementById("posts"));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.clickedPostId !== prevState.clickedPostId) {
            let post = this.findPostById();
            ReactDOM.render(<SinglePost post={post} username={this.state.username}
                                        updateComments={this.updateComments}/>, document.getElementById("myBody"));
        }

        if (this.state.viewStyle !== prevState.viewStyle || this.state.items !== prevState.items) {
            if(this.state.viewStyle === 0){
                ReactDOM.render(<V1posts items={this.state.items}
                                         updateClickedPostId={this.updateClickedPostId}/>, document.getElementById("posts"));
            } else if (this.state.viewStyle === 1){
                ReactDOM.render(<V2posts items={this.state.items}
                                         updateClickedPostId={this.updateClickedPostId}/>, document.getElementById("posts"));
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand cursorPointer">Post it!</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {this.navbarPostsHtml()}
                        <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.switchView}>
                            Switch view
                        </button>
                        {this.navbarAccountHtml()}
                    </div>
                </nav>
                <div id={"posts"}/>
                <Login updateCurrentUser={this.updateCurrentUser} updateCurrentId={this.updateCurrentId}/>
                <NewPost updatePosts={this.updatePosts} state={this.state}/>
                <CreateAccount/>
                <MyProfile username={this.state.username} id={this.state.id}
                           updateCurrentUser={this.updateCurrentUser}
                           updateCurrentId={this.updateCurrentId}/>
            </React.Fragment>
        );
    }

    switchView = () => {
        if (this.state.viewStyle === 0) {
            this.setState({viewStyle: 1})
        } else {
            this.setState({viewStyle: 0})
        }
    };

    navbarAccountHtml = () => {
        if (this.state.username === "") {
            return (
                <React.Fragment>
                    <ul className="navbar-nav">
                        <li>
                            <button className="btn btn-outline-info my-2 my-lg-0 ml-2" data-toggle="modal"
                                    data-target="#login">
                                Log in
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-outline-info my-2 my-lg-0 ml-2" data-toggle="modal"
                                    data-target="#createAccount">
                                Create account
                            </button>
                        </li>
                    </ul>
                </React.Fragment>
            )
        } else {
            return (
                <ul className="navbar-nav" style={{paddingRight: 75}}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <button type="button" className="btn btn-primary my-2 my-lg-0 ml-2">
                                {this.state.username}
                            </button>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item cursorPointer" data-toggle="modal" data-target="#myProfile">My
                                Profile</a>
                            <a className="dropdown-item cursorPointer" onClick={this.logOut}>Log out</a>
                        </div>
                    </li>
                </ul>
            )
        }
    };

    logOut = () => this.setState({username: ""});

    navbarPostsHtml = () => {
        return (
            <ul className="navbar-nav mr-auto">
                <li>
                    {this.newPostButton()}
                </li>
                <li>
                    <div className="my-2 my-lg-0 ml-2" style={{display: "inline-flex"}}>
                        <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"
                               id="search"/>
                        <button className="btn btn-outline-info my-2 my-sm-0" onClick={this.getTitle}>
                            Search
                        </button>
                    </div>
                </li>
            </ul>
        )
    };

    newPostButton = () => {
        if (this.state.username === "") {
            return (
                <div/>
            );
        } else {
            return (
                <button className="btn btn-outline-info my-2 my-lg-0 ml-2" data-toggle="modal"
                        data-target="#exampleModalCenter">
                    New Post
                </button>
            );
        }
    };

    getTitle = () => {
        if (document.getElementById("search").value === "") {
            this.getPosts("http://localhost:8080/posts/all");
        } else {
            this.getPosts("http://localhost:8080/posts/title/" + document.getElementById("search").value);
        }
    };

    updateCurrentUser = (username) => {
        this.setState({username});
    };

    updateCurrentId = (id) => {
        this.setState({id});
    };

    updatePosts = () => {
        setTimeout(() => {
            this.getPosts("http://localhost:8080/posts/all")
        }, 50);
    };

    findPostById = () => {
        return this.state.items.find(item => item.id === this.state.clickedPostId);
    };

    updateClickedPostId = (clickedPostId) => {
        this.setState({clickedPostId});
    };

    updateComments = () => {
        setTimeout(() => {
            this.getPosts("http://localhost:8080/posts/all");

        }, 50);
        setTimeout(() => {
            let post = this.findPostById();
            ReactDOM.render(<SinglePost post={post} username={this.state.username}
                                        updateComments={this.updateComments}/>, document.getElementById("myBody"));
        }, 100);
    }
}

export default NavBar;
