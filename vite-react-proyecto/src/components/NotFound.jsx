import Card from 'react-bootstrap/Card';
import imagen from "../assets/404.png";

function NotFound() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>BP Proyecto React</Card.Title>
        <Card.Text>
          <img
            src={imagen}
            style={{ width: "50%", height: "auto", marginTop: "20px" }}
            alt="page not found"
            className="error-img"
          ></img>
          <h1>404</h1>
          <h2>Página no encontrada</h2>
          <p>La página que estás buscando no existe</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NotFound;
