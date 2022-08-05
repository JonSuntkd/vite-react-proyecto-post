import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Footer className="text-muted">
        <p>Copyright &copy;2022 Todos los derechos reservados</p>
      </Card.Footer>
    </Card>
  );
}

export default Footer;
