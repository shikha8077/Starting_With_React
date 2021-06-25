import React, { Component } from "react";
import { Grid, Row, Col, Container, Button, Table } from "react-bootstrap";

export default class CreateCode extends Component {
  state = {
    Data: ["A", "B", "C", "1", "2", "3"],
    Newdata: "",
    mainArray: [],
  };
  handleInput = (data) => {
    console.log(data);
    let localData = this.state.Newdata;
    localData = localData + data;
    console.log(localData);
    this.setState({ Newdata: localData });
  };
  handleAdd = () => {
    let localObject = "";
    localObject = this.state.mainArray.find(
      (data) => data === this.state.Newdata
    );
    console.log(localObject);
    if (localObject != undefined) {
      alert("data is present");
    } else {
      let mainArray = [...this.state.mainArray, this.state.Newdata];
      this.setState({ mainArray, Newdata: "" });
      console.log(mainArray);
      console.log(this.state.Newdata);
    }
  };
  handleClear = () => {
    this.setState({ mainArray: [] });
  };
  render() {
    return (
      <div>
        <p>
          {" "}
          Entered Data is:
          {this.state.Newdata}
        </p>
        <div style={{ marginTop: "40px" }}>
          {this.state.Data.map((data) => (
            <span
              onClick={() => this.handleInput(data)}
              className="list"
              style={{
                padding: "20px",
                background: "cadetblue",
                color: "white",
                margin: "30px",
              }}
            >
              {data}
            </span>
          ))}
          <br />
          <br />
          <br />
          <Button pl-3 variant="primary" onClick={() => this.handleAdd()}>
            Add New Button
          </Button>

          <Button variant="primary" onClick={() => this.handleClear()}>
            Clear Button
          </Button>
          {this.state.mainArray.map((p) => (
            <li>{p}</li>
          ))}
        </div>
      </div>
    );
  }
}
