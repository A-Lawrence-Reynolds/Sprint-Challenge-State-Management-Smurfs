import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import DisplaySmurfs from "./DisplaySmurfs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList />
        <DisplaySmurfs />
      </div>
    );
  }
}

export default App;
