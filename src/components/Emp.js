import React, { Component } from "react";

export default class Emp extends Component {
  state = {
    employees: [
      {
        name: "Jack",
        level: 2,
        dept: "Tech",
        designation: "Manager",
        salary: 24000,
      },
      {
        name: "Mary",
        level: 3,
        dept: "Fin",
        designation: "Manager",
        salary: 28000,
      },
      {
        name: "Steve",
        level: 4,
        dept: "Ops",
        designation: "President",
        salary: 35000,
      },
      {
        name: "Bob",
        level: 1,
        dept: "Fin",
        designation: "Trainee",
        salary: 16500,
      },
      {
        name: "Dave",
        level: 2,
        dept: "Fin",
        designation: "Manager",
        salary: 21700,
      },
      {
        name: "Julia",
        level: 3,
        dept: "Ops",
        designation: "Manager",
        salary: 26900,
      },
      {
        name: "Kathy",
        level: 4,
        dept: "Tech",
        designation: "President",
        salary: 42150,
      },
      {
        name: "Tom",
        level: 2,
        dept: "Tech",
        designation: "Manager",
        salary: 22200,
      },
    ],
  };
  sortFn(a, b) {
    return a.name.localeCompare(b.name);
  }
  render() {
    let array = [...this.state.employees];
    let tempArray = array.filter((data) => data.level > 1);
    tempArray.sort(this.sortFn);

    console.log(tempArray);
    return <div>{tempArray.map((data) => data.name)}</div>;
  }
}
