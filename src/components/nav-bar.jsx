import React, {Component} from "react";
import Posts from "./posts";
import NewPost from "./modals/new-post";
import Login from "./modals/login";
import CreateAccount from "./modals/create-account";
import MyProfile from "./modals/my-profile";
import SinglePost from "./modals/single-post";
import ReactDOM from "react-dom";

class NavBar extends Component {
    state = {
        username: "",
        id: "",
        clickedPostId : "",
        items: []
    };

    constructor() {
        super();
        this.getPosts(`http://localhost:8080/posts/all`);
    }

    // Runs forever if onClick={this.getPosts("http://localhost:8080/posts/all")}
    getPosts = (url) => {
        fetch(url)
            .then(result => result.json())
            .then(myItems => this.setState({items: myItems}));
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
        this.getPosts(`http://localhost:8080/posts/all`);
    };

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand cursorPointer">Post it!</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {this.navbarPostsHtml()}
                        {this.navbarAccountHtml()}
                    </div>
                </nav>
                <Posts items={this.state.items} updateClickedPostId={this.updateClickedPostId}/>
                <Login updateCurrentUser={this.updateCurrentUser} updateCurrentId={this.updateCurrentId}/>
                <NewPost updatePosts={this.updatePosts} state={this.state}/>
                <CreateAccount/>
                <MyProfile username={this.state.username} id={this.state.id} updateCurrentUser={this.updateCurrentUser}
                           updateCurrentId={this.updateCurrentId}/>
            </React.Fragment>
        );
    }

    componentDidMount(){
        let fakePost = {
            comments: [],
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, lorem quis scelerisque ultrices, augue velit gravida lectus, at fringilla erat mauris eget magna. Morbi ut odio sed ligula ali…",
            id: "5c83ff45bc7e6309ac7cdc74",
            photoURL: "",
            title: "Title 1",
            username:"admin",
        };
        ReactDOM.render(<SinglePost post={fakePost}/>, document.getElementById("myBody"));
    }

    componentDidUpdate(prevProps,prevState){
        if (this.state.clickedPostId !== prevState.clickedPostId) {
            let post = this.findPostById();
            ReactDOM.render(<SinglePost post={post}/>, document.getElementById("myBody"));
        }
    }

    findPostById= () =>{
        return this.state.items.find(item => item.id === this.state.clickedPostId);
    };

    updateClickedPostId = (clickedPostId) => {
        this.setState({clickedPostId});
    };

    navbarPostsHtml = () => {
        return (
            <ul className="navbar-nav mr-auto">
                <li>
                    <button className="btn btn-outline-info my-2 my-lg-0 ml-2" data-toggle="modal"
                            data-target="#exampleModalCenter">
                        New Post
                    </button>
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
                            <a className="dropdown-item" data-toggle="modal" data-target="#myProfile">My Profile</a>
                            <a className="dropdown-item" onClick={this.logOut}>Log out</a>
                        </div>
                    </li>
                </ul>
            )
        }
    };

    logOut = () => {
        this.setState({username: ""});
    }

}

export default NavBar;
