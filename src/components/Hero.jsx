import { Col, Container, Row } from "react-bootstrap";

export default function Hero({ title, lead }) {
  return (
<Container fluid className='text-center py-5, bg-light'>
<Row className='py-lg-5'>
<Col>
<h1>{title}</h1>
<p>{lead}</p>
</Col>
</Row>
</Container>
  );
}
