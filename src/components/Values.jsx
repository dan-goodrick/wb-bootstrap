import { Button, Card } from "react-bootstrap";

export default function Values({ values }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      {values.map(({ title, description, action }, index) => (
      <Card.Body key={index}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{action}</Button>
      </Card.Body>
        ))}
    </Card>
  );
}

