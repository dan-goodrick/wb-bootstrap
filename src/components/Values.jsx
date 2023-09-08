import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Value({ title, description, action, icon, style }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="success" className="mt-auto ">
        <i className={icon} style={{...style, "padding":10, }}></i>
          <span>
          {action}
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function Values({ values }) {
  return (
    <Container>
      <Row>
        {values.map(({ title, description, action, icon, style }) => (
          <Col key={title}>
            <Value
              title={title}
              description={description}
              action={action}
              icon={icon}
              style={style}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
