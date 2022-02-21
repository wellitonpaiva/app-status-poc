import Card from 'react-bootstrap/Card';
import "./StatusCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const StatusCard = () => {
  const statusData = [
    {
      service: "service 1",
      status: "RUNNING",
      lastRanOn: "today",
      exception: null,
      link: "localhost:8080"
    },
    {
      service: "service 2",
      status: "ERROR",
      lastRanOn: "today",
      exception: "Something bad happened",
      link: "localhost:8080"
    },
    {
      service: "service 3",
      status: "RUNNING",
      lastRanOn: "today",
      exception: null,
      link: "localhost:8080"
    },
    {
      service: "service 4",
      status: "NAH",
      lastRanOn: "today",
      exception: "baaaaaaaad, problem!",
      link: "localhost:8080"
    },
    {
      service: "service 5",
      status: "Not able to find service",
      lastRanOn: "today",
      exception: null,
      link: "localhost:8080"
    },
    {
      service: "service 6",
      status: "RUNNING",
      lastRanOn: "today",
      exception: null,
      link: "localhost:8080"
    }
  ]

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Body>
          <Card.Title>{card.service}</Card.Title>
          <Card.Text>Status: {card.status}</Card.Text>
          <Card.Text>Last Ran: {card.lastRanOn}</Card.Text>
          <Card.Text>Exception: {card.exception}</Card.Text>
          <Card.Text><a href={card.link}></a></Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{statusData.map(renderCard)}</div>;
};

export default StatusCard;