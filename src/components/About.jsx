import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./About.css";
import cards from "./cardJson.json";

const About = () => {
  console.log(cards);

  return (
    <div className="card-container">
      {cards.results.map((card) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title style={{ color: "#2127" }}>{card.title}</Card.Title>
              <Card.Text style={{ color: "#2127", fontSize: "13px" }}>{card.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default About;
