import React, { Component } from "react";

export default class Employee extends Component {
  state = {
    student: [
      {
        name: "sikha",
        hindi: 20,
        english: 50,
        math: 70,
      },
      {
        name: "shivani ",
        hindi: 30,
        english: 60,
        math: 90,
      },
      {
        name: "diksha",
        hindi: 50,
        english: 70,
        math: 90,
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.student.map((data) => (
          <div>
            <li>{data.name}</li>
            <li>{data.hindi}</li>
            <li>{data.english}</li>
            <li>{data.math}</li>
            <li>{data.hindi + data.english + data.math}</li>
            <li>
              {data.hindi + data.english + data.math > 200
                ? "A"
                : data.hindi + data.english + data.math > 150
                ? "B"
                : data.hindi + data.english + data.math > 120
                ? "C"
                : "D"}
            </li>
          </div>
        ))}
      </div>
    );
  }
}
