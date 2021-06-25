import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Row, Col, Container, Button } from "react-bootstrap";

export default class AddNumber extends Component {
  state = {
    numbers: [1, 3, 5, 7],
    expression: "",
    calValue: 0,
  };
  handleAdd = (test) => {
    let add = this.state.calValue;
    let calvalues = this.state.calValue + test;
    let expressions = this.state.expression + test + "+";
    console.log(expressions);
    console.log(test);
    console.log(calvalues);
    this.setState({ expression: expressions, calValue: calvalues });
  };

  render() {
    console.log(this.state.calValue);
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleAdd(1)}>
          1
        </Button>{" "}
        <Button variant="primary" onClick={() => this.handleAdd(3)}>
          3
        </Button>{" "}
        <Button variant="primary" onClick={() => this.handleAdd(5)}>
          5
        </Button>{" "}
        <Button variant="primary" onClick={() => this.handleAdd(7)}>
          7
        </Button>{" "}
        <br /> <br />
        expressions: {this.state.expression}
        <br />
        <br />
        calValues:{this.state.calValue}
      </div>
    );
  }
}
