import React, { Component } from "react";

export default class Products extends Component {
  state = {
    products: [
      { name: "Pepsi", quantity: 10, sales: 20 },
      { name: "5Star", quantity: 7, sales: 9 },
      { name: "Maggi", quantity: 41, sales: 22 },
      { name: "Perk", quantity: 10, sales: 7 },
      { name: "Coke", quantity: 18, sales: 50 },
    ],
  };
  sortfn(a, b) {
    return a.sales - b.sales;
  }

  render() {
    let arry = [...this.state.products];

    arry.sort(this.sortfn);
    console.log(this.sortfn);
    console.log(arry);

    return (
      <div>
        <h2>List of items</h2>
        {arry.map((product) => (
          <li>{product.name}</li>
        ))}
        <h2>products Details</h2>
        {arry.map((product) => (
          <div>
            <li>
              <span>
                {" "}
                Name:
                {product.name}
              </span>
              ,
              <span>
                quantity:
                {product.quantity}
              </span>
              ,
              <span>
                Sales:
                {product.sales}
              </span>
            </li>
            {/* <li>{product.quantity}</li>
            <i>{product.sales}</i> */}
          </div>
        ))}
        <div>{arry.sales}</div>
      </div>
    );
  }
}
