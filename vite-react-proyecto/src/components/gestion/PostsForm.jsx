import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class PostsForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body,
      posts:this.props.posts,
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
  };

  handleCancel = (event) => {
    this.props.handleCancel(this.state);
  }

  render() {
    const styleModal = {
      textAlign: "center"
    };
    return (
      <>
        <Modal show={true} onHide={this.handleCancel}>
        <Form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            {this.state.id?<Modal.Title style={styleModal}>EDIT</Modal.Title>:<Modal.Title style={styleModal}>CREATE</Modal.Title>}
          </Modal.Header>
          <Modal.Body>
           
              <Form.Group className="field">
                <Form.Label className="label">Title</Form.Label>
                <Form.Text className="control">
                  <Form.Control
                    className="input"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}/>
                </Form.Text>
              </Form.Group >
              <Form.Group className="field">
                <Form.Label className="label">Body</Form.Label>
                <Form.Text className="control">
                  <Form.Control
                    className="input"
                    type="text"
                    name="body"
                    value={this.state.body}
                    onChange={this.handleChange}/>
                </Form.Text>
              </Form.Group >
          </Modal.Body>
          <Modal.Footer>
          <Button type="submit" className="btn btn-primary">
                Guardar
              </Button>
              <Button type="button" onClick={this.handleCancel} className="btn btn-primary">
                Cancelar
              </Button>
          </Modal.Footer>
          </Form>
        </Modal>


      </>
    );
  }
}

export default PostsForm;