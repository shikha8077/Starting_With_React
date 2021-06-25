import React, { Component } from "react";

export default class Emp2 extends Component {
  state = {
    employees: [
      {
        name: "JackSmith",
        level: 2,
        dept: "Tech",
        designation: "Manager",
        salary: 24000,
      },
      {
        name: "MaryRobbins",
        level: 3,
        dept: "Fin",
        designation: "Manager",
        salary: 28000,
      },
      {
        name: "SteveWilliams",
        level: 4,
        dept: "Ops",
        designation: "President",
        salary: 35000,
      },
      {
        name: "BobAndrews",
        level: 1,
        dept: "Fin",
        designation: "Trainee",
        salary: 16500,
      },
      {
        name: "DaveMartin",
        level: 2,
        dept: "Fin",
        designation: "Manager",
        salary: 21700,
      },
      {
        name: "JuliaClarke",
        level: 3,
        dept: "Ops",
        designation: "Manager",
        salary: 26900,
      },
      {
        name: "KathyJones",
        level: 4,
        dept: "Tech",
        designation: "President",
        salary: 42500,
      },
      {
        name: "TomBresnan",
        level: 2,
        dept: "Tech",
        designation: "Manager",
        salary: 22200,
      },
    ],
  };
  render() {
    let empyArray = [...this.state.employees];
    console.log(empyArray.length);
    empyArray.reduce((acc, curr) => {
      console.log(acc, "", curr);
    });

    let techArray = empyArray.filter((data) => data.dept === "Tech");
    console.log(techArray.length);

    let salary = empyArray.reduce((acc, curr) => {
      return acc + curr.salary;
    }, 0);

    console.log(salary);

    let avgSalary = empyArray.reduce((acc, curr) => {
      return acc + curr.salary / empyArray.length;
    }, 0);
    console.log(avgSalary);

    let maxSalary = empyArray.reduce((acc, curr) => {
      console.log(acc, "", curr.salary);
      if (acc > curr.salary) return acc;
      else return curr.salary;
    });
    console.log(maxSalary);
    return <div></div>;
  }
}
