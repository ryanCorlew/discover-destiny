import React from "react";
import "./App.css";

import Form from "./components/Form";
import Result from "./components/Result";

const API_KEY = "d412c8322a5249f1849e04b9aa63ded9";

class App extends React.Component {
  state = {
    userInput: "",
    searchResult: "",
  };

  inputChange = (e) => {
    const searchQuery = e.target.value;
    this.setState({ userInput: searchQuery });
  };

  print = (e) => {
    if (e) e.preventDefault();
    fetch(
      `https://www.bungie.net/platform/Destiny2/Armory/Search/DestinyInventoryItemDefinition/${this.state.userInput}/`,
      {
        headers: { "X-API-Key": API_KEY, "Content-Type": "application/json" },
        mode: "cors",
        cache: "default",
        method: "GET",
      }
    )
      .then((response) => {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then((data) => {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        // const res = data.Response;
        // this.setState({ gHorn: res.data.inventoryItem.itemName });
        if (data.Response.results.results.length > 0) {
          const res = data.Response.results.results[0].displayProperties;
          this.setState({ searchResult: res });
        } else this.setState({ searchResult: "" });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Discover Destiny</h1>
        <Form inputChange={this.inputChange} print={this.print} />
        {this.state.searchResult ? (
          <Result searchResult={this.state.searchResult} />
        ) : null}
      </div>
    );
  }
}

export default App;
