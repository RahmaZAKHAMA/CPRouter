import React from 'react'
import { Button, Card } from 'react-bootstrap';
import RateMovie from "./Rating";
import { Link } from 'react-router-dom';
const Moviecard = ({ movie}) => {
  return (
    <div style={{ margin: "2%" }}>
      <Card style={{ width: "18rem", height: "600px" }}>
        <Card.Img
          style={{ height: "300px" }}
          variant="top"
          src={movie.posterUrl}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>
            <RateMovie ratingInput={movie.rate} isRating={true} />
          </Card.Text>
          <Link to={`/movie/${movie.id}`}>
            <Button variant="primary">Description</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard