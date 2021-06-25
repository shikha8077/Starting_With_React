import React, { Component } from "react";
import { Grid, Row, Col, Container, Button } from "react-bootstrap";

export default class ProductDetails extends Component {
  state = {
    producs: [
      { name: "Pepsi", sales: 10 },
      { name: "Coke", sales: 7 },
      { name: "Maggi", sales: 0 },
      { name: "Gems", sales: 15 },
      { name: "5Star", sales: 0 },
    ],
    totalSale: 0,
    bestSeller: 0,
  };
  handleSales = (name, i) => {
    let localArray = this.state.producs;
    console.log(localArray);
    alert(name, "clicked");
    let saleIncrement = this.state.producs.find((p, index) => index === i);
    saleIncrement.sales++;
    localArray.splice(i, 1, saleIncrement);
    this.setState({ producs: localArray });
    console.log(saleIncrement);
  };
  handleReturn = (name, i) => {
    alert(name);
    let localArray = this.state.producs;

    let saleIncrement = this.state.producs.find((p, index) => index === i);
    saleIncrement.sales--;
    localArray.splice(i, 1, saleIncrement);
    this.setState({ producs: localArray });
  };
  handleTotalSales = () => {
    let localArray = this.state.producs;
    let total = localArray.reduce((acc, curr) => {
      return acc + curr.sales;
    }, 0);
    this.setState({ totalSale: total });
  };
  handleBestSeller = () => {
    let localArray = this.state.producs;
    let total = localArray.reduce((acc, curr) => {
      if (acc > curr.sales) return acc;
      else return curr.sales;
    });

    this.setState({ bestSeller: total });
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleTotalSales()}>
          Total Sales
        </Button>{" "}
        <Button variant="primary" onClick={() => this.handleBestSeller()}>
          Best Seller
        </Button>{" "}
        {this.state.producs.map((product, index) => (
          <div>
            <span>
              {" "}
              Name:
              {product.name},
            </span>
            <span>sales:{product.sales}</span>
            <span>
              {" "}
              <Button
                variant="primary"
                onClick={() => this.handleSales(product.name, index)}
              >
                sales
              </Button>{" "}
            </span>
            {product.sales > 0 && (
              <Button
                variant="danger"
                onClick={() => this.handleReturn(product.name, index)}
              >
                Return{" "}
              </Button>
            )}
          </div>
        ))}
        total sale: {this.state.totalSale}
        <br />
        Best seller : {this.state.bestSeller}
      </div>
    );
  }
}
