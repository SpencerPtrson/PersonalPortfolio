import { Container, Row, Col, Button } from "react-bootstrap";

export default function IndexPage() {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={{ span: 4, offset: 4 }}
          align="center"
          style={{
            backgroundColor: `rgba(129, 29, 29, 0.8)`,
            color: "white",
            border: "1px solid white",
          }}
        >
            AA
        </Col>
      </Row>
    </Container>
  );
}
