import React, { Component } from "react";

export default class ButtonClick extends Component {
  state = {
    clicked: 0,
    string: "",
  };

  handleClick = (abc) => {
    let add = this.state.clicked + abc;
    console.log(abc);
    this.setState({ clicked: add });
  };
  handleClickChange = (abc) => {
    let change = this.state.string + abc;
    console.log(change);
    this.setState({ string: change });
  };
  handleBackSpace = () => {
    let change = this.state.string;

    let backspace = change.slice(0, change.length - 1);
    console.log(backspace);
    this.setState({ string: backspace });
  };
  Clear = () => {
    this.setState({ string: "" });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(1)}>1</button>
        <button onClick={() => this.handleClick(10)}>10</button>
        <button onClick={() => this.handleClick(100)}>100</button>
        <br />
        clicked: {this.state.clicked}
        <br />
        <br />
        <button onClick={() => this.handleClickChange("A")}>A</button>
        <button onClick={() => this.handleClickChange("B")}>B</button>
        <button onClick={() => this.handleClickChange("C")}>C</button>
        <button onClick={() => this.handleClickChange("D")}>D</button>
        <br />
        clicked: {this.state.string}
        <button onClick={() => this.handleBackSpace()}>backspace</button>
        <button onClick={() => this.Clear()}>clear</button>
      </div>
    );
  }
}
