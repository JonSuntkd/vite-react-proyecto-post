import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class PostsFormWatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSave(this.state);
    console.log(this.state.posts);
  };

  handleCancelDetails = (event) => {
    this.props.handleCancelDetails(this.state);
  };

  render() {
    const styleModal = {
      textAlign: "center",
    };

    let comments = [];
    for (let index = 0; index < this.props.comments.length; index++) {
      comments.push(
        <div key={index}>
          <h1> {this.props.comments[index].email}</h1>
          <p>{this.props.comments[index].body}</p>
        </div>
      );
    }
    return (
      <>
        <Modal show={true} onHide={this.handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title style={styleModal}>POSTS</Modal.Title>
          </Modal.Header>
          <Modal.Body>{comments}</Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              onClick={this.handleCancelDetails}
              className="btn btn-primary"
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default PostsFormWatch;
