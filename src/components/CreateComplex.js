import React, { Component } from "react";
import { Grid, Row, Col, Container, Button, Table } from "react-bootstrap";

export default class CreateComplex extends Component {
  state = {
    Data: [
      ["A", "B", "C", 1, 2, 3],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ["M", "N", 0, 1, 2],
    ],
    setData: [],
    flag: true,
    string: "",
  };
  handleClick = (data) => {
    // console.log(data);
    let localArray = [];
    // console.log(this.state.Data[0]);
    if (data == "code1") {
      localArray = this.state.Data[0];
    } else if (data === "code2") {
      localArray = this.state.Data[1];
    } else if (data === "code3") {
      localArray = this.state.Data[2];
    }
    console.log(localArray);
    this.setState({ setData: localArray, flag: false });
  };
  handleInput = (p) => {
    let localString = this.state.string;
    localString = localString + p;
    this.setState({ string: localString });
  };
  render() {
    return (
      <div>
        <h3> Create New Code </h3>
        {this.state.flag == true ? (
          <div>
            <Button variant="primary" onClick={() => this.handleClick("code1")}>
              Code Abc123{" "}
            </Button>
            <Button variant="primary" onClick={() => this.handleClick("code2")}>
              Code 0-9{" "}
            </Button>
            <Button variant="primary" onClick={() => this.handleClick("code3")}>
              Code MN012{" "}
            </Button>
            <br />
          </div>
        ) : (
          <div>
            {" "}
            {this.state.setData.map((p) => (
              <span onClick={() => this.handleInput(p)}>{p}</span>
            ))}
            <p>data is :{this.state.string}</p>
          </div>
        )}
      </div>
    );
  }
}
