import React from "react";
import PostsForm from "./PostsForm";
import PostsList from "./PostsList";
import Swal from "sweetalert2";
import PostsFormWatch from "./PostsFormWatch";

class Posts extends React.Component {
  state = {
    posts: [],
    postsCurrent: { title: "", body: "", id: null },
    comments: [],
    showModalDetails: false,
    formShow: false,
    enabledAction: true,
  };

  handleDelete = (item) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${item.id}`;

    const requestOptions = {
      method: "DELETE",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully deleted",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  handleEdit = (item) => {
    this.setState({
      postsCurrent: item,
      formShow: true,
      enabledAction: false,
    });
  };
  handleWatch = (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ comments: data });
      });

    this.setState({
      showModalDetails: true,
      enabledAction: false,
      postsCurrent: { title: "", body: "", id: id },
    });
  };

  handleAdd = () => {
    this.setState({
      formShow: true,
      enabledAction: false,
      postsCurrent: { title: "", body: "", id: null },
    });
  };

  handleCancel = (item) => {
      this.setState({
      postsCurrent: null,
      formShow: false,
      enabledAction: true,
    });
  };

  handleCancelDetails = (item) => {
    this.setState({
      postsCurrent: null,
      showModalDetails: false,
      enabledAction: true,
    });
  };

  handlePosts = (posts) => {
    this.setState({
      posts: posts,
    });
  };

  handleSave = (item) => {
    if (item.id) {
      const url = `https://jsonplaceholder.typicode.com/posts/${item.id}`;
      const requestOptions = {
        method: "PUT", 
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          let postsUpdate = [];
          this.state.posts.forEach((e) => {
            if (e.id === data.id) {
              postsUpdate.push(data);
            } else {
              postsUpdate.push(e);
            }
          });

          this.setState({ posts: postsUpdate });
        });

      this.setState({ formShow: false, enabledAction: true });
    } else {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(item), 
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({ formShow: false, enabledAction: true });
        });
    }
  };
  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  render() {
    const {
      posts,
      formShow,
      showModalDetails,
      comments,
      postsCurrent,
      enabledAction,
    } = this.state;

    const row = { display: "flex" };
    const columnList = { flex: "70%" };
    const columnForm = { flex: "30%" };

    return (
      <>
        <div>
          <div>
            <PostsList
              posts={posts}
              handleWatch={this.handleWatch}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              handleAdd={this.handleAdd}
              enabledAction={enabledAction}
            />
          </div>
          <div>
            {formShow && (
              <PostsForm
                {...postsCurrent}
                handleSave={this.handleSave}
                handleCancel={this.handleCancel}
              />
            )}
          </div>
          <div>
            {showModalDetails && (
              <PostsFormWatch
                comments={comments}
                handleSave={this.handleSave}
                handleCancelDetails={this.handleCancelDetails}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Posts;
