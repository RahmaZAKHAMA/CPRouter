import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "./moviesData";
const Description = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const [movie, setmovie] = useState({});
  useEffect(() => {
    setmovie(moviesData.find((movie) => movie.id === +params.id));
  }, [params.id]);
  console.log(movie);
  return (
    <div>
      <Container style={{ margin: "10%" }}>
        <Row>
          <Col sm={8}>{movie.description}</Col>
          <Col sm={4}>
            <iframe
              src={movie.trailer}
              frameborder="0"
              title={movie.title}
            ></iframe>
          </Col>
        </Row>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>{" "}
      </Container>
    </div>
  );
};

export default Description;
