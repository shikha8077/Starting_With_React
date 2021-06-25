import React, { Component } from "react";
import { Grid, Row, Col, Container, Button, Table } from "react-bootstrap";

export default class ProductTable extends Component {
  state = {
    products: [
      { name: "Perk", price: 10, sales: 7 },
      { name: "5Star", price: 15, sales: 9 },
      { name: "Pepsi", price: 20, sales: 20 },
      { name: "Maggi", price: 12, sales: 15 },
      { name: "Coke", price: 20, sales: 50 },
      {
        name: "Lindt",
        price: 80,
        sales: 4,
      },
    ],
    copiedArray: [],
    setSales: 0,
    setPrice: 0,
  };
  handleClick = (sort) => {
    // let sort = this.state.products;
    console.log(sort);
    this.setState({ setPrice: sort });
  };
  handleSort() {
    let localArray = [...this.state.copiedArray];
    if (this.state.setPrice === "name") {
      return localArray.sort(this.sortName);
    } else if (this.state.setPrice === 0) {
      return localArray;
    } else if (this.state.setPrice === "price") {
      return localArray.sort(this.sortPrice);
    } else if (this.state.setPrice === "sales") {
      return localArray.sort(this.sortSales);
    } else if (this.state.setPrice === "value") {
      return localArray.sort(this.setValue);
    }
  }
  setValue(a, b) {
    let Asales = a.sales * a.price;
    let bSales = b.sales * b.price;
    return Asales - bSales;
  }
  sortSales(a, b) {
    return a.sales - b.sales;
  }
  sortPrice(a, b) {
    return a.price - b.price;
  }
  sortName(a, b) {
    return a.name.localeCompare(b.name);
  }
  componentDidMount() {
    let localArray = this.state.products;
    this.setState({ copiedArray: localArray });
  }

  handlePrice = () => {
    let localArray = [...this.state.products];
    let tempArray = localArray.filter((data) => data.price >= 15);
    this.setState({ copiedArray: tempArray });
  };
  handleSales = () => {
    let localArray = [...this.state.products];
    let tempArray = localArray.filter((data) => data.sales >= 10);
    console.log(tempArray);
    this.setState({ copiedArray: tempArray });
  };
  handleValue = () => {
    let localArray = this.state.products;
    let tempArray = localArray.filter((data) => data.sales * data.price >= 100);
    this.setState({ copiedArray: tempArray });
  };

  render() {
    let localArray = this.handleSort();
    console.log(localArray);
    console.log(this.state.setPrice);
    return (
      <div>
        <Button variant="primary" onClick={() => this.handlePrice()}>
          Price &gt;= 15
        </Button>
        <Button variant="primary" onClick={() => this.handleSales()}>
          Sales&gt;=10
        </Button>
        <Button variant="primary" onClick={() => this.handleValue()}>
          Value&gt;=100
        </Button>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th onClick={() => this.handleClick("name")}>Name</th>
              <th onClick={() => this.handleClick("price")}>Price</th>
              <th onClick={() => this.handleClick("sales")}>Sales</th>
              <th onClick={() => this.handleClick("value")}>Value</th>
            </tr>
          </thead>
          {localArray.map((product) => (
            <tbody>
              <td> {product.name}</td>
              <td>{product.price}</td>
              <td>{product.sales}</td>
              <td>{product.sales * product.price}</td>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}
