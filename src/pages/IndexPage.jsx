import { Container, Row, Col, Button } from "react-bootstrap";
import AboutMe from "../components/AboutMe";

export default function IndexPage() {
  return (
    <Container fluid style={{height: "100vh", backgroundColor: "aquamarine"}}>
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

      <Row>
          <Col>
            <AboutMe />
          </Col>
      </Row>

      
    </Container>
  );
}
