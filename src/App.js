import React, { Component } from "react";
import math from "mathjs";
import RandomButton from "./RandomButton";
import Input from "./Input";
import AddButton from "./AddButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["gordon", "sahil", "david", "sally", "jane", "alice"],
      luckyWinnerIndex: null,
      value: ""
    };
  }

  render() {
    return (
      <div>
        <h1 id="app-title">Hello, random name picker</h1>
        <Input handleClick={event => this.handleChange(event)} />
        <AddButton handleClick={() => this.handleClickAdd()} />
        {this.state.names.map((name, i) => {
          if (this.state.luckyWinnerIndex === i) {
            return (
              <li key={i} id="winner">
                {name}
              </li>
            );
          } else {
            return (
              <li key={i} id="">
                {name}
              </li>
            );
          }
        })}

        <RandomButton handleClick={() => this.handleClick()} />
      </div>
    );
  }

  handleClick() {
    const number = math.randomInt(this.state.names.length);
    console.log(number);
    this.setState({ luckyWinnerIndex: number });
  }

  handleClickAdd() {
    this.setState({ names: [...this.state.names, this.state.value] });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
}

export default App;
