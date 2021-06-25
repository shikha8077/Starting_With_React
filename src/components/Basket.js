import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Row, Col, Container, Button } from "react-bootstrap";

export default class Basket extends Component {
  state = {
    score: 0,
  };
  handleScore = (score) => {
    console.log(score);
    let totalScore = this.state.score + score;
    this.setState({ score: totalScore });
  };
  reset = () => {
    this.setState({ score: 0 });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>Team A</h2>
              {this.state.score}
              <br />
              <br />
              <Button variant="primary" onClick={() => this.handleScore(3)}>
                +3 Points
              </Button>{" "}
              <br />
              <br />
              <Button variant="primary" onClick={() => this.handleScore(2)}>
                +2 Points
              </Button>{" "}
              <br />
              <br />
              <Button variant="primary" onClick={() => this.handleScore(1)}>
                Free Throw
              </Button>{" "}
              <br />
              <br />
              <Button variant="primary" onClick={() => this.reset()}>
                Reset
              </Button>{" "}
              <br />
              <br />
            </Col>
            <Col>
              <h2>Team B</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
