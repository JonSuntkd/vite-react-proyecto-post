import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import useUser from "../Context/LoginContext/Hooks/useContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(email, password);
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <br></br>
        <h1>Proyecto React-Vite POST</h1>
        <img
          src="https://media.primicias.ec/2020/03/30100838/banco.png"
          alt=""
        />
        <br></br><br></br>
        <Card.Title>
          <h1>INGRESA AL SISTEMA</h1>
        </Card.Title>
        <Card.Text>
          Ingrese su email y la contraseña para iniciar sesión
        </Card.Text>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <br></br>
          <br></br>
          <Button onClick={() => onLogin({ user: email, password: password })}>
            Inicio de sesión
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
