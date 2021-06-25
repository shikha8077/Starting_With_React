import React, { Component } from "react";
import { Grid, Row, Col, Container, Button, Table } from "react-bootstrap";

export default class Movies extends Component {
  state = {
    movies: [
      {
        id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: { id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
      },
      {
        id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: { id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
      },
      {
        id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
      },
      {
        id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: { id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: { id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
      },
      {
        id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: { id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5,
      },
      {
        id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: { id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
    ],
    setData: 0,
    copiedArray: [],
  };
  handleData = (data) => {
    console.log(data);

    this.setState({ setData: data });
  };
  handleSort() {
    let localArray = [...this.state.movies];
    if (this.state.setData === "title") {
      return localArray.sort(this.sortTitle);
    } else if (this.state.setData === 0) {
      return localArray;
    } else if (this.state.setData === "genre") {
      return localArray.sort(this.sortGenre);
    } else if (this.state.setData === "stock") {
      return localArray.sort(this.sortStock);
    } else if (this.state.setData === "rate") {
      return localArray.sort(this.sortRate);
    }
  }
  sortRate(a, b) {
    return a.dailyRentalRate - b.dailyRentalRate;
  }
  sortStock(a, b) {
    return a.numberInStock - b.numberInStock;
  }
  sortGenre(a, b) {
    return a.genre.name.localeCompare(b.genre.name);
  }
  sortTitle(a, b) {
    return a.title.localeCompare(b.title);
  }
  handledelete = (id) => {
    console.log(id);
    let localDelete = [...this.state.movies];
    localDelete = localDelete.filter((data) => data.id !== id);
    this.setState({ movies: localDelete });
    console.log(localDelete);
  };
  render() {
    let localArray = this.handleSort();

    return (
      <div>
        {this.state.movies.length == 0 ? (
          "Their is no Array"
        ) : (
          <div>
            movies length:{this.state.movies.length}
            <Table>
              <thead>
                <tr>
                  <th onClick={() => this.handleData("title")}>Title</th>
                  <th onClick={() => this.handleData("genre")}>Genre</th>
                  <th onClick={() => this.handleData("stock")}>Stock</th>
                  <th onClick={() => this.handleData("rate")}>Rate</th>
                </tr>
              </thead>
              {localArray.map((movies) => (
                <tbody>
                  <td> {movies.title}</td>
                  <td>{movies.genre.name}</td>
                  <td>{movies.numberInStock}</td>
                  <td>{movies.dailyRentalRate}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => this.handledelete(movies.id)}
                    >
                      Delete{" "}
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.handleEdit(movies.id)}
                    >
                      Edit{" "}
                    </Button>
                  </td>
                </tbody>
              ))}
            </Table>
          </div>
        )}
      </div>
    );
  }
}
