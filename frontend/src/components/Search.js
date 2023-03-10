import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row
              className="me-auto"
              style={{ marginBottom: "80px", marginTop: "50px" }}
            >
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(event) => setWord(event.target.value)}
                  placeholder="Search for new image..."
                ></Form.Control>
              </Col>
              <Col>
                <Button variant="dark" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
