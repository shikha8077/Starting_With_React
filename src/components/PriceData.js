import React, { Component } from "react";
import { Grid, Row, Col, Container, Button, Table } from "react-bootstrap";

export default class PriceData extends Component {
  state = {
    priceData: [
      { name: "Perk", category: "Food", oldPrice: 10, newPrice: 10 },
      { name: "5Star", category: "Food", oldPrice: 15, newPrice: 12 },
      { name: "Pepsi", category: "Drink", oldPrice: 20, newPrice: 22 },
      { name: "Maggi", category: "Food", oldPrice: 12, newPrice: 15 },
      { name: "Coke", category: "Drink", oldPrice: 20, newPrice: 20 },
      { name: "Gems", category: "Food", oldPrice: 10, newPrice: 10 },
      { name: "7Up", category: "Drink", oldPrice: 15, newPrice: 17 },
      { name: "Lindt", category: "Food", oldPrice: 80, newPrice: 90 },
      { name: "Nutties", category: "Food", oldPrice: 20, newPrice: 18 },
      { name: "Slice", category: "Drink", oldPrice: 18, newPrice: 16 },
    ],
    setData: 0,
    copiedArray: [],
  };
  handleClick = (sort) => {
    this.setState({ setData: sort });
    console.log(sort);
  };
  handleSort() {
    let localArray = [...this.state.copiedArray];
    if (this.state.setData === "name") {
      return localArray.sort(this.sortName);
    } else if (this.state.setData === 0) {
      return localArray;
    } else if (this.state.setData === "category") {
      return localArray.sort(this.sortCategory);
    } else if (this.state.setData === "oldPrice") {
      return localArray.sort(this.setOldPrice);
    } else if (this.state.setData === "newPrice") {
      return localArray.sort(this.setNewPrice);
    }
  }
  setNewPrice(a, b) {
    return a.newPrice - b.newPrice;
  }
  setOldPrice(a, b) {
    return a.oldPrice - b.oldPrice;
  }
  sortCategory(a, b) {
    return a.category.localeCompare(b.category);
  }
  sortName(a, b) {
    return a.name.localeCompare(b.name);
  }
  componentDidMount() {
    let localArray = this.state.priceData;
    this.setState({ copiedArray: localArray });
  }
  handleFood = () => {
    let localArray = [...this.state.priceData];
    let tempArray = localArray.filter((data) => data.category === "Food");
    this.setState({ copiedArray: tempArray });
  };
  handleDrink = () => {
    let localArray = [...this.state.priceData];
    let tempArray = localArray.filter((data) => data.category === "Drink");
    this.setState({ copiedArray: tempArray });
  };
  handleIncrease = () => {
    let localArray = [...this.state.priceData];
    let tempArray = localArray.filter((data) => data.oldPrice > data.newPrice);
    this.setState({ copiedArray: tempArray });
  };
  handleDecrease = () => {
    let localArray = [...this.state.priceData];
    let tempArray = localArray.filter((data) => data.newPrice > data.oldPrice);
    this.setState({ copiedArray: tempArray });
  };
  handleSame = () => {
    let localArray = [...this.state.priceData];
    this.setState({ copiedArray: localArray });
  };
  render() {
    let localArray = this.handleSort();
    console.log(localArray);
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleFood()}>
          Food
        </Button>
        <Button variant="primary" onClick={() => this.handleDrink()}>
          Drink
        </Button>
        <Button variant="primary" onClick={() => this.handleIncrease()}>
          Increase
        </Button>
        <Button variant="primary" onClick={() => this.handleDecrease()}>
          Decrease
        </Button>
        <Button variant="primary" onClick={() => this.handleSame()}>
          Same
        </Button>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th onClick={() => this.handleClick("name")}>Name</th>
              <th onClick={() => this.handleClick("category")}>category</th>
              <th onClick={() => this.handleClick("oldPrice")}>old_Price</th>
              <th onClick={() => this.handleClick("newPrice")}>New_Price</th>
            </tr>
          </thead>
          {localArray.map((product) => (
            <tbody>
              <td> {product.name}</td>
              <td>{product.category}</td>
              <td>{product.oldPrice}</td>
              <td>{product.newPrice}</td>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}
