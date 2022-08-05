import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Home</Card.Title>
        <Card.Text>
          <img
            src="https://media.primicias.ec/2020/03/30100838/banco.png"
            alt=""
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
