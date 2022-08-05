import React from "react";
import Table from "react-bootstrap/Table";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import Card from "react-bootstrap/Card";

class PostsList extends React.Component {
  render() {
    const { posts, handleEdit, handleDelete, handleAdd, handleWatch } =
      this.props;

    const items = posts.map((item) => {
      return (
        <tr key={item.id}>
          <td style={{ border: "1px solid" }}>{item.title}</td>
          <td style={{ border: "1px solid" }}>{item.body}</td>
          <td>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => handleWatch(item.id)}
            >
              POSTS
            </button>
            {this.props.enabledAction && (
              <MdModeEditOutline onClick={() => handleEdit(item)} />
            )}
            {this.props.enabledAction && (
              <FaTrashAlt onClick={() => handleDelete(item)} />
            )}
          </td>
        </tr>
      );
    });

    return (
      <>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>POST GESTION</Card.Title>
            <Card.Text>
              <br></br>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleAdd()}
              >
                Anadir
              </button>
              <br></br>
              <br></br>
              <br></br>
              <Table stripped bordered hover size="sm">
                <thead>
                  <tr>
                    <th style={{ border: "1px solid" }}>Title</th>
                    <th style={{ border: "1px solid" }}> Body</th>
                    <th style={{ border: "1px solid" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>{items}</tbody>
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default PostsList;
